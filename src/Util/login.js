import Puppeteer from 'puppeteer'

export function MakeCookie() {
	const cookie = [
		{
			domain: '.twitch.tv',
			hostOnly: false,
			httpOnly: false,
			name: 'auth-token',
			path: '/',
			sameSite: 'no_restriction',
			secure: true,
			session: false,
			storeId: '0',
			id: 1
		}
	]

	return cookie
}

//https://github.com/InstreakTV/twitch-watcher/blob/f8153c148abbce17e4039c8238ee2c053e823dc8/app.js#L305
/**
 * @param {Puppeteer.Page} page
 */
export async function CheckLogin(page) {
	const cookieSetByServer = await page.cookies()

	for (var i = 0; i < cookieSetByServer.length; i++) {
		if (cookieSetByServer[i].name == 'twilight-user') {
			console.log(`✅ Login successful!`)
			return true
		}
	}

	console.log('🔑 Invalid token!')

	process.exit()
}
