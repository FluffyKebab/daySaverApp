import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {getAllDaysPageData} from "../api/api";
import { SafeAreaView } from 'react-native-safe-area-context';

import YearHeader from './yearHeader';
import DayThumbnailContainer from './dayThumbnailContainer';


const AllDaysPage = () => {
    const daysData = getAllDaysPageData()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {daysData.yearData.map((yearData, i) => {
                    return (
                        <View key={yearData.year.toString()}>
                            <YearHeader year={yearData.year} isMainHeader={i==0} ></YearHeader>
                            <DayThumbnailContainer data={yearData.days}/>
                        </View >
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(31, 37, 41)",
    
    },
});

export default AllDaysPage;