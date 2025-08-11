import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { View } from 'react-native';
import { Text } from 'react-native';

export default function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-8xl font-bold text-blue-500">
          Welcome to Banti!
        </Text>
      </View>
    </>
  );
}
