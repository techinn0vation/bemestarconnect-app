import { Stack } from "expo-router";

export default function RootLayoutNav() {
  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: '#dedede',
      },
      headerShown: false
    }}>
      {/* <Stack.Screen name="(app)/index" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(app)/home" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
