import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

const HomeScreen = ({navigation}) => {
  return(
    <View
      style = {styles.main}
    >
      <LinearGradient
        colors={["purple", "pink", "white"]}
        start={{x:0, y:1}}
        end = {{x:0, y:0}}
        style = {{height:"100%"}}
      >
        <View
          style = {styles.top}
        >
          <Text
            style = {styles.titleText}
          >
            Todo List
          </Text>
        </View>
        <View
          style = {styles.buttonBox}
        >
          <View
            style = {{border: "5px solid white", borderRadius: 10}}
          >
            <LinearGradient
              colors={["pink", "white"]}
              start={{x:0, y:0}}
              end = {{x:0, y:1}}
              style = {{padding:5, borderRadius: 5}}
            >
              <TouchableOpacity
                style = {[{background:"white"}, styles.button]}
                onPress = {() => navigation.navigate("List")}
              >
                <Text>리스트</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main : {
    height: "100%"
  },
  top : {
    alignItems : "center",
    paddingTop: 100,
    paddingBottom : 100,
  },
  titleText : {
    fontSize : 50,
  },
  buttonBox : {
    flexDirection : "row",
    justifyContent : "space-around"
  },  
  button : {
    width : 100,
    alignItems : "center",
    height : 80,
    shadowColor : "black",
    shadowOffset : {width : 0, height : 2},
    shadowOpacity : 0.1,
    borderRadius : 5,
    justifyContent: "center"
  }
})