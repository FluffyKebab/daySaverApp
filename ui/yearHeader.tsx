import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type YearHeaderProps = {
    year: number
    isMainHeader: boolean
};

const YearHeader = (props: YearHeaderProps) => {
    if (props.isMainHeader) {
        return (
            <View style={styles.headerMain}>
                <Text style={styles.headerText}>
                    {props.year}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.headerYear}>
            <Text  style={styles.headerText}>
                {props.year}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "right",
    },

    headerMain: {
        width: "100%",
        backgroundColor: "rgb(31, 37, 41)",
        borderColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    headerYear: {
        width: "100%",
        backgroundColor: "rgb(31, 37, 41)",
        borderColor: "gray",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    }

})


export default YearHeader;