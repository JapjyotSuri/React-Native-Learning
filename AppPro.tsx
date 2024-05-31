import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(){ //writing :JSX.Element is just like giving a return type to the function in typescript and this function returns a jsx element always
const isDarkMode= useColorScheme() === 'dark'
  return (
   <SafeAreaView style={styles.container}>
    <View >
    <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello</Text>
    </View>
    </SafeAreaView>

    
  );

}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})
export default AppPro;
