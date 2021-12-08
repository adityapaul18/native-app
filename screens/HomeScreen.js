import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title:'Signal'
        })
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
