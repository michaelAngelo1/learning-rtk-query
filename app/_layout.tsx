import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import { store } from "@/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack 
        screenOptions={{
          statusBarStyle: 'dark',
          headerShown: false,
        }}
      >
        <Stack.Screen name='index'/>
      </Stack>
    </Provider>
  )
}