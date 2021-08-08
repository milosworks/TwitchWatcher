export const BaseUrl = 'https://twitch.tv/'

export const UserAgent =
	process.env.userAgent ||
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'

export const Channels = process.env.CHANNELS.split(',')

export const Tokens = process.env.TOKENS.split(',')
