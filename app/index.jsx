import { ImageBackground, Text, View } from "react-native";
import "../global.css";
import image from './../assets/images/bg.jpg';
export default function App() {
    return (

        <View className="flex-1 items-center justify-center">
            <ImageBackground className=" bg-cover w-full h-full" source={image}>
                <Text className="text-xl font-bold text-blue-500">
                    Welcome to home!
                </Text>
            </ImageBackground>

        </View>
    );

}

