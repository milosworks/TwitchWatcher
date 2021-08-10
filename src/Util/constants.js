export const BaseUrl = 'https://twitch.tv/'

export const UserAgent =
	process.env.userAgent ||
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'

export const Channels = process.env.CHANNELS.split(',')

export const Tokens = process.env.TOKENS.split(',')

export const DefaultNavigationTimeout = 60000

export const Player =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-588ddc-0.iTtXFV.persistent-player'
export const MuteButton =
	'#root > div > div.sc-AxiKw.idyRgi > div.sc-AxiKw.kSzSVy > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.fniENP.persistent-player.sc-AxheI > div > div.sc-AxiKw.bOTXee.video-player > div > div > div > div > div:nth-child(5) > div > div.sc-AxiKw.kIfWYD > div.sc-AxiKw.bGYvBM.player-controls__left-control-group > div:nth-child(2) > div > div.sc-AxiKw.sc-fznWOq.oDDQo > button'
export const AdsButton =
	'#root > div > div.sc-AxiKw.idyRgi > div.sc-AxiKw.kSzSVy > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.channel-root.channel-root--live.channel-root--watch.channel-root--unanimated > div.sc-AxiKw.dXUqgi > div.channel-root__info > div > div.sc-AxiKw.eLDRXj > div > div > div > div.sc-AxiKw.GrbBd > div.sc-AxiKw.fuAlsY.metadata-layout__support > div.sc-AxiKw.gTJdSw > div.sc-fzoyTs.dzQGnO > div > div.sc-AxiKw.gcLvur > div > div > div.sc-AxiKw.bljTJp > button'
export const SettingsButton =
	'#root > div > div.sc-AxiKw.idyRgi > div.sc-AxiKw.kSzSVy > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.fniENP.persistent-player.sc-AxheI > div > div.sc-AxiKw.bOTXee.video-player > div > div > div > div > div:nth-child(5) > div > div.sc-AxiKw.kIfWYD > div.sc-AxiKw.hGjGSn.player-controls__right-control-group > div:nth-child(2) > div:nth-child(2) > div > button'
export const QualityButton =
	'#root > div > div.sc-AxiKw.idyRgi > div.sc-AxiKw.kSzSVy > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.fniENP.persistent-player.sc-AxheI > div > div.sc-AxiKw.bOTXee.video-player > div > div > div > div > div:nth-child(5) > div > div.sc-AxiKw.kIfWYD > div.sc-AxiKw.hGjGSn.player-controls__right-control-group > div:nth-child(2) > div.sc-AxiKw.bOTXee.settings-menu-button-component.settings-menu-button-component--forced-dark-theme.tw-root--theme-dark.tw-root--hover > div > div > div > div > div > div > div:nth-child(3) > button > div'
export const MinorQualityButton =
	'#root > div > div.sc-AxiKw.idyRgi > div.sc-AxiKw.kSzSVy > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.fniENP.persistent-player.sc-AxheI > div > div.sc-AxiKw.bOTXee.video-player > div > div > div > div > div:nth-child(5) > div > div.sc-AxiKw.kIfWYD > div.sc-AxiKw.hGjGSn.player-controls__right-control-group > div:nth-child(1) > div.sc-AxiKw.bOTXee.settings-menu-button-component.settings-menu-button-component--forced-dark-theme.tw-root--theme-dark.tw-root--hover > div > div > div > div > div > div > div:nth-child(8)'
