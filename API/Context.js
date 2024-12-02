import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";
export const NewsContext = createContext();

const Context = ({children})=>{
     const [loading,setLoading] = useState(false);
     const [news,setNews] = useState([])
     const [category,setCategory] = useState('general')
     const [source,setSource] = useState('bbc-news');
     const [index,setIndex] = useState(1);
     const[darkTheme,setDarkTheme] = useState(false);
     const fetchNews = async(rest = category)=>{
          setLoading(true);
          try {
               const response = await axios.get(getNewsAPI(rest))
               setNews(response.data)
               setIndex(1);
          } catch (error) {
               console.error(`Error Fetching News: `,error);
          }finally{
               setLoading(false);
          }
     }
     const fetchNewsFromSource = async()=>{
          setLoading(true);
          try {
               const response = await axios.get(getSourceAPI(source));
               if(!response)throw new Error("No Response");
               setNews(response.data)
               setIndex(1);
          } catch (error) {
               console.error(`Error Fetching News from Source: `,error);
          }finally{
               setLoading(false);
          }
     }
     useEffect(()=>{
          fetchNews();
     },[category])
     useEffect(()=>{
          fetchNewsFromSource();
     },[source])
     return <NewsContext.Provider value={{
          news,
          category,
          index,
          darkTheme,
          loading,
          setCategory,
          setIndex,
          fetchNews,
          setSource,
          setDarkTheme
     }}>{children}</NewsContext.Provider>
}
export default Context