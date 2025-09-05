import { StatusBar } from 'expo-status-bar';
import  {Alert,StyleSheet, Text, View , Image, TextInput, TouchableOpacity } from 'react-native';
import logo from "./assets/todolist.png";
import bntAdd from "./assets/bntAdd.png";
import { useState } from 'react';
import { FlashList } from "@shopify/flash-list";

export default function App() {
  const [tarefa,setTarefa]=useState("")
  const [tarefas,setTarefas]=useState([]);
  const  bntAdicionar=()=>{
    setTarefas([tarefa, ...tarefas]);
setTarefa("");
  };
  const RenderItem=({item}) =>{
    <Text>{item}</Text>
  };
  return (
    <View style={styles.container}>
     <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo}/> 76
      <Text>Todo List</Text> 
      </View> 
      <View style={styles.viewInput}>
        <TextInput placeholder='Digite a tarefa' value={tarefa} onChange={setTarefa}/>
        <TouchableOpacity onPress={bntAdicionar}><Image source={bntAdd} style={styles.bntAdd}/> </TouchableOpacity>
               </View>    

        <View style={styles.viewTarefas}>
            <FlashList data={tarefas}
                renderItem={({item})=>{
                  <Text>{item}</Text>
                }}/> 
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    padding:10,
  },
  logo:{
height:128,
width:128,
},
viewInput:{
width:"100%",
justifyContent:"space-between",
flexDirection:"row"
},
bntAdd:{
  width:32,
  height:32

},
viewLogo:{
width:"100%",
justifyContent:"center",
alignItems:"center",
marginBottom: 10,
},
viewTarefas:{          
width:"100%",
flex: 1
    }

});
