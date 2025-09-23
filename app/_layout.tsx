import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      {Platform.OS === 'android' ? (
        <View
          style={{
            height: RNStatusBar.currentHeight ?? 0,
            backgroundColor: '#000',
          }}
        />
      ) : (
        <SafeAreaView style={{ backgroundColor: '#000' }} />
      )}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
