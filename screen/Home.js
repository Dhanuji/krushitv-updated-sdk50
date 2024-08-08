import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const logo = require('../assets/logo.png');


const Home = () => {
  const navigation = useNavigation();
 

  return (
    <SafeAreaView style={styles.area}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/Backdeop.jpg')}
          style={{flex: 1}}
        />

        {/*2nd*/}

<View  style={styles.textagView0}>
<Image source={logo} style={{ width: 210, height: 210, borderRadius: 200 / 2 }} />

</View>





        <View style={styles.textagView}>
          <Text style={styles.textag1}></Text>
          <Text style={styles.textag}>Department of agriculture</Text>

          <Text style={styles.textag2}>
            "Sri lankan krushi tv program,govibimata arunalu,mihikatha dinuwo,உயிரும் உழவும்,crop forecast in tamil and sinhala,agriculture beyond production"
          </Text>
        </View>

        {/*circul*/}

        {/*image*/}

        <View style={styles.go1}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.go2}>
              
                <Text style={styles.text3}>GO</Text>
              
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    width: '100%',
    height: '100%',
  },
  textagView0:{
  position: 'absolute',
  bottom: 450,left:110,
  paddingHorizontal: '50%', width: '45%',
  height: 170,
  backgroundColor: '#fff',

  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',},




  textagView: {
    position: 'absolute',
    bottom: 150,
    paddingHorizontal: 30,
  },
  textag: {
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },
  textag1: {
    fontSize: 25,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },

  textag2: {color: '#fff'},

  image: {
    width: '100%',
    height:'100%',
    position: 'absolute',
    bottom: '-25%',
    left: '-15%',
  },

  go1: {
    width: 90,
    height: 90,
    position: 'absolute',
    bottom: 50,
    left: 150,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
    borderColor: '#fff',
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  go2: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',

    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    fontSize: 25,
    lineHeight: 50,
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
