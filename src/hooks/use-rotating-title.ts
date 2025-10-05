import { useEffect } from 'preact/hooks'

const TITLES = [
  '★coupdev★',
  'links',
  'welcome',
]

export function useRotatingTitle(intervalMs: number = 1500): void {
  useEffect(() => {
    let index = 0
    const original = document.title
    const id = window.setInterval(() => {
      index = (index + 1) % TITLES.length
      document.title = TITLES[index]
    }, intervalMs)

    return () => {
      window.clearInterval(id)
      document.title = original
    }
  }, [intervalMs])
}


