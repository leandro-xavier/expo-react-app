import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import profile from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
       <Image source={profile} style={{ width: 305, height: 159 }} /> 
      <Text style={{color: '#888', fontSize: 18}}>Hello word</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
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
});
