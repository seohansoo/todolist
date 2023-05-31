import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from "react-native"
import {useState} from "react"

const ListAddScreen = (props) => {
  const {params} = props.route
  const addList = params.addList
  
  const currTitle = params.listTitle
  const curContent = params.content
  const idx = params.idx
  const correctionContent = params.correctionContent
  const [listTitle, setListTitle] = useState(currTitle)
  const [content, setContent] = useState(curContent)

  return(
    <View
      style = {styles.main}
    >
      <View
        style = {{flexDirection: "row"}}
      >
        <TextInput
          placeholder = "제목"
          placeholderTextColor = "grey"
          style = {styles.title}
          value = {listTitle}
          onChangeText = {(val) => setListTitle(val)}
        />
        <TouchableOpacity
          style = {styles.button}
          onPress = {()=>{
            if(addList != null){
              addList(listTitle, content)
              props.navigation.navigate("ListScreen")
            } else if(currTitle != null){
              correctionContent(idx, listTitle, content)
              props.navigation.navigate("ListScreen")
            }
          }}
        >
          <Text>저장</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder = "내용"
        placeholderTextColor = "grey"
        multiline
        style = {styles.content}
        value = {content}
        onChangeText = {(val) => setContent(val)}
      />

    </View>
  )
}

export default ListAddScreen

const styles = StyleSheet.create({
  main : {
    backgroundColor: "white",
    height: "100%"
  },
  title : {
    height : 50,
    padding : 10,
    fontSize : 20,
    flex: 3,
  },
  button : {
    flex: 1,
    backgroundColor:"pink",
    justifyContent: "center",
    alignItems : "center",
    marginRight: 10,
    borderRadius: 10
  },
  content : {
    padding: 10,
    height: "60%",
  },
})