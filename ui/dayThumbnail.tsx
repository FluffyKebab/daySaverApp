import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

type DayThumbnailProps = {
    dayData: DayData,
}

type DayData = {
    month: number 
    day: number
    hasSaved: boolean
    imageLink: string
}

const DayThumbnail = (props: DayThumbnailProps) => {
    console.log(props.dayData)

    return (
        <View style={styles.imageContainer}>
            {props.dayData.hasSaved ? <Image source={{uri: props.dayData.imageLink}} style={styles.image}/> : <></>}
        </View >
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "gray",
        backgroundColor: "rgb(31, 37, 41)",
        width: Dimensions.get("screen").width / 5, 
        height: Dimensions.get("screen").width / 5,
        alignItems: "center",
    },

    image: {
        width: "100%", 
        height: "100%",
    },
})

export default DayThumbnail;