import "../global.css"
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Banti!
      </Text>
      <Link className="text-xl font-bold text-black" href="/home">Home</Link>
    </View>
  );
}