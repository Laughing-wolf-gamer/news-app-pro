import { StyleSheet} from 'react-native';
import InShorts from './componenets/InShorts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Context, { NewsContext } from './API/Context';
import { useContext } from 'react';

function App() {
     const {darkTheme} = useContext(NewsContext)
     return (
          <SafeAreaView style={{...styles.container,backgroundColor:darkTheme ? '#282c35':"white"}}>
               <InShorts/>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});
export default ()=>{
     return(
          <Context>
               <App/>
          </Context>
     )
};
