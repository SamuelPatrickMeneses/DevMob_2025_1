import {StatusBar, StyleSheet, View } from 'react-native';
import {Link} from 'expo-router';
import { Stack} from 'expo-router';


export default function App() {

  return (
    <View style={styles.container}  >
        <Link 
            href={{
                pathname: '[id]',
                params:{id: Math.floor(Math.random()*10)} 
            }} style={styles.text}
        >
            show id
        </Link>
        <Stack.Screen options={{title:'Home'}}/>
        <StatusBar 
            animated={true}
            hidden={false}
            backgroundColor={'blue'}
            barStyle={'light-content'}
            showHideTransition={'slide'}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40
  }
});
