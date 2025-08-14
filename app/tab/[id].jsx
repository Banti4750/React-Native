import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const tab = () => {
    const { id } = useLocalSearchParams();
    return (
        <View >
            <Text>Details of user {id} </Text>
        </View>
    )
}

export default tab