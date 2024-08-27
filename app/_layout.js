import { Tabs, useNavigation } from "expo-router"
import { Image } from 'expo-image'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from "../context/theme"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  const color = colorScheme === 'dark' ? '#161616' : '#FFFFFF'

  return (
    <ThemeProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: "#e1a249", tabBarStyle: { backgroundColor: color, borderTopColor: 'transparent' } }}>
        <Tabs.Screen
          name="(home)"
          options={{ 
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => {
              if(focused) {
                return (
                  <Image source={require('../assets/icons/home-active.svg')} style={{ width: 26, height: 26 }} />
                )
              }
              else return (
                <Image source={require('../assets/icons/home.svg')} style={{ width: 26, height: 26 }} />
              )
            }
          }}
        />
        <Tabs.Screen
          name="(news)"
          options={{
            headerShown: false,
            tabBarLabel: 'News',
            tabBarIcon: ({focused, color, size}) => {
              if(focused) {
                return (
                  <Image source={require('../assets/icons/news-active.svg')} style={{ width: 26, height: 26 }} />
                )
              }
              else return (
                <Image source={require('../assets/icons/news.svg')} style={{ width: 26, height: 26 }} />
              )
            }
          }}
        />
      </Tabs>
    </ThemeProvider>
  )
}