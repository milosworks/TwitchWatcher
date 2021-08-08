import Puppeteer from 'puppeteer'
import {
	Channels,
	BaseUrl,
	UserAgent,
	Tokens,
	DefaultNavigationTimeout
} from './constants.js'
import { CheckLogin, MakeCookie } from './login.js'
import { Stream } from './stream.js'

export async function SpawnWatcher(BrowserConfig) {
	const Pages = new Map()
	const Browsers = []

	for (const Channel of Channels) {
		Pages.set(Channel, [])

		for (const Token of Tokens) {
			console.log(`🌐 Starting browser... (Token: ${Token})`)
			const Browser = await Puppeteer.launch(BrowserConfig)
			const Page = await Browser.newPage()
			Page.setDefaultNavigationTimeout(
				process.env.TIMEOUT
					? isNaN(parseInt(process.env.TIMEOUT))
						? DefaultNavigationTimeout
						: parseInt(process.env.TIMEOUT)
					: DefaultNavigationTimeout
			)

			await Page.setUserAgent(UserAgent)

			const Cookie = MakeCookie()
			Cookie[0].value = Token

			await Page.setCookie(...Cookie)

			Pages.get(Channel).push(Page)
			Browsers.push(Browser)

			console.log(`🕐 Watching streamer... (${Channel})`)
			await Page.goto(BaseUrl + Channel, {
				waitUntil: 'networkidle0'
			})

			console.log(`🔐 Checking if succesfull login...`)
			await CheckLogin(Page)

			console.log('🧰 Optimizing RAM and bandwith usage..')
			await Stream(Page)
		}
	}

	return {
		Browsers,
		Pages
	}
}
