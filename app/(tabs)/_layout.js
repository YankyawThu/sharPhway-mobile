import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(news)" />
      <Tabs.Screen name="(exchange)" />
    </Tabs>
  );
}
