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

/**
 * @param {Puppeteer.Page} Page
 */
export async function Optimizer(Page) {
	if (process.env.DEBUG === 'true') console.log('Waiting to check if offline')
	const offline = await Page.$('a.ScHalo-sc-1l14b0i-0 kYWeIT tw-halo').catch(
		() => null
	)

	if (!offline || !offline.status === 'offline') {
		if (process.env.DEBUG === 'true') console.log('Waiting for user menu')
		const Menu = await Page.waitForSelector(UserMenuButton).catch(
			() => null
		)
		if (typeof Menu !== 'undefined' && Menu !== null) {
			Menu.click().catch(() => {})

			if (process.env.DEBUG === 'true')
				console.log('Waiting for already dark mode')
			const CheckDarkMode = await Page.waitForSelector(
				AlreadyDarkModeButton
			).catch(() => null)
			if (
				typeof CheckDarkMode === 'undefined' ||
				CheckDarkMode === null
			) {
				if (process.env.DEBUG === 'true')
					console.log('Waiting for dark mode')
				const DarkMode = await Page.waitForSelector(
					DarkModeButton
				).catch(() => null)

				if (typeof DarkMode !== 'undefined' && DarkMode !== null) {
					if (process.env.DEBUG === 'true')
						console.log('Dark mode clicked')
					DarkMode.click().catch(() => {})
				}
			}

			if (process.env.DEBUG === 'true') console.log('Wait 2 sec')
			await Page.waitForTimeout(2000)

			Menu.click().catch(() => {})
		}

		if (process.env.DEBUG === 'true')
			console.log('Waiting for ads close button')
		const Ads = await Page.waitForSelector(AdsButton).catch(() => null)
		if (typeof Ads !== 'undefined' && Ads !== null)
			Ads.click().catch(() => {})

		if (process.env.DEBUG === 'true') console.log('Waiting for player')
		await Page.waitForSelector(Player).catch((e) => {
			console.log(
				'🤬 The player didnt load well, feel free to open a issue in github: https://github.com/TwitchWatcher/TwitchWatcher'
			)
			console.error(e)

			process.exit()
		})

		try {
			if (process.env.DEBUG === 'true')
				console.log('Waiting for mute button')
			await Page.waitForSelector(MuteButton).catch(() => {})
			await Page.click(MuteButton).catch(() => {})
			await Page.click(MuteButton).catch(() => {})

			if (process.env.DEBUG === 'true')
				console.log('Waiting for settings button')
			await Page.waitForSelector(SettingsButton)
			await Page.click(SettingsButton)

			if (process.env.DEBUG === 'true')
				console.log('Waiting for quality option button')
			await Page.waitForSelector(QualityButton)
			await Page.click(QualityButton)

			if (process.env.DEBUG === 'true')
				console.log('Waiting for 160p button')
			await Page.waitForSelector(MinorQualityButton)
			await Page.click(MinorQualityButton)
		} catch (e) {
			console.log(
				'🤬 An error was ocurred, feel free to open a issue in github: https://github.com/TwitchWatcher/TwitchWatcher'
			)
			console.error(e)
		}
	}

	console.log('✨ Optimized!')
}
