import React from 'react'
import '../App.css'
import useTheme from '../context/theme'


const ThemeButton = () => {
  const {themeMode, lightMode, darkMode} = useTheme()

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkMode()
        } else {
            lightMode()
        }
  }

  return (
    <div className='theme-button'>
      <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
        />
        <span>Toggle</span>
    </div>
  )
}

export default ThemeButton;