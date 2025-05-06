import {SectionList, StatusBar, StyleSheet, View, Text } from 'react-native';
import { Stack} from 'expo-router';
import games from '../data/games';
import Item from '../components/Item';

export default function App() {

  return (
    <View style={styles.container}  >
        <SectionList 
            sections={games}
            keyExtractor={(item, index) => item.title + index}
            renderItem={({item}) => <Item {...item}/>} 
            renderSectionHeader={({section: {category}}) => (
                <Text style={styles.sectionHeader}>{category}</Text>
            )}
            style={{
                width: '100%'
            }}
        />
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
  },
  sectionHeader:{
    color:'rgb(0, 0, 0)',
    fontSize: 24,
    textAlign: 'center'
  }
});
