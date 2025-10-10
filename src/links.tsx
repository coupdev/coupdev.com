import type { JSX } from 'preact/compat'
import { IconTelegram, IconGitHub, IconWakatime, IconSteam, IconInstagram, IconTikTok, IconMusic, IconDonate } from './icons'

export interface LinkItem {
  id: string
  text?: string
  url: string
  photoUrl: string
  icon: JSX.Element
  isIconCentered?: boolean
  description?: string
  shouldOpenInNewTab?: boolean
}

export const LINKS: LinkItem[] = [
  { id: 'telegram', text: 'telegram', description: 'my telegram', url: 'https://t.me/coupdev', photoUrl: 'http://i.faustyu.xyz/icons/coup/telegram.jpg', icon: <IconTelegram /> },
  { id: 'wakatime', text: 'wakatime', description: 'coding stats', url: 'https://wakatime.com/@coup', photoUrl: 'http://i.faustyu.xyz/icons/coup/wakatime.JPG', icon: <IconWakatime /> },
  { id: 'github', text: 'github', description: 'i code', url: 'https://github.com/coupdev', photoUrl: 'http://i.faustyu.xyz/icons/coup/github.JPG', icon: <IconGitHub /> },
  { id: 'steam', text: 'steam', description: 'gaming profile', url: 'https://steamcommunity.com/id/coupick/', photoUrl: 'http://i.faustyu.xyz/icons/coup/steam.JPG', icon: <IconSteam /> },
  { id: 'instagram', url: 'https://www.instagram.com/coupdev', photoUrl: 'http://i.faustyu.xyz/icons/coup/instagram.JPG', icon: <IconInstagram />, isIconCentered: true },
  { id: 'tiktok', url: 'https://www.tiktok.com/@coupdev', photoUrl: 'http://i.faustyu.xyz/icons/coup/tiktok.JPG', icon: <IconTikTok />, isIconCentered: true },
  { id: 'music', text: 'music', description: 'my music', url: 'https://open.spotify.com/playlist/2jQK5PRzliAyUOm9R1eRxq?si=xFCvbDh_SNCRm9bINh8lBQ&pi=KO5JAwhAShyT3', photoUrl: 'https://i.pinimg.com/564x/d7/31/66/d73166e23f776ead27f07fac5a435d70.jpg', icon: <IconMusic /> },
  { id: 'donate', text: 'donate', description: 'support me', url: 'https://t.me/send?start=IVvu4P6BpsVb', photoUrl: 'http://i.faustyu.xyz/icons/coup/donate.JPG', icon: <IconDonate /> },
  { id: 'sources', text: 'sources', description: 'sources of this site', url: 'https://github.com/coupdev/coupdev.com', photoUrl: 'http://i.faustyu.xyz/icons/coup/about.JPG', icon: <IconGitHub /> },
]


