import { Tabs, useNavigation } from "expo-router"
import { Image } from 'expo-image'

export default function TabLayout() {

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#e1a249" }}>
      <Tabs.Screen
        name="(home)"
        options={{ 
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            if(focused) {
              return (
                <Image source={require('../assets/icons/home-active.svg')} style={{ width: 24, height: 24 }} />
              )
            }
            else return (
              <Image source={require('../assets/icons/home.svg')} style={{ width: 24, height: 24 }} />
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
                <Image source={require('../assets/icons/news-active.svg')} style={{ width: 24, height: 24 }} />
              )
            }
            else return (
              <Image source={require('../assets/icons/news.svg')} style={{ width: 24, height: 24 }} />
            )
          }
        }}
      />
    </Tabs>
  )
}