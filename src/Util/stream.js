import Puppeteer from 'puppeteer'
import {
	SettingsButton,
	QualityButton,
	MinorQualityButton,
	AdsButton,
	MuteButton,
	Player
} from './constants.js'

/**
 * @param {Puppeteer.Page} Page
 */
export async function Stream(Page) {
	const offline = await Page.$('a.ScHalo-sc-1l14b0i-0 kYWeIT tw-halo').catch(
		() => null
	)

	if (!offline || !offline.status === 'offline') {
		const selector = await Page.waitForSelector(AdsButton).catch(() => null)
		if (typeof selector !== 'undefined' && selector !== null)
			selector.click().catch(() => {})

		await Page.waitForSelector(Player).catch((e) => {
			console.log(
				'🤬 An error was ocurred, feel free to open a issue in github: https://github.com/TwitchWatcher/TwitchWatcher'
			)
			console.error(e)

			process.exit()
		})

		try {
			await Page.waitForSelector(MuteButton).catch(() => {})
			await Page.click(MuteButton).catch(() => {})
			await Page.click(MuteButton).catch(() => {})

			await Page.waitForSelector(SettingsButton)
			await Page.click(SettingsButton)

			await Page.waitForSelector(QualityButton)
			await Page.click(QualityButton)

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
