import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'

export default function Header({title = '', theme}) {
   
   return (
      <View style={styles.header}>
         <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => router.back()} style={styles.headerBackBtn}>
               <Ionicons name="chevron-back" size={28} color={theme.colors.text} />
            </TouchableOpacity>
         </View>
         <View style={styles.headerTitle}>
         </View>
         <View style={styles.headerRight}>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      height: 60
   },
   headerLeft: {
   },
   headerBackBtn: {
   },
})