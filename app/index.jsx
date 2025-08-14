import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";
export default function App() {
    return (

        <View className="flex-1 items-center justify-center">
            {/* <ImageBackground className=" bg-cover w-full h-full" source={image}> */}
            <Text className="text-xl font-bold text-blue-500">
                Welcome to home!
            </Text>
            <View className="flex flex-row items-center gap-4 bg-slate-500 p-4 rounded-xl">
                <Link href="/details" className="text-white">View details</Link>
                <Link href="/explore" className="text-white">Explore Now</Link>
            </View>

            <View className="flex flex-row items-center gap-4 bg-slate-900 p-4 rounded-xl">
                <Link href="/tab/1" className="text-white">User 1</Link>
                <Link href="/tab/2" className="text-white">User 2</Link>
            </View>

            <View className="flex flex-row items-center gap-4 bg-slate-950 p-4 rounded-xl">
                <Link href="/movie/1" className="text-white">Movie 1</Link>
                <Link href="/movie/2" className="text-white">Movie 2</Link>
            </View>
            {/* </ImageBackground> */}

        </View>
    );

}

