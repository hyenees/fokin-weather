import React from "react";
import { StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName:"weather-lightning",
        gradient:["#4e4376","#2b5876"],
        title :"Urrrrr CoangCoang!!!",
        subtitle:"Don't go outside."
    },
    Drizzle : {
        iconName :"weather-rainy",
        gradient:["#56B4D3","#348F50"],
        title :"drip-drip, drip-drop, plop plop",
        subtitle:"이슬비"
    },
    Rain : {
        iconName : "weather-pouring",
        gradient:["#292E49","#BBD2C5"],
        title :"Pitter-Patter",
        subtitle:"It’s raining cats and dogs!"
   },
    Snow :{
        iconName:"weather-hail",
        gradient:["#BBD2C5","#536976"],
        title :"The snowflake is dancing.",
        subtitle:"Do you wanna build a snowman?"
    },
    Clear :{
        iconName:"weather-sunny",
        gradient:["#EDE574","#E1F5C4"],
        title :"쨍쨍",
        subtitle:"모래알은 반짝***"
    },
    Clouds :{
        iconName:"weather-cloudy",
        gradient:["#076585","#fff"],
        title :"The sky is covered with clouds.",
        subtitle:"You should bring an umbrella."
    },
 
    Haze: {
        iconName:"weather-sunset",
        gradient:["#FF512F","#F09819"],
        title :"Sizzling",
        subtitle:"It's blazing hot outside!"
    },
    Fog: {
        iconName:"weather-fog",
        gradient:["#757F9A","#D7DDE8"],
        title :"It’s misty up in the mountains.",
        subtitle:"You couldn't see anything."
    },
}

export default function Weather({temp, condition}) {
    return (
        
        <LinearGradient
            colors = {weatherOptions[condition].gradient}
            style={styles.container}
        >  
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName} 
                size={92} 
                color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={ {...styles.halfContainer, ...styles.textContainer} }>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>       
            </View>
        </LinearGradient>
        
      
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Fog"]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    halfContainer : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    temp : {
        fontSize : 44,
        fontWeight : "500",
        color:"white",
    },
    title : {
        fontSize : 28,
        color:"white",
        paddingVertical:10,
       
    },
    subtitle : {
        fontSize : 18,
        color:"white",
       
    },
    textContainer : {
        alignItems:"flex-start",
        paddingHorizontal: 40,
        flex:1
    }
})
