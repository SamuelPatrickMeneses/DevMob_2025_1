import {useState} from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Login() {
    const [name, useName] = useState("");
    const [pass, usePass] = useState("");
    const onPress = () => console.log(`button presed: {\nname: ${name},\n pass: ${pass}\n}`);
    console.log(`text changed {\nname: ${name},\n pass: ${pass}\n}`);
    return (
      <View style={styles.container}  >
          <TextInput 
              style={styles.ti}
              value={name}
              onChangeText={useName}
              placeholder={'name'}
          />
          <TextInput 
              style={styles.ti}
              value={pass}
              onChangeText={usePass}
              placeholder={'password'}
              secureTextEntry
          />
          <Button
              
              title={'confirme'}
              onPress={onPress}
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
    gap: 20,
     
  },
  ti:{
      borderColor:'black',
      borderWidth: 1,
      width: 300
  },
  button: {
      width: 300
  }
});
