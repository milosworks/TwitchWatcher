import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { mkdirSync, existsSync, rmdirSync } from 'fs'
let Runned = false

export async function Debug(debugText, Page, name) {
	if (process.env.DEBUG !== 'true') return
	if (Page && name) {
		const __dirname = dirname(fileURLToPath(import.meta.url))
		const path = join(__dirname, '../../screenshots')

		if (!Runned && existsSync(path)) {
			rmdirSync(path)
			mkdirSync(path)
		} else if (!existsSync(path)) {
			mkdirSync(path)
		}

		await Page.screenshot({
			path: join(
				path,
				new Date()
					.toLocaleDateString('en-US')
					.split('')
					.map((x) => x.replace('/', '-')),
				'-',
				name
			)
		})
	}
	if (debugText) console.log(debugText)

	Runned = true
}
