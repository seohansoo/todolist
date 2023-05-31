import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

export default function CalendarScreen({navigation}){
  return(
    <View
      style = {{height:"100%"}}
    >
      <LinearGradient
        colors={["purple", "pink", "white"]}
        start={{x:0, y:0}}
        end = {{x:0, y:-1}}
        style = {{height:"100%"}}
      >
        <View
          style = {styles.top}
        >
          <LinearGradient
            colors={["pink", "white"]}
            start={{x:0, y:0}}
            end = {{x:0, y:1}}
            style = {{padding:"5px", borderRadius: "5px"}}
          >
            <TouchableOpacity
              onPress = {()=> navigation.navigate("Home")}
              style = {styles.pageButton}
            >
              {"홈"}
            </TouchableOpacity>
          </LinearGradient>
          <Text
            style = {styles.title}
          >
            {"Calendar"}
          </Text>
          <LinearGradient
            colors={["purple", "white"]}
            start={{x:0, y:0}}
            end = {{x:0, y:1}}
            style = {{padding:"5px", borderRadius: "5px"}}
          >
            <TouchableOpacity
              style = {styles.pageButton}
              onPress = {()=> navigation.navigate("List")}
            >
              {"리스트"}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  top : {
    flexDirection: "row",
    justifyContent : "space-between",
  },
  pageButton : {
    width: 80,
    textAlign : "center",
    height : 50,
    lineHeight: 50,
    background : "white",
    borderRadius : "5px",
    shadowColor : "black",
    shadowOffset : {width : 0, height : 2},
    shadowOpacity : 0.1,
  },
  title : {
    height: 50,
    lineHeight: 50,
    fontSize : 35,
    
  }

})