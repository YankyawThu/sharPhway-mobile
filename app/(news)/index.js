import { Text, View, TextInput, StyleSheet, SafeAreaView, RefreshControl, FlatList, ScrollView, Pressable, Animated, Easing, TouchableOpacity } from "react-native"
import { Link, router, useNavigation } from "expo-router"
import { useState, useEffect, useRef, useCallback } from "react"
import { useTheme } from '../../context/theme'
import { Image } from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useScrollToTop } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo'

export default function News() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const [refreshing, setRefreshing] = useState(false)
    const navigation = useNavigation()
    const textInputAnimated = useRef(new Animated.Value(0)).current

    useScrollToTop(
        useRef({
            scrollToTop: () => {
                ref.current?.scrollTo({ y: 0, animated: true })
            }
        })
    )

    const fetchData = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
          }, 2000)
    }, [])

    const goDetail = item => {
        router.push({
            pathname: '/detail',
            params: {news: JSON.stringify(item)}
        })
    }

    const open = () => {
        Animated.timing(textInputAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false,
          }).start(() => {
        });
    };

    const close = () => {
        Animated.timing(textInputAnimated, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false,
          }).start(() => {
        });
    };

    const refresh = <RefreshControl refreshing={refreshing} onRefresh={fetchData} />

    const mockData = [
        {id: 14, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 13, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 12, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးကကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 11, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 10, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 9, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 8, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 7, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 6, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 5, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 4, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 3, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 2, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
        {id: 1, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'BBC news', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'}
    ]

    const render = ({item, index}) => {
        return (
            <View>
                <TouchableOpacity onPress={() => goDetail(item)} style={[styles.recordRow]} key={item.id}>
                    <View style={styles.recordRowRight}>
                        <View style={styles.recordRowRightHeader}>
                            <Image contentFit="cover" source={item.channel.img} style={{width: 12, height: 12, borderRadius: '50%'}} />
                            <Text style={{color: theme.colors.text, fontWeight: '500', fontSize: 13}}>{item.channel.name}</Text>
                        </View>
                        <Text style={[styles.recordRowRightTitle, {color: theme.colors.text}]} numberOfLines={3}>{item.title}</Text>
                        <View style={styles.recordRowRightBottom}>
                            <Text style={{color: theme.colors.text1, fontSize: 13}}>{item.createdAt}</Text>
                            <View style={{backgroundColor: theme.colors.text1, width: 4, height: 4, marginHorizontal: 10, borderRadius: '50%'}}></View>
                            <Text style={{color: theme.colors.text1, fontSize: 13}}>{item.read} mins read</Text>
                        </View>
                    </View>
                    <View style={styles.recordRowLeft}>
                        <Image contentFit="cover" source={item.img1} style={[styles.recordRowLeftImage, {borderColor: theme.colors.color2}]} />
                    </View>
                </TouchableOpacity>
                <View style={{borderBottomWidth: index < mockData.length - 1 ? 1 : 0, borderColor: theme.colors.color2}}></View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <View style={styles.header}>
                <Text style={[styles.headerLeftText, {color: theme.colors.text}]}>News</Text>
                <View style={styles.headerRight}>
                    <Animated.View style={[styles.animated, {transform: [{scaleX: textInputAnimated}]}]}>
                        <TextInput style={[styles.input, {backgroundColor: theme.colors.color2, color: theme.colors.text}]} placeholder="Search here.." />
                        <TouchableOpacity onPress={close} style={styles.crossBox}>
                            <Entypo style={styles.cross} name="cross" size={26} color={theme.colors.text1} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Pressable onPress={open} style={{width: 45, height: 45, position: 'absolute'}}>
                        <View style={[styles.headerRightIcon, {backgroundColor: theme.colors.color2}]}>
                            <FontAwesome name="search" size={22} color={theme.colors.text} style={{margin: 'auto', marginTop: 10}} />
                        </View>
                    </Pressable>
                </View>
            </View>
            <ScrollView ref={ref} refreshControl={refresh} showsVerticalScrollIndicator={false}>
                <View style={styles.newsBox}>
                    <FlatList scrollEnabled={false} data={mockData} keyExtractor={item => item.id.toString()} renderItem={render} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: '1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerLeftText: {
        fontSize: 27,
        fontWeight: '700',
    },
    newsBox: {
        paddingHorizontal: 10
    },
    recordRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    recordRowLeft: {
        flexBasis: '28%'
    },
    recordRowLeftImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    recordRowRight: {
        flexBasis: '65%',
        flexDirection: 'column',
    },
    recordRowRightTitle: {
        fontSize: 15,
        paddingVertical: 10
    },
    headerRight: {
    },
    animated: {
        // marginLeft: 'auto',
    },
    input: {
        position: 'absolute',
        right: 0,
        width: 280,
        height: 45,
        top: -1,
        alignSelf: 'center',
        paddingLeft: 15,
        paddingVertical: 10,
        borderRadius: '50%',
        fontSize: 16
    },
    crossBox: {
        right: 40,
    },
    cross: {
        right: 0,
        padding: 8,
    },
    headerRightIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: 45,
        height: 45,
        borderRadius: '50%',
        bottom: 1
    },
    recordRowRightBottom: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recordRowRightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})