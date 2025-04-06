import {StatusBar, StyleSheet, View } from 'react-native';
import Login from './components/Login';

export default function App() {

  return (
    <View style={styles.container}  >
        <Login/>
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
  }
});
