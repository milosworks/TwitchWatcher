import Puppeteer from 'puppeteer'
import { Channels, BaseUrl, UserAgent, Tokens } from './constants.js'
import { CheckLogin, MakeCookie } from './login.js'

export async function SpawnWatcher(BrowserConfig) {
	const Pages = new Map()
	const Browsers = []

	for (const Channel of Channels) {
		Pages.set(Channel, [])

		for (const Token of Tokens) {
			const Browser = await Puppeteer.launch(BrowserConfig)
			const Page = await Browser.newPage()
			await Page.setUserAgent(UserAgent)

			const Cookie = MakeCookie()
			Cookie[0].value = Token

			await Page.setCookie(...Cookie)

			Pages.get(Channel).push(Page)
			Browsers.push(Browser)

			await Page.goto(BaseUrl + Channel, {
				waitUntil: 'networkidle0'
			})

			await CheckLogin(Page)
		}
	}

	return {
		Browsers,
		Pages
	}
}
