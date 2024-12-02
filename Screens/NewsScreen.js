import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import SingleNews from '../componenets/SingleNews';
import Carousel from '@zhenyudu/react-native-snap-carousel';

const windowsHeight = Dimensions.get('window').height;
const NewsScreen = () => {
     const{loading,news,darkTheme} = useContext(NewsContext);
     const articles = news?.articles;
     const[activeIndex,setActiveIndex] = useState();
     return (
          <View style = {styles.carousel}>
               
               {loading ? (
                    <>
                         <ActivityIndicator color={darkTheme ? "white":'lightgray'} size={150}/>
                    </>
               ):(
                    <>
                         {articles && (
                              <Carousel
                                   data={articles}
                                   renderItem={({item,index})=>(
                                        <SingleNews item={item} index={index}/>
                                   )}
                                   sliderHeight={300}
                                   vertical = {true}
                                   itemHeight={windowsHeight}
                                   onSnapToItem={(index)=>setActiveIndex(index)}
                              />
                         )}
                    </>
               )}
          </View>
     )
}
const styles = StyleSheet.create({
     carousel: {
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          height:'100%'
     },
});


export default NewsScreen