import {Image, View, Text} from "react-native"

export default function TabBarIcon(focused, name){
  let imagePath;
  if(name === "Home"){
    imagePath = require("../assets/home.png")
  } else if (name === "List"){
    imagePath = require("../assets/list.png")
  } else if (name === "Calendar"){
    imagePath = require("../assets/calendar.png")
  }

  return(
    <View>
      <Image
        style = {{width:30, height:30}}
        source = {imagePath}
      />
    </View>
  )
}