import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    

    
    <View style={styles.container}>
      <section>
        <img src="" alt="" />
      </section>
      <section></section>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>SENSORES</Text>
      <Text style={styles.title2}>Sensor baño:</Text>
      <Text style={styles.title2}>Sensor regadera:</Text>
      <Text style={styles.title2}>Sensor lavamanos:</Text>
      <Text style={styles.title2}>Sensor Algibe:</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title2:{
    color: 'blue',
  },
});
