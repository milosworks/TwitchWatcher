import Puppeteer from 'puppeteer'
import {
	Channels,
	BaseUrl,
	UserAgent,
	Tokens,
	DefaultNavigationTimeout
} from './constants.js'
import { CheckLogin, MakeCookie } from './login.js'
import { Optimizer } from './optimizer.js'

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

			if (process.env.DEBUG === 'true')
				console.log('Default nav timeout set')
			await Page.setUserAgent(UserAgent)

			if (process.env.DEBUG === 'true') console.log('User agent setted')
			const Cookie = MakeCookie()
			Cookie[0].value = Token

			await Page.setCookie(...Cookie)
			if (process.env.DEBUG === 'true') console.log('Cookie setted')

			Pages.get(Channel).push(Page)
			Browsers.push(Browser)

			await Page.goto(BaseUrl + Channel, {
				waitUntil: 'networkidle0'
			})
			console.log(`🕐 Watching streamer... (${Channel})`)

			console.log(`🔐 Checking if succesfull login...`)
			await CheckLogin(Page)

			console.log('🧰 Optimizing RAM and bandwith usage..')
			await Optimizer(Page)
		}
	}

	return {
		Browsers,
		Pages
	}
}
