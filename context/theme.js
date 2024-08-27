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
            border1: '#4A4337'
        }
    }

    const myDefaultTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#FFFFFF',
            background1: '#FFF5E0',
            text1: '#9F9F9F',
            border1: '#FFE5BC'
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