import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView, SafeAreaView } from "react-native"
import { Link, useNavigation } from "expo-router"
import { useEffect } from "react";
import { Image } from 'expo-image';

export default function Home() {
    const navigation = useNavigation();

    const mockData = [
        {id: 1, currency: 'Baht', buy: 710, sell: 690, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 2, currency: 'Baht', buy: 695, sell: 680, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 3, currency: 'Baht', buy: 695, sell: 675, base_amount: 100000, createdAt: 'a hour ago'},
        {id: 4, currency: 'Baht', buy: 670, sell: 650, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 5, currency: 'Baht', buy: 660, sell: 643, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 6, currency: 'Baht', buy: 665, sell: 650, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 7, currency: 'Baht', buy: 687, sell: 669, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 8, currency: 'Baht', buy: 740, sell: 720, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 9, currency: 'Baht', buy: 620, sell: 600, base_amount: 100000, createdAt: 'a few minutes ago'},
        {id: 10, currency: 'Baht', buy: 540, sell: 520, base_amount: 100000, createdAt: 'a few minutes ago'}
    ]

    const render = ({item}) => {
        let sign = ''
        mockData.map((exchange, i) => {
            if(exchange.id == item.id) {
                let key = i == mockData.length-1 ? i : i+1
                if(item.sell >= mockData[key].sell) {
                    sign = <Image source={require('../../assets/icons/rateUp.svg')} style={styles.rateIcon} />
                }
                else {
                    sign = <Image source={require('../../assets/icons/rateDown.svg')} style={styles.rateIcon} />
                }
            }
        })
        return (
            <View style={styles.recordRow} key={item.id}>
                <Text style={styles.recordRowText}>{sign}</Text>
                <Text style={styles.recordRowText}>{item.buy}</Text>
                <Text style={styles.recordRowText}>{item.sell}</Text>
                <Text style={{width: 90, color: '#9F9F9F', fontSize: 12}}>{item.createdAt}</Text>
            </View>
        )
    }

    const renderHeader = () => (
        <View style={styles.recordHeader}>
            <Text style={styles.recordHeaderText}></Text>
            <Text style={styles.recordHeaderText}>BUY</Text>
            <Text style={styles.recordHeaderText}>SELL</Text>
            <Text style={[styles.recordHeaderText, {width: 90}]}>TIME</Text>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <ScrollView>
                <View style={styles.exchangeCard}>
                    <View style={styles.exchangeCardHeader}>
                        <TouchableOpacity>
                            <View style={styles.exchangeCardHeaderLeft}>
                                <Image source={require('../../assets/icons/reverse.svg')} style={styles.reverseIcon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.exchangeCardHeaderRight}>
                            <Image source={require('../../assets/icons/baht.svg')} style={styles.goldIcon} />
                            <Text style={styles.exchangeCardHeaderRightText}>760</Text>
                            <Text style={styles.exchangeCardHeaderRightText}> = </Text>
                            <Text style={styles.exchangeCardHeaderRightText}>100000</Text>
                            <Image source={require('../../assets/icons/kyat.svg')} style={styles.kyatIcon} />
                        </View>
                    </View>
                    <View style={styles.exchangeCardBody}>
                        <View style={styles.exchangeCardBodyReceive}>
                            <Text style={styles.exchangeCardBodyLeftText}>Receive</Text>
                                <View style={styles.exchangeSendBox}>
                                    <TextInput style={styles.exchangeReceiveInput} autoCorrect={false} keyboardAppearance="default" keyboardType="number-pad" maxLength={7} textAlign="right" readOnly="true" defaultValue="760" />
                                    <Text style={styles.exchangeBodyRightText}>Baht</Text>
                                </View>
                        </View>
                        <View style={styles.exchangeCardBodySend}>
                            <Text style={styles.exchangeCardBodyLeftText}>Send</Text>
                                <View style={styles.exchangeSendBox}>
                                    <TextInput style={styles.exchangeSendInput} autoCorrect={false} keyboardAppearance="default" keyboardType="number-pad" maxLength={7} textAlign="right" defaultValue="9999999" />
                                    <Text style={styles.exchangeBodyRightText}>Ks</Text>
                                </View>
                        </View>
                    </View>
                </View>
                <View style={styles.oldRecords}>
                    <Text style={styles.header2}>Records</Text>
                    <FlatList scrollEnabled={false} data={mockData} keyExtractor={item => item.id.toString()} renderItem={render} ListHeaderComponent={renderHeader} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: '1',
        backgroundColor: '#ffffff',
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
        borderColor: '#E9E9E9',
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
        width: 25,
        height: 25,
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
        backgroundColor: '#F5F5F5',
        borderRadius: 15,
        paddingHorizontal: 10
    },
    exchangeCardBodyReceive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 65,
        backgroundColor: '#F5F5F5',
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
        width: 100,
        height: 40,
        paddingHorizontal: 5,
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: '#ffffff',
        borderRadius: 10,
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
    oldRecords: {
        marginHorizontal: 15
    },
    header2: {
        fontSize: 25,
        fontWeight: '700',
        paddingVertical: 20
    },
    recordHeader: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    recordHeaderText: {
        flexBasis: '25%',
        width: 45,
        textAlign: 'left',
        fontSize: 12,
        color: '#9F9F9F'
    },
    recordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 65,
        borderColor: '#E9E9E9',
    },
    recordRowText: {
        flexBasis: '25%',
        width: 45,
        textAlign: 'left',
        fontWeight: '500',
    },
    rateIcon: {
        width: 35,
        height: 35
    }
})