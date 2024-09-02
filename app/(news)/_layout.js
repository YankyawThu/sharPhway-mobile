import { Stack } from "expo-router"
import { useColorScheme } from 'react-native'

export default function NewsLayout() {
   const colorScheme = useColorScheme()

   const color = colorScheme === 'dark' ? '#161616' : '#7D7D7D'

   return (
      <Stack screenOptions={{
         headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
         },
      }}>
         <Stack.Screen
            name="index"
            options={{
               headerShown: false
            }}
         />
         <Stack.Screen
            name="detail"
            options={{

            }}
         />
      </Stack>
   )
}
