import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from "react-native"
import {useState} from "react"
import {LinearGradient} from "expo-linear-gradient"
import TableRow from "../components/TableRow"

let Lists = () => {
  return (
    <View
      style = {[styles.table, {paddingTop: 10}]}
    >
      <View
        style = {styles.tableRow}
      >
        <Text style = {styles.tableCol1}>순서</Text>
        <Text style = {styles.tableCol2}>제목</Text>
        <Text style = {styles.tableCol3}>수정</Text>
        <Text style = {styles.tableCol4}>삭제</Text>
      </View>
    </View>
  )
}

export default function ListScreen(props){
  const [lists, setLists] = useState([])

  const deleteList = (position) => {
    const newArray = lists.filter((list, index) => {
      return position != index;
    })
    setLists(newArray);
  }
  const correctionList = (item, idx) => {
    props.navigation.navigate("ListAddScreen", {
      listTitle : item.listTitle,
      content : item.content,
      idx : idx,
      correctionContent : correctionContent
    })
  }
  const correctionContent = (idx, listTitle, content) => {
    const newLists = []
    for(let i=0; i<lists.length; i++){
      if(i == idx){
        lists[i].listTitle = listTitle
        lists[i].content = content
        newLists.push(lists[i])
      } else {
        newLists.push(lists[i])
      }
    }
    setLists(newLists)
  }
  const addList = (listTitle, content) => {
    const newList = {
      listTitle : listTitle,
      content : content
    }
  }

  return(
    <View
      style = {{height:"100%"}}
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
            style = {styles.title}
          >
            {"L I S T"}
          </Text>
          <LinearGradient
            colors={["pink", "purple","pink"]}
            start={{x:0, y:0}}
            end = {{x:0, y:1}}
            style = {{padding:5, borderRadius: 5}}
          >
            <TouchableOpacity
              onPress = {()=>props.navigation.navigate("ListAddScreen", {
                addList : addList
              })}
              style = {styles.pageButton}
            >
              <Image
                style = {{width:40, height:40}}
                source = {require("../assets/add.png")}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <Lists/>
        <ScrollView
          style = {styles.table}
        >
          <TableRow
            list={lists}
            delete={deleteList}
            correction={correctionList}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  top : {
    flexDirection: "row",
    justifyContent : "space-around",
    paddingTop: 10
  },
  pageButton : {
    width: 80,
    justifyContent : "center",
    alignItems : "center",
    height : 50,
    lineHeight: 50,
    background : "white",
    borderRadius : 5,
    shadowColor : "black",
    shadowOffset : {width : 0, height : 2},
    shadowOpacity : 0.1,
  },
  title : {
    height: 50,
    lineHeight: 50,
    fontSize : 50,
  },
  table : {
    paddingRight: 10,
    paddingLeft : 10
  },
  tableRow:{
    flexDirection: "row",
    justifyContent : "space-around",
    borderBottom: "1px solid grey",
    paddingTop: 10,
    paddingBottom : 10
  },
  tableCol1 : {
    flex: 1,
    textAlign: "center"
  },
  tableCol2 : {
    flex: 4,
    textAlign: "center",
  },
  tableCol3 : {
    flex: 1,
    textAlign: "center"
  },
  tableCol4 : {
    flex: 1,
    textAlign: "center"
  },
})