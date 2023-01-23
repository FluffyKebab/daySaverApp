import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type SingleDayPageProps = {
    date: string;
    imageLink: string;
    text: string;
};

const SingleDayPage = (props: SingleDayPageProps) => {
    return (
        <View style={styles.background}>
            <Image source={{uri: props.imageLink}} style={styles.image}/>
            <View style={styles.pageBody}>
                
                    <Text style={styles.heading}> {props.date} </Text>
                
                <Text> {props.text} </Text>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    pageBody: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "black",
    },

    background: {
        backgroundColor: "rgb(245, 236, 228)",
        height: "100%",
    },

    image: {
        width: "100%", 
        height: "45%",
        
    },

    heading: {
        borderTopWidth: 5,
        borderBottomColor: "black",
        textAlign: "right",
        paddingRight: 35,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 35,
        fontWeight: "bold",
    }
})

export default SingleDayPage;