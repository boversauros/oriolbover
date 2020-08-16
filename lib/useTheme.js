import { useCallback, useEffect } from 'react'
import useSWR from 'swr'

export const themeStorageKey = 'theme'

const isServer = typeof window === 'undefined'

const getTheme = () => {
  if (isServer) return 'dark'
  return localStorage.getItem(themeStorageKey) || 'dark'
}

const setLightMode = () => {
  try {
    localStorage.setItem(themeStorageKey, 'light')
    document.documentElement.classList.add('light')
  } catch (err) {
    console.error(err)
  }
}

const setDarkMode = () => {
  try {
    localStorage.setItem(themeStorageKey, 'dark')
    document.documentElement.classList.remove('light')
  } catch (err) {
    console.error(err)
  }
}

const useTheme = () => {
  const { data: theme, mutate } = useSWR(themeStorageKey, getTheme, {
    initialData: getTheme(),
  })

  const setTheme = useCallback(
    (newTheme) => {
      mutate(newTheme, false)
    },
    [mutate]
  )

  useEffect(() => {
    if (theme === 'dark') {
      setDarkMode()
    } else {
      setLightMode()
    }
  }, [theme])

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme(!theme || theme === 'dark' ? 'light' : 'dark'),
  }
}

export default useTheme
