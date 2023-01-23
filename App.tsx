import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AllDaysPage from './ui/allDaysPage';
import SingleDayPage from './ui/singleDayPage';

export default function App() {
  return (
    <SafeAreaProvider>
      <AllDaysPage/>
    </SafeAreaProvider>
  );
}