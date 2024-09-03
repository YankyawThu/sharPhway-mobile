import { Stack } from "expo-router"

export default function FactsLayout() {
   return (
      <Stack>
         <Stack.Screen
            name="index"
            options={{
               headerShown: false
            }}
         />
      </Stack>
   )
}
