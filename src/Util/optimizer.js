import Puppeteer from 'puppeteer'
import {
	SettingsButton,
	QualityButton,
	MinorQualityButton,
	AdsButton,
	MuteButton,
	Player,
	DarkModeButton,
	AlreadyDarkModeButton,
	UserMenuButton
} from './constants.js'
import { Debug } from './debug.js'

/**
 * @param {Puppeteer.Page} Page
 */
export async function Optimizer(Page) {
	Debug('Waiting to check if offline', Page, 'offlineCheck')
	const offline = await Page.$('a.ScHalo-sc-1l14b0i-0 kYWeIT tw-halo').catch(
		() => null
	)

	if (!offline || !offline.status === 'offline') {
		Debug('Waiting for user menu', Page, 'userMenu')
		const Menu = await Page.waitForSelector(UserMenuButton).catch(
			() => null
		)
		if (typeof Menu !== 'undefined' && Menu !== null) {
			Menu.click().catch(() => {})

			Debug('Waiting for already dark mode')
			const CheckDarkMode = await Page.waitForSelector(
				AlreadyDarkModeButton
			).catch(() => null)
			if (
				typeof CheckDarkMode === 'undefined' ||
				CheckDarkMode === null
			) {
				Debug('Waiting for dark mode')
				const DarkMode = await Page.waitForSelector(
					DarkModeButton
				).catch(() => null)

				if (typeof DarkMode !== 'undefined' && DarkMode !== null) {
					DarkMode.click().catch(() => {})
					Debug('Dark mode clicked', Page, 'darkModeClicked')
				}
			}

			Debug('Wait 2 sec')
			await Page.waitForTimeout(2000)

			Menu.click().catch(() => {})
		}

		Debug('Waiting for ads close button', Page, 'adsClose')
		const Ads = await Page.waitForSelector(AdsButton).catch(() => null)
		if (typeof Ads !== 'undefined' && Ads !== null)
			Ads.click().catch(() => {})

		Debug('Waiting for player', Page, 'playerWaiting')
		await Page.waitForSelector(Player).catch((e) => {
			console.log(
				'🤬 The player didnt load well, feel free to open a issue in github: https://github.com/TwitchWatcher/TwitchWatcher'
			)
			console.error(e)

			process.exit()
		})

		try {
			Debug('Waiting for mute button', Page, 'waitingMute')
			await Page.waitForSelector(MuteButton).catch(() => {})
			await Page.click(MuteButton).catch(() => {})
			await Page.click(MuteButton).catch(() => {})

			Debug('Waiting for settings button', Page, 'waitingSettings')
			await Page.waitForSelector(SettingsButton)
			await Page.click(SettingsButton)

			Debug('Waiting for quality option button', Page, 'waitingQuality')
			await Page.waitForSelector(QualityButton)
			await Page.click(QualityButton)

			Debug('Waiting for 160p button', Page, 'waitingPoorQuality')
			await Page.waitForSelector(MinorQualityButton)
			await Page.click(MinorQualityButton)

			Debug(null, Page, 'finishOp')
		} catch (e) {
			console.log(
				'🤬 An error was ocurred, feel free to open a issue in github: https://github.com/TwitchWatcher/TwitchWatcher'
			)
			console.error(e)
		}
	}

	console.log('✨ Optimized!')
}
