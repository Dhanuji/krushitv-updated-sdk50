import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,Button,Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';


import {useState,useEffect} from 'react';


const logo = require('../assets/logo.png');
const naicc = require ('../assets/naicc.png')
const bannerimg = require('../assets/Department-LOGO.png');

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');





const Tvprograms = () => {
  const navigation = useNavigation();

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return (
    <SafeAreaView>
<ScrollView>
      <ScrollView  >
     
        <View style={styles.container1}>
        <View style={styles.banner}>
            <View >
                  <View >
                  <Image source={logo} resizeMode="cover" style={styles.logo}></Image>
                  
                  </View>
                  </View>
                  <View style={{ height: 80,flexDirection: 'row',alignContent:'center',alignItems:'center',paddingRight:15}}>
                  <Image source={naicc} resizeMode="cover" style={styles.logo3}  ></Image> 
                  </View>
            </View>

<View style={styles.side}>
          <View style={styles.up1}>
            <View style={styles.item1}>
              <TouchableOpacity
                style={styles.item1}
                onPress={() => navigation.navigate('Govibima')}>
                <ImageBackground
                  source={require('../assets/GoviBimata-Arunalu.jpg')}
                  style={styles.inner1}>
                  <Image
                    source={require('../assets/video3.png')}
                    style={styles.icon1}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.item1}>
              <TouchableOpacity
                style={styles.item1}
                onPress={() => navigation.navigate('Mihikatha')}>
                <ImageBackground
                  source={require('../assets/Mihikatha-Dinuwo.jpg')}
                  style={styles.inner1}>
                  <Image
                    source={require('../assets/video3.png')}
                    style={styles.icon1}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>



            <View style={styles.item1}>
              <TouchableOpacity
                style={styles.item1}
                onPress={() => navigation.navigate('Tamil')}>
                <ImageBackground
                  source={require('../assets/tamil.jpg')}
                  style={styles.inner1}>
                  <Image
                    source={require('../assets/video3.png')}
                    style={styles.icon1}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>


           {/*  <View style={styles.item1}>
              <TouchableOpacity
                style={styles.item1}
                onPress={() => navigation.navigate('Beyond')}>
                <ImageBackground
                  source={require('../assets/agri.jpg')}
                  style={styles.inner1}>
                  <Image
                    source={require('../assets/video3.png')}
                    style={styles.icon1}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>
 */}
           

            <View style={styles.item1}>
            <TouchableOpacity
                style={styles.item1}
                onPress={() => navigation.navigate('BeyondProduction')}>
                <ImageBackground
                  source={require('../assets/beyond.jpg')}
                  style={styles.inner1}>
                  <Image
                    source={require('../assets/video3.png')}
                    style={styles.icon1}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View> 
           

          </View>

          </View>


    
        


          <View style={styles.banner1}>
           
            <View style={styles.innerlogo1}>
                    
                    <Image source={bannerimg} resizeMode="cover" style={styles.bannerimg1}></Image>
                    </View>
            </View>


               
              
             
        </View>
        
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
 
  container1: {
    flex: 1,
     backgroundColor: '#eee',
    
  },
  banner: {width: '100%', height: 80,flexDirection: 'row',padding: 1,backgroundColor: 'transparent',},
  banner1: {width: '100%', height: 100, backgroundColor: '#fff',flexDirection: 'row',},
  logo: {width: 60, height: 80, alignItems: 'flex-end'},
 
  logo3: {width: 50, height: 50, alignItems: 'flex-end',left:260,},
  logo1: {width: 60, height: 80, },
  logo2: {width: 130, height: 40, alignItems: 'flex-end'},
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  up1: {
    width: '100%',
    height: 800,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
    paddingRight:5,
    paddingLeft:5
    
  },

  item1: {height: 200, width: '100%', paddingTop: 10},
   bannerimg1:{width: '63%', height:55},

   innerlogo1:{
    flex:1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent:'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: '100%'},

  inner1: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius:100,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  icon1: {
    width: 50,
    height: 50,
    paddingBottom:0,
  },
  textag: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
  },
  
  
});
export default Tvprograms;
