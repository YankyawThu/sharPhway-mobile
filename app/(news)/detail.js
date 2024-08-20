import { Text, View } from "react-native"
import { Link, useNavigation } from "expo-router"
import { useEffect } from "react"

export default function Detail() {
    const navigation = useNavigation()

    return (
        <View>
            <Text>News detail</Text>
        </View>
    )
}