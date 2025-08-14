import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const movie = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Details of movie {id} </Text>
        </View>
    )
}

export default movie