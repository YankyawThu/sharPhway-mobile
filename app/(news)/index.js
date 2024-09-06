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
        {id: 14, title: 'ထိုင်းမှာ မုတ်သုန်မိုးကြီးပြီး ရေကြီးနိုင်', content: 'ထိုင်းမှာ မုတ်သုန်မိုးကြီးပြီး ရေကြီးနိုင်" ထိုင်း မိုးလေဝသ ဌာန (TMD) က ဒီနေ့အတွက် ရာသီဥတု သတိပေးချက်ကို ထုတ်ပြန်လိုက်ပြီး ပြည်နယ် ၅၁ ခုမှာ မုတ်သုန်မိုးကြီးနိုင်တယ်လို့ ခန့်မှန်းလိုက်ပါတယ်။ ဘန်ကောက်ရဲ့ ၈၀ ရာခိုင်နှုန်းမှာ မိုးကြီးနိုင်ပြီး ရေကြီးတာကိုရင်ဆိုင်နိုင်ဖို့ ထိုင်းပြည်သူတွေကို သတိပေးလိုက်ပါတယ်။ TMD က ထိုင်း မြောက်ပိုင်းနဲ့ အရှေ့မြောက်ပိုင်းမှာ မုတ်သုန် ဝင်ရောက်မှာ ဖြစ်ပြီး တောင်တရုတ် ပင်လယ်မှာ လေဖိအားနည်း ဧရိယာ ဖြစ်ပေါ်နိုင်ပါတယ်လို့ ပြောပါတယ်။ အနောက်တောင် မုတ်သုန်ဟာ ကပ္ပလီပင်လယ်နဲ့ ထိုင်း ပင်လယ်ကွေ့ကို ဖြတ်သန်းနိုင်ပြီး မိုးကြီးနိုင်ပါတယ်။ ကပ္ပလီပင်လယ်ရဲ့ အထက်ပိုင်းမှာ လေအသင့်အတင့် အားကောင်းနိုင်ပြီး လှိုင်းအမြင့်ဟာ ၂ မီတာဝန်းကျင် ရှိနိုင်ပါတယ်။ ကပ္ပလီပင်လယ်အောက်ပိုင်းနဲ့ ထိုင်း ပင်လယ်ကွေ့မှာ လှိုင်းအမြင့်ဟာ ၁ မီတာ ကနေ ၂ မီတာ အထိ ရှိနိုင်ပါတယ်။ ရေလမ်း ခရီးသွားသူတွေကို ဂရုစိုက်ဖို့နဲ့ မုန်တိုင်းကို ရှောင်ရှားဖို့ သတိပေးထားပါတယ်။ စက်တင်ဘာလ ၃ ရက်ကနေ နောက် ၅ ရက်အတွင်း မုတ်သုန်ဟာ ထိုင်း မြောက်ပိုင်း(အောက်)၊ အလယ်ပိုင်းနဲ့ အရှေ့မြောက်ပိုင်းကို ရွေ့လျားနိုင်ပြီး အဲဒီကနေ တောင်တရုတ်ပင်လယ်ကို ဦးတည်နိုင်ပါတယ်။ ကပ္ပလီပင်လယ်နဲ့ ထိုင်းပင်လယ်ကွေ့ပေါ်က အနောက်တောင် မုတ်သုန်ဟာ အားပိုကောင်းလာနိုင်ပါတယ်။ အဲဒီအတွက် ထိုင်းတစ်နိုင်ငံလုံးမှာ မိုးကြီးနိုင်ပြီး အရှေ့ပိုင်းနဲ့ တောင်ပိုင်း ဒေသတွေမှာ မိုး အလွန်ကြီးနိုင်ပါတယ်။ ကပ္ပလီပင်လယ်နဲ့ထိုင်းပင်လယ်ကွေ့မှာ လေပြင်းတိုက်ခတ်နိုင်ပြီး လှိုင်းအမြင့်ဟာ ၂ ကနေ ၃ မီတာ အထိ ရှိနိုင်ပါတယ်။ အပူပိုင်းမုန်တိုင်း ဖိလစ်ပိုင် အနားမှ အပူပိုင်းမုန်တိုင်း Yagi ဟာ ထိုင်ဝမ်နဲ့ တရုတ် တောင်ပိုင်းကို ဝင်ရောက်လာပြီး အဲဒီကနေ စက်တင်ဘာလ ၃ ရက်နဲ့ ၄ ရက်မှာ တောင်တရုတ်ပင်လယ်ကို ဝင်ရောက်နိုင်ပါတယ်။ ထိုင်းမြောက်ပိုင်းရဲ့ ၇၀ ရာခိုင်နှုန်းမှာ မိုးကြိုးမုန်တိုင်း တိုက်နိုင်ပြီး Mae Hong Son, Chiang Mai, Chiang Rai, Lampang, Phayao, Nan, Uttaradit, Phitsanulok, Tak နဲ့ Phetchabun အပါအဝင် နေရာအချို့မှာ မိုးကြီးနိုင်ပါတယ်။ အပူချိန်ဟာ အနိမ့်ဆုံး အနေနဲ့ ၂၄ ကနေ ၂၅ ဒီဂရီ ဆဲလ်ဆီးယပ် နဲ့ အမြင့်ဆုံး အနေနဲ့ ၃၁ ကနေ ၃၅ ဒီဂရီ ဆဲလ်ဆီးယပ် အထိ ရှိနိုင်ပါတယ်။ အနောက်တောင်  လေတိုက်နှုန်းဟာ ၁ နာရီကို ၁၀ ကနေ ၁၅ ကီလိုမီတာအထိ ရှိနိုင်ပါတယ်။ ထိုင်း အရှေ့မြောက်ပိုင်းရဲ့ ၇၀ ရာခိုင်နှုန်းမှာ မိုးကြိုးမုန်တိုင်း တိုက်နိုင်ပြီး Loei, Nong Khai, Bueng Kan, Nong Bua Lamphu, Udon Thani, Sakon Nakhon, Nakhon Phanom, Mukdahan, Yasothon, Amnat Charoen, Ubon Ratchathani, Chaiyaphum နဲ့ Nakhon Ratchasima မှာ မိုးကြီးနိုင်ပါတယ်။ အပူချိန်ဟာ အနိမ့်ဆုံး အနေနဲ့ ၂၃ ကနေ ၂၅ ဒီဂရီ ဆဲလ်ဆီးယပ်နဲ့ အမြင့်ဆုံး အနေနဲ့ ၃၂ ကနေ ၃၄ ဒီဂရီ ဆဲလ်ဆီးယပ် အထိ ရှိနိုင်ပါတယ်။ အနောက်တောင် လေတိုက်နှုန်းဟာ ၁ နာရီကို ၁၀ ကနေ ၂၀ ကီလိုမီတာ ရှိနိုင်ပါတယ်။ ထိုင်း အလယ်ပိုင်းရဲ့ ၇၀ ရာခိုင်နှုန်းမှာ မိုးကြိုးမုန်တိုင်း တိုက်ပြီး မိုးကြီးနိုင်ပါတယ်။ အထူးသဖြင့် Lopburi, Saraburi, Phra Nakhon Si Ayutthaya, Kanchanaburi, Ratchaburi, Nakhon Pathom, Samut Songkhram နဲ့ Samut Sakhon တို့မှာ ဖြစ်ပါတယ်။ အပူချိန်ဟာ အနိမ့်ဆုံး အနေနဲ့ ၂၄ ကနေ ၂၅ ဒီဂရီ ဆဲလ်ဆီးယပ်နဲ့ အမြင့်ဆုံး အနေနဲ့ ၃၃ ကနေ ၃၅ ဒီဂရီ ဆဲလ်ဆီးယပ်အတွင်း ရှိနိုင်ပါတယ်။ အနောက်တောင် လေတိုက်နှုန်းက ၁ နာရီကို ၁၀ ကနေ ၂၀ ကီလိုမီတာ ရှိနိုင်ပါတယ်။ ထိုင်း အရှေ့ပိုင်းရဲ့ ၈၀ ရာခိုင်နှုန်းမှာ မိုးကြိုးမုန်တိုင်း တိုက်နိုင်ပြီး Nakhon Nayok, Chachoengsao, Prachinburi, Sa Kaeo, Chon Buri, Rayong, Chanthaburi နဲ့ Trat မှာ မိုးကြီးနိုင်ပါတယ်။ အပူချိန်ဟာ အနိမ့်ဆုံး အနေနဲ့ ၂၄ ကနေ ၂၅ ဒီဂရီ ဆဲလ်ဆီးယပ်နဲ့ အမြင့်ဆုံး အနေနဲ့ ၂၉ ကနေ ၃၃ ဒီဂရီ ဆဲလ်ဆီးယပ်အတွင်း ရှိနိုင်ပါတယ်။ အနောက်တောင် လေတိုက်နှုန်းဟာ ၁ နာရီကို ၁၅ ကနေ ၃၅ ကီလိုမီတာ ရှိနိုင်ပါတယ်။ ထိုင်း တောင်ပိုင်းရဲ့ ၆၀ ရာခိုင်နှုန်းမှာ မိုးကြိုးမုန်တိုင်း တိုက်နိုင်ပြီး Phetchaburi, Prachuap Khiri Khan, Chumphon, Surat Thani, Nakhon Si Thammarat, Songkhla, Yala, နဲ့ Narathiwat မှာ မိုးကြီးနိုင်ပါတယ်။ အပူချိန်ဟာ အနိမ့်ဆုံး အနေနဲ့ ၂၃ ကနေ ၂၆ ဒီဂရီ ဆဲလ်ဆီးယပ်နဲ့ အမြင့်ဆုံး အနေနဲ့ ၃၃ ကနေ ၃၅ ဒီဂရီဆဲလ်ဆီးယပ်အတွင်း ရှိနိုင်ပါတယ်။ ဘန်ကောက်နဲ့ပတ်ဝန်းကျင်ဧရိယာတွေရဲ့ ၈၀ ရာခိုင်နှုန်းမှာ မိုးကြိုးမုန်တိုင်း တိုက်နိုင်ပြီး တချို့ ဧရိယာတွေမှာ မိုးကြီးနိုင်ပါတယ်။ အပူချိန်ဟာ အနိမ့်ဆုံး အနေနဲ့ ၂၄ ကနေ ၂၅ ဒီဂရီ ဆဲလ်ဆီးယပ်နဲ့ အမြင့်ဆုံး အနေနဲ့ ၃၃ ကနေ ၃၅ ဒီဂရီ ဆဲလ်ဆီးယပ်အတွင်း ရှိနိုင်ပါတယ်။ အနောက်တောင် လေတိုက်နှုန်းဟာ ၁ နာရီကို ၁၀ ကနေ ၂၀ ကီလိုမီတာ ရှိနိုင်ပါတယ်။ ', read: 5, channel: {name: 'ဘန်ကောက်လမ်းညွှန်ကိုစိုင်း', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://images.unsplash.com/photo-1549210338-a03623c2bde3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmtrfGVufDB8fDB8fHww', img2: 'https://media.istockphoto.com/id/2158260960/photo/bkk-bts-bangkok-mass-transit-system-sky-train-which-is-an-elevated-tram-over-the-busy-streets.webp?a=1&b=1&s=612x612&w=0&k=20&c=WVGYJP2bcswvBB0fTip7NZP7vADUhWIhyAw5D_eYOAw=', img3: 'https://images.unsplash.com/photo-1685868822177-8130e0c632ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmtrfGVufDB8fDB8fHww', img4: 'https://images.unsplash.com/photo-1549287748-f095932c9f81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJra3xlbnwwfHwwfHx8MA%3D%3D', img5: 'https://images.unsplash.com/photo-1583336705987-506b59d249d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJra3xlbnwwfHwwfHx8MA%3D%3D', createdAt: 'a few minutes ago'},
        {id: 13, title: 'ဘန်ကောက် တစ်မြို့လုံးရဲ့အလှကို အပေါ်စီးက ကြည့်ရှုခံစားနိုင်မယ့် Yoona', content: '', read: 5, channel: {name: 'ဘန်ကောက်လမ်းညွှန်ကိုစိုင်း', img: 'https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2'}, img1: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/auGaMgU0ujJo4ghoEyHDkQjV3ry.jpg', createdAt: 'a few minutes ago'},
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
                            <Text style={{color: theme.colors.text, fontWeight: '500', fontSize: 13, fontFamily: 'NotoSansMyanmar-Regular'}}>{item.channel.name}</Text>
                        </View>
                        <Text style={[styles.recordRowRightTitle, {color: theme.colors.text}]} numberOfLines={2}>{item.title}</Text>
                        <View style={styles.recordRowRightBottom}>
                            <Text style={{color: theme.colors.text1, fontSize: 13}}>{item.createdAt}</Text>
                            <View style={{backgroundColor: theme.colors.text1, width: 4, height: 4, marginHorizontal: 10, borderRadius: '50%'}}></View>
                            <Text style={{color: theme.colors.text1, fontSize: 13}}>{item.read} min read</Text>
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
        paddingHorizontal: 10,
        height: 60,
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
        fontFamily: 'NotoSansMyanmar-Regular',
        fontSize: 15,
        paddingVertical: 5,
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