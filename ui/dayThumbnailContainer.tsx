import {View, StyleSheet, FlatList} from 'react-native';
import DayThumbnail from './dayThumbnail';


type DayThumbnailContainerProps = {
    data: DayData[],
}

type DayData = {
    month: number 
    day: number
    hasSaved: boolean
    imageLink: string
}

const DayThumbnailContainer = (props: DayThumbnailContainerProps) => {
    return (
        <View style={styles.container}>
           {props.data.map((day) => {
                return <DayThumbnail dayData={day} key={"m" + day.day.toString() + "d" + day.month.toString()}/>
           })}
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
    }
})

export default DayThumbnailContainer
