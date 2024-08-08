import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';



function LatestNews() {

  return (
   
      <View style={styles.bottom}>


         
        <View style={styles.item1}>
        <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
          <View style={styles.inner}>
          <Text>Mihikatha Dinuwo on every sunday 6.30 p.m </Text>
          </View>
          </TouchableOpacity>
        </View>
       
        <View style={styles.item2}>
          <View style={styles.inner}>
            <Text>Govibimata Arunalu on every sunday 6.30 p.m </Text>
          </View>
        </View>

        <View style={styles.item2}>
          <View style={styles.inner}>
            <Text>Uyiram Ulawum on every sunday 6.30 p.m</Text>
          </View>
        </View>

        <View style={styles.item3}>
          <View style={styles.inner}>
            <Text>Agriculture Beyond Production on sunday 6.30 p.m</Text>
          </View>
        </View>
        
      
      </View>
      
    
  );
}
const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    height: 350,
    backgroundColor: 'transparent',
    paddingHorizontal: 25,
    paddingTop: 200,
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 4,
  },

  item1: {
    width: 350,
    height: 50,
    backgroundColor: '#cefad0',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  item2: {
    width: 350,
    height: 50,
    backgroundColor: '#ffba01',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
  },
  item3: {
    width: 350,
    height: 50,
    backgroundColor: '#01b466',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
  },
  inner: {
    flex: 1,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LatestNews;
