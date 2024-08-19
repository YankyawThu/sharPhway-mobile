import { Text, View } from "react-native"
import { Link, useNavigation } from "expo-router"
import { useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function News() {
    return (
        <SafeAreaView>
            <View>
                <Text>News</Text>
            </View>
        </SafeAreaView>
    )
}