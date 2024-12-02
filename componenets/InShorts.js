import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';
const InShorts = () => {
     const layout = useWindowDimensions()
     const{index,setIndex,darkTheme} = useContext(NewsContext)
     // const [index,setIndex] = useState(1);
     const routes = [
          {key:'first',title:'Discover'},
          {key:'second',title:'News'}
     ]
     const renderScene = SceneMap({
          first:DiscoverScreen,
          second:NewsScreen,
     })
     return (
          <TabView
               navigationState={{ index, routes }}
               renderScene={renderScene}
               onIndexChange={setIndex}
               initialLayout={{ width: layout.width }}
               renderTabBar={()=> <TopNavigation index ={index} setIndex = {setIndex}/>}
          />
     )
}

export default InShorts

const styles = StyleSheet.create({})