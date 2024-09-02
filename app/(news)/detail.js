import { Text, View, StyleSheet } from "react-native"
import { router, useLocalSearchParams} from "expo-router"
import { useEffect } from "react"
import { useTheme } from '../../context/theme'

export default function Detail() {
    const { news } = useLocalSearchParams()
    const data = JSON.parse(news)
    const { theme } = useTheme()

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <Text>News {data.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})