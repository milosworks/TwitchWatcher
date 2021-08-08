import './Util/config.js'
import { SpawnWatcher } from './Util/watcher.js'
;(async () => {
	await SpawnWatcher({
		headless: process.env.HEADLESS === 'true' ? true : false,
		args: [
			'--disable-dev-shm-usage',
			'--disable-accelerated-2d-canvas',
			'--no-first-run',
			'--no-zygote',
			'--disable-gpu',
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--incognito'
		],
		executablePath: process.env.CHROME_PATH
	})
})()
