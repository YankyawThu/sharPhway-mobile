import { createContext, useContext } from "react"
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

const Context = createContext() 

export const ThemeProvider = ({children}) => {
    const colorScheme = useColorScheme()

    const myDarkTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            background: '#161616',
            background1: '#31291D',
            text1: '#9F9F9F',
            color2: '#404040',
            color3: '#161616',
            color4: '#595959',
            color5: '#c2c2c2',
        }
    }

    const myDefaultTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#FFFFFF',
            background1: '#FFF5E0',
            text1: '#9F9F9F',
            color2: '#e8e8e8',
            color3: '#FFFFFF',
            color4: '#cfcfcf',
            color5: '#2b2b2b',
        }
    }
    
    const theme = colorScheme === 'dark' ? myDarkTheme : myDefaultTheme

    return (
        <Context.Provider value={{theme, myDefaultTheme, myDarkTheme}}>
            {children}
        </Context.Provider>
    )
}

export const useTheme = () => useContext(Context)