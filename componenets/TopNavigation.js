import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NewsContext } from '../API/Context';
const TopNavigation = ({index,setIndex}) => {
     const {fetchNews,darkTheme,setDarkTheme} = useContext(NewsContext);
     return (
          <View style = {{...styles.container,backgroundColor:darkTheme ? '#282c35':'white'}}>
               {index === 0 ? (
                    <TouchableOpacity 
                    
                         onPress={()=> setDarkTheme(!darkTheme)}
                         style = {{...styles.left,color:darkTheme ? 'lightgray':'gray'}}
                    >
                         <MaterialCommunityIcons name="theme-light-dark" size={24} color={darkTheme ? "#007fff":'gray'} />
                         <Text style = {{...styles.text}}>

                         </Text>
                    </TouchableOpacity>
               ):(
                    <TouchableOpacity style = {{...styles.left,color:darkTheme ? 'lightgray':'gray'}}
                         onPress={()=> setIndex(index === 0 ? 1: 0)}
                    >
                         <Entypo name="arrow-left" size={24} color={darkTheme ? "#007fff":'gray'}/>
                         <Text style = {{...styles.text,color:darkTheme ? 'lightgray':'gray'}}>
                              Discover
                         </Text>
                    </TouchableOpacity>
               )}
               <Text style = {{...styles.center,color:darkTheme ? "white":'black'}}>
                    {index ? "All News":"Discover"}
               </Text>
               {index ? (
                    <TouchableOpacity
                         onPress={()=> fetchNews('general')}
                         style = {styles.right}
                    >
                         <Text style = {styles.text}>
                              <AntDesign name="reload1" size={24} color= {darkTheme ? "#007fff":'gray'} />
                         </Text>

                    </TouchableOpacity>
               ):(
                    <TouchableOpacity style = {styles.left} 
                         onPress={()=> setIndex(index === 0 ? 1:0)}  
                    >
                         <Text style = {{...styles.text,color:darkTheme ? "white":'gray'}}>
                              All News
                         </Text>
                         <Entypo name="arrow-right" size={24} color={darkTheme ? "#007fff":'gray'} />

                    </TouchableOpacity>
               )}
          </View>
     )
}

export default TopNavigation

const styles = StyleSheet.create({
     container:{
          flexDirection:'row',
          justifyContent:'space-between',
          padding:10,
          alignItems:'center',
          borderBottomColor:'black',
          borderBottomWidth:.5
     },
     left:{
          flexDirection:'row',
          alignItems:'center',
          width:80,
          justifyContent:'space-between',
     },
     right:{
          width:80,
          height:40,
          justifyContent:'center',
          paddingRight:7,
          alignItems:"flex-end",
     },
     center:{
          paddingBottom:6,
          borderBottomColor:'#007fff',
          borderRadius:5,
          borderRadius:10,
          fontSize:16,
          fontWeight:'700'
     },
     text:{
          fontSize:16,
          borderBottomColor:'#007fff',
     },
})