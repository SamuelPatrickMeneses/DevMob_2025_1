import {StatusBar, StyleSheet, View } from 'react-native';
import ResetPassword from './components/ResetPassword';

export default function App() {

  return (
    <View style={styles.container}  >
        <ResetPassword/>
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
