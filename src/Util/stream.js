import Puppeteer from 'puppeteer'
import {
	SettingsButton,
	QualityButton,
	MinorQualityButton,
	AdsButton,
	MuteButton
} from './constants.js'

/**
 * @param {Puppeteer.Page} Page
 */
export async function Stream(Page) {
	const selector = await Page.waitForSelector(AdsButton).catch(() => null)
	if (typeof selector !== 'undefined' && selector !== null)
		selector.click().catch(() => {})

	try {
		await Page.waitForSelector(MuteButton)
		await Page.click(MuteButton)
		await Page.click(MuteButton)

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

	console.log('✨ Optimized!')
}
