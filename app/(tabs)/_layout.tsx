import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            height: 0, // Hide tab bar since we're using custom tabs
          },
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Smart Script',
          }}
        />
        <Tabs.Screen
          name="advanced"
          options={{
            title: 'Advanced Script',
          }}
        />
      </Tabs>
    </>
  );
}