import { Stack } from "expo-router"

export default function ExchangeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }}
      />
    </Stack>
  )
}
