export const BaseUrl = 'https://twitch.tv/'

export const UserAgent =
	process.env.userAgent ||
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'

export const Channels = process.env.CHANNELS.split(',')

export const Tokens = process.env.TOKENS.split(',')

export const DefaultNavigationTimeout = 60000

export const UserMenuButton =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > nav > div > div.Layout-sc-nxg1ff-0.dmEzmN > div.Layout-sc-nxg1ff-0.dPJVRY > div > div > div > div:nth-child(1) > button'
export const DarkModeButton =
	'body > div.ScReactModal-sc-14fx378-0.kvCBnB.tw-dialog-layer.tw-root--theme-light > div > div > div > div > div > div > div > div > div > div > div > div.simplebar-scroll-content > div > div > div:nth-child(3) > div > div > div.ScToggle-sc-796zbf-0.kCtfmS.tw-toggle'
export const AlreadyDarkModeButton =
	'body > div.ScReactModal-sc-14fx378-0.kvCBnB.tw-dialog-layer.tw-root--theme-dark > div > div > div > div > div > div > div > div > div > div > div > div.simplebar-scroll-content > div > div > div:nth-child(3) > div > div > div.ScToggle-sc-796zbf-0.kCtfmS.tw-toggle'
export const Player =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-588ddc-0.iTtXFV.persistent-player'
export const MuteButton =
	'#root > div > div.sc-AxiKw.idyRgi > div.sc-AxiKw.kSzSVy > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.fniENP.persistent-player.sc-AxheI > div > div.sc-AxiKw.bOTXee.video-player > div > div > div > div > div:nth-child(5) > div > div.sc-AxiKw.kIfWYD > div.sc-AxiKw.bGYvBM.player-controls__left-control-group > div:nth-child(2) > div > div.sc-AxiKw.sc-fznWOq.oDDQo > button'
export const AdsButton =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.channel-root.channel-root--live.channel-root--watch.channel-root--unanimated > div.Layout-sc-nxg1ff-0.bXvPxk > div.channel-root__info > div > div.Layout-sc-nxg1ff-0.iSZTod > div > div > div > div.Layout-sc-nxg1ff-0.fFqLDv > div.Layout-sc-nxg1ff-0.kcbaLi.metadata-layout__support > div.Layout-sc-nxg1ff-0.eDoSGW > div.ScTokenOverrideCSSVars-sc-1hiemy4-0.inqiTQ > div > div.Layout-sc-nxg1ff-0.cbXZbt > div > div > div.Layout-sc-nxg1ff-0.gqcyIv > button'
export const SettingsButton =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-588ddc-0.iTtXFV.persistent-player > div > div.Layout-sc-nxg1ff-0.eVxqWI.video-player > div > div > div > div > div:nth-child(7) > div > div.Layout-sc-nxg1ff-0.ggFMfF > div.Layout-sc-nxg1ff-0.fBcbAJ.player-controls__right-control-group > div:nth-child(1) > div:nth-child(2) > div > button'
export const QualityButton =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-588ddc-0.iTtXFV.persistent-player > div > div.Layout-sc-nxg1ff-0.eVxqWI.video-player > div > div > div > div > div:nth-child(7) > div > div.Layout-sc-nxg1ff-0.ggFMfF > div.Layout-sc-nxg1ff-0.fBcbAJ.player-controls__right-control-group > div:nth-child(1) > div.Layout-sc-nxg1ff-0.eVxqWI.settings-menu-button-component.settings-menu-button-component--forced-dark-theme.tw-root--theme-dark.tw-root--hover > div > div > div > div > div > div > div:nth-child(3) > button'
export const MinorQualityButton =
	'#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-588ddc-0.iTtXFV.persistent-player > div > div.Layout-sc-nxg1ff-0.eVxqWI.video-player > div > div > div > div > div:nth-child(7) > div > div.Layout-sc-nxg1ff-0.ggFMfF > div.Layout-sc-nxg1ff-0.fBcbAJ.player-controls__right-control-group > div:nth-child(1) > div.Layout-sc-nxg1ff-0.eVxqWI.settings-menu-button-component.settings-menu-button-component--forced-dark-theme.tw-root--theme-dark.tw-root--hover > div > div > div > div > div > div > div:nth-child(9)'
