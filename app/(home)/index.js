import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView, SafeAreaView, RefreshControl, Switch } from "react-native"
import { Link, useNavigation } from "expo-router"
import { useState, useEffect, useRef, useCallback } from "react"
import { Image } from 'expo-image'
import { useScrollToTop } from '@react-navigation/native'
import { useTheme } from '../../context/theme'

export default function Home() {
    const navigation = useNavigation()
    const ref = useRef(null)
    const [refreshing, setRefreshing] = useState(false)
    const [base, setBase] = useState(true)
    const { theme } = useTheme()

    useScrollToTop(
        useRef({
            scrollToTop: () => {
                ref.current?.scrollTo({ y: 0, animated: true })
            }
        })
    )

    const mockData = [
        {id: 14, currency: 'Baht', sell: 670, buy: 650, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 13, currency: 'Baht', sell: 660, buy: 643, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 12, currency: 'Baht', sell: 665, buy: 650, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 11, currency: 'Baht', sell: 687, buy: 669, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 10, currency: 'Baht', sell: 710.12, buy: 690.12, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 9, currency: 'Baht', sell: 695, buy: 680, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 8, currency: 'Baht', sell: 695, buy: 675, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 7, currency: 'Baht', sell: 670, buy: 650, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 6, currency: 'Baht', sell: 660, buy: 643, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 5, currency: 'Baht', sell: 665, buy: 650, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 4, currency: 'Baht', sell: 687, buy: 669, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 3, currency: 'Baht', sell: 740, buy: 720, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 2, currency: 'Baht', sell: 620, buy: 600, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 1, currency: 'Baht', sell: 540, buy: 520, base_amount: 100000, createdAt: 'a few minutes ago'}
    ]

    const render = ({item}) => {
        let sign = ''
        let rate = ''
        mockData.map((exchange, i) => {
            if(exchange.id == item.id) {
                let key = i == mockData.length-1 ? i : i+1
                if(item.buy >= mockData[key].buy) {
                    rate = <Text style={{color: '#00BD55'}}>{`${parseFloat((((mockData[key].buy / item.buy) * 100) - 100).toFixed(2))} %`}</Text>
                    sign = <Image source={require('../../assets/icons/rateDown.svg')} style={styles.rateIcon} />
                }
                else {
                    rate = <Text style={{color: '#FF001C'}}>{`+${parseFloat((((mockData[key].buy / item.buy) * 100) - 100).toFixed(2))} %`}</Text>
                    sign = <Image source={require('../../assets/icons/rateUp.svg')} style={styles.rateIcon} />
                }
            }
        })
        return (
            <View style={[styles.recordRow, {borderColor: theme.colors.border}]} key={item.id}>
                <Text style={[styles.recordRowText, {flexBasis: '15%'}]}>{sign}</Text>
                <Text style={[styles.recordRowText, {flexBasis: '23%'}]}>{rate}</Text>
                <Text style={[styles.recordRowText, {flexBasis: '20%', color: theme.colors.text}]}>{item.buy}</Text>
                <Text style={[styles.recordRowText, {flexBasis: '20%', color: theme.colors.text}]}>{item.sell}</Text>
                <Text style={{width: 90, color: theme.colors.text1, fontSize: 12, flexBasis: '22%'}}>{item.createdAt}</Text>
            </View>
        )
    }

    const renderHeader = () => (
        <View style={styles.recordHeader}>
            <Text style={[styles.recordHeaderText, {flexBasis: '15%', color: theme.colors.text1}]}></Text>
            <Text style={[styles.recordHeaderText, {flexBasis: '23%', color: theme.colors.text1}]}>RATE</Text>
            <Text style={[styles.recordHeaderText, {flexBasis: '20%', color: theme.colors.text1}]}>BUY</Text>
            <Text style={[styles.recordHeaderText, {flexBasis: '20%', color: theme.colors.text1}]}>SELL</Text>
            <Text style={[styles.recordHeaderText, {width: 90, flexBasis: '22%', color: theme.colors.text1}]}>TIME</Text>
        </View>
    )

    const fetchData = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
          }, 2000)
    }, [])

    const refresh = <RefreshControl refreshing={refreshing} onRefresh={fetchData} />

    const handleBase = val => {
        setBase(prevstate => !prevstate)
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <ScrollView ref={ref} refreshControl={refresh} showsVerticalScrollIndicator={false}>
                <View style={styles.exchangeCard}>
                    <View style={styles.exchangeCardHeader}>
                        <TouchableOpacity>
                            <View style={[styles.exchangeCardHeaderLeft, {borderColor: theme.colors.border1}]}>
                                <Image source={require('../../assets/icons/reverse.svg')} style={styles.reverseIcon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.exchangeCardHeaderRight}>
                            <Image source={require('../../assets/icons/baht.svg')} style={styles.goldIcon} />
                            <Text style={[styles.exchangeCardHeaderRightText, {color: theme.colors.text}]}>760</Text>
                            <Text style={[styles.exchangeCardHeaderRightText, {color: theme.colors.text}]}> = </Text>
                            <Text style={[styles.exchangeCardHeaderRightText, {color: theme.colors.text}]}>100000</Text>
                            <Image source={require('../../assets/icons/kyat.svg')} style={styles.kyatIcon} />
                        </View>
                    </View>
                    <View style={styles.exchangeCardBody}>
                        <View style={[styles.exchangeCardBodyReceive, {backgroundColor: theme.colors.background1}]}>
                            <Text style={[styles.exchangeCardBodyLeftText, {color: theme.colors.text}]}>Receive</Text>
                                <View style={styles.exchangeSendBox}>
                                    <TextInput style={[styles.exchangeReceiveInput, {color: theme.colors.text}]} autoCorrect={false} keyboardAppearance="default" keyboardType="number-pad" maxLength={7} textAlign="right" readOnly="true" defaultValue="760" />
                                    <Text style={[styles.exchangeBodyRightText, {color: theme.colors.text}]}>Baht</Text>
                                </View>
                        </View>
                        <View style={[styles.exchangeCardBodySend, {backgroundColor: theme.colors.background1}]}>
                            <Text style={[styles.exchangeCardBodyLeftText, {color: theme.colors.text}]}>Send</Text>
                                <View style={styles.exchangeSendBox}>
                                    <TextInput style={[styles.exchangeSendInput, {color: theme.colors.text, backgroundColor: theme.colors.background}]} autoCorrect={false} keyboardAppearance="default" keyboardType="number-pad" maxLength={7} textAlign="right" defaultValue="9999999" />
                                    <Text style={[styles.exchangeBodyRightText, {color: theme.colors.text}]}>Ks</Text>
                                </View>
                        </View>
                    </View>
                </View>
                <View style={styles.oldRecordsBox}>
                    <View style={styles.recordsHeader}>
                        <Text style={[styles.header2, {color: theme.colors.text}]}>Records</Text>
                        <View style={styles.oldRecordsRight}>
                            <Text style={[styles.switchBaseText, {color: theme.colors.text1}]}>Base 100000 Ks</Text>
                            <Switch style={styles.switchBase} trackColor={{false: '#000000', true: '#F5A524'}} onValueChange={handleBase} value={base} />
                        </View>
                    </View>
                    <FlatList scrollEnabled={false} data={mockData} keyExtractor={item => item.id.toString()} renderItem={render} ListHeaderComponent={renderHeader} />
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
        fontSize: 30,
        fontWeight: '700',
        padding: 10
    },
    logo: {
        width: 220,
        height: 50,
        margin: 15
    },
    exchangeCard: {
        display: 'flex',
        marginHorizontal: 15,
    },
    exchangeCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    exchangeCardHeaderLeft: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: '100%',
    },
    reverseIcon: {
        width: 24,
        height: 24,
        margin: 'auto',
    },
    exchangeCardHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goldIcon: {
        width: 30,
        height: 30,
        marginRight: 4
    },
    kyatIcon: {
        width: 26,
        height: 26,
        marginLeft: 4,
    },
    exchangeCardBody: {
        flexDirection: 'column',
        gap: 5
    },
    exchangeCardBodyLeftText: {
        fontWeight: '500'
    },
    exchangeCardBodySend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 65,
        borderRadius: 15,
        paddingHorizontal: 10
    },
    exchangeCardBodyReceive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 65,
        borderRadius: 15,
        paddingHorizontal: 10
    },
    exchangeReceiveInput: {
        width: 100,
        height: 40,
        paddingHorizontal: 5,
        fontSize: 20,
        fontWeight: '500',
    },
    exchangeSendInput: {
        width: 110,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: '500',
        borderRadius: '50%',
    },
    exchangeSendBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    exchangeBodyRightText: {
        width: 30,
        textAlign: 'left',
        marginLeft: 5
    },
    exchangeCardHeaderRightText: {
        fontSize: 15
    },
    oldRecordsBox: {
        marginHorizontal: 15,
    },
    recordsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header2: {
        fontSize: 25,
        fontWeight: '700',
        paddingVertical: 20
    },
    oldRecordsRight: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center'
    },
    switchBase: {
        transform: [{scale: 0.6}]
    },
    switchBaseText: {
        fontSize: 12,
    },
    recordHeader: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    recordHeaderText: {
        textAlign: 'left',
        fontSize: 12,
    },
    recordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 65,
    },
    recordRowText: {
        textAlign: 'left',
        fontWeight: '500',
    },
    rateIcon: {
        width: 30,
        height: 30
    }
})