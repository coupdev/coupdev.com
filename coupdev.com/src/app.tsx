import type { FC, JSX } from 'preact/compat'
import clsx from 'clsx'

import { useRotatingTitle } from './hooks/use-rotating-title'
import { LINKS } from './links'

import './app.css'
// import { NoiseCanvas } from './components'

interface ItemProps {
  id: string
  text?: string
  url: string
  photoUrl: string
  icon: JSX.Element
  isIconCentered?: boolean
  description?: string
  shouldOpenInNewTab?: boolean
}

const Item: FC<ItemProps> = ({ text, id, url, photoUrl, icon, isIconCentered, description, shouldOpenInNewTab = true }) => {
  return (
    <a
      href={url}
      target={clsx(shouldOpenInNewTab && '_blank')}
      rel='noopener noreferrer'
      class={clsx('item', `item-${id}`)}
    >
      <div class='item-image' style={{ backgroundImage: `url(${photoUrl})` }} />
      <div class={clsx(isIconCentered ? 'item-icon-centered' : 'item-icon')}>{icon}</div>
      <div class='item-text'>
        <div class='item-text-title'><b>{text}</b></div>
        <div class='item-text-description'>{description}</div>
      </div>
    </a>
  )
}

export function App() {
  useRotatingTitle()

  return (
    <>
      {/* <NoiseCanvas /> */}

      <div class='container'>
        <div class='grid'>
          {LINKS.map((link) => (
            <Item key={link.id} {...link} />
          ))}
        </div>
  
        <div class='container-title'>
          <h2>coupdev.com</h2>
          <p class='text-small'>
            collection of all the important links
          </p>
        </div>
      </div>
    </>
  )
}
