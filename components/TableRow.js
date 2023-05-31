import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native"

const TableRow = (props) => {
  return(
    props.list.map((item, idx)=> (
      <View
        style = {styles.row}
      >
        <Text style = {styles.tableCol1}>{idx+1}</Text>
        <Text style = {styles.tableCol2}>{item.listTitle}</Text>
        <View
          style = {styles.tableCol3}
        >
          <TouchableOpacity
            onPress = {()=>props.correction(item, idx)}
          > 
            <Image
              style = {{width:20, height:20}}
              source = {require("../assets/correction.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {()=>props.delete(idx)}
          > 
            <Image
              style = {{width:20, height:20}}
              source = {require("../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    ))
  )
}

export default TableRow

const styles = StyleSheet.create({
  row : {
    flexDirection: "row",
    borderBottom: "1px solid grey",
    justifyContent : "space-around",
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
    flexDirection:"row",
    flex:2,
    justifyContent: "space-around",
  }
})