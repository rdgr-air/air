'use-client'

import { useEffect, useLayoutEffect, useState } from 'react'

/** @type {import('tailwindcss').Config} */
import TailwindConfig from '../../../tailwind.static'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

type Breakpoint = 'mobile' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface MinWidth {
  max: string
}

type MinWidthUnionType = MinWidth | string

const getMediaQueryList = (breakpoint: Breakpoint) => {
  const minWidth: MinWidthUnionType = TailwindConfig.theme.screens[breakpoint]
  let mediaQueryList: MediaQueryList
  if (breakpoint === 'mobile') {
    mediaQueryList = matchMedia(`(max-width: ${(minWidth as MinWidth).max})`)
  } else {
    mediaQueryList = matchMedia(`(min-width: ${minWidth})`)
  }
  return mediaQueryList
}

export const useBreakpoint = (breakpoint: Breakpoint) => {
  const [matches, setMatches] = useState<boolean>()
  useIsomorphicLayoutEffect(() => {
    const mediaQueryList = getMediaQueryList(breakpoint)
    setMatches(mediaQueryList.matches)

    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaQueryList.addEventListener('change', onChange)

    return () => mediaQueryList.removeEventListener('change', onChange)
  }, [breakpoint])

  return {
    isLoading: typeof matches === 'undefined',
    matches,
  }
}
