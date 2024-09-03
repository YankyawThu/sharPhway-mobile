import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Share } from "react-native"
import { router, useLocalSearchParams} from "expo-router"
import { useEffect, useState } from "react"
import { useTheme } from '../../context/theme'
import Header from "../../components/header"
import { Carousel } from "@ant-design/react-native"
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Detail() {
    const { news } = useLocalSearchParams()
    const data = JSON.parse(news)
    const { theme } = useTheme()
    // const [selectedIndex, setSelectedIndex] = useState(0)

    const onShare = async () => {
        try {
          const result = await Share.share({
                // message: '',
                url: 'https://wwww.google.com'
            })
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header theme={theme} />
                <View style={styles.content}>
                    <Text style={[styles.title, {color: theme.colors.text}]}>{data.title}</Text>
                    <Text style={{color: theme.colors.text1, fontSize: 13}}>{data.read} mins read</Text>
                    <View style={styles.newsInfo}>
                        <Carousel autoplay infinite style={styles.wrapper} dotStyle={{borderRadius: 10, height: 3, width: 7, marginHorizontal: 2}} dotActiveStyle={{backgroundColor: '#e1a249', width: 17}}>
                            <Image source={data.img1} style={styles.image} />
                            <Image source={data.img2} style={styles.image} />
                            <Image source={data.img3} style={styles.image} />
                            <Image source={data.img4} style={styles.image} />
                            <Image source={data.img5} style={styles.image} />
                        </Carousel>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 13}}>
                            <View style={styles.newsChannelLeft}>
                                <Image contentFit="cover" source={data.channel.img} style={{width: 40, height: 40, borderRadius: '50%'}} />
                                <View style={styles.newsChannelInfo}>
                                    <Text style={{color: theme.colors.text, fontWeight: '500', fontSize: 15, fontFamily: 'NotoSansMyanmar-Regular'}}>{data.channel.name}</Text>
                                    <Text style={{color: theme.colors.text1, fontSize: 13}}>{data.createdAt}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={onShare}>
                                <Ionicons name="share-outline" size={24} color={theme.colors.text1} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontFamily: 'NotoSansMyanmar-Regular', color: theme.colors.color5, paddingTop: 15}}>{data.content}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 17,
    },
    image: {
        height: 230,
        // borderRadius: 20,
    },
    newsInfo: {
        marginVertical: 20
    },
    wrapper: {
        width: '100%',
        height: 230,
        borderRadius: 20,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
    newsChannelLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexBasis: '70%',
    },
    newsChannelInfo: {
        flexDirection: 'column',
        gap: 2
    }
})