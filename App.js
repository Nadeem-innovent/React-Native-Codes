import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.header}>
      <Text>This is Nadeem from innovent</Text>
      </View>
      
      <View style={styles.boldText}>
      <Text style={styles.boldText}>This is Nadeem from innovent</Text>
      </View>

     {/* below code is inheritace of property. called (boldtext) property in body object view */}
      <View style={styles.body}>
      <Text style={styles.boldText}> This is Nadeem from innovent</Text>
      <Text>This is Nadeem from innovent</Text>
      </View>
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

  header: {
    backgroundColor : 'pink',
    padding         : 20,
  },

  boldText: {
    fontWeight: 'bold',
    padding : 20,
  },

  body : {
    backgroundColor: "green",
    padding : 20,
  }
});
