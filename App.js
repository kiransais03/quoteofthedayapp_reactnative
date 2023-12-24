import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style={styles.button}>Hi Button</TouchableOpacity>
      <StatusBar style="auto" />
      <View>
      <Text>Open up App.js to start working on your app!</Text>
          {/* <Image style={imagestyles} source={require('./img.png')}/> */}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    border : "1px solid black"
  },
  button : {
    backgroundColor:"grey",
    color:"white",
    border : "2px solid green",
  },
  imagestyles : {
    width:"1000px",
    height:"1000px"
  }
});
