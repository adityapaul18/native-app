import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = () => {
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
