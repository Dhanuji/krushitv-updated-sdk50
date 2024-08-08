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
  Button,Dimensions
} from 'react-native';


import LatestNews from './LatestNews';
//import NetInfo from '@react-native-community/netinfo';


//import InternetConnectionAlert from "react-native-internet-connection-alert";
import  { useState, useEffect } from 'react';
//import { getPushDataObject } from 'native-notify';



const bannerimg = require('../assets/Department-LOGO.png');
const image = require('../assets/bottem.jpg');
const logo = require('../assets/logo.png');
const naicc = require ('../assets/naicc.png')
import {useNavigation} from '@react-navigation/native';



const Profile = () => {


  const navigation = useNavigation();
  /* const [isInternetAvailable, setIsInternetAvailable] = useState(false);
 */

 /*       
  let pushDataObject = getPushDataObject();

    useEffect(() => { 

      console.log( "pushDataObject:", pushDataObject);
       if (pushDataObject.screenName==="Tvprograms"){
        navigation.navigate("Tvprograms"); 
  
       }
    });
 */


  return (
    



      
        <ScrollView>
          <View style={styles.container}>
            {/*NETINFO*/}

            {/*NETINFO*/}

            
            <View style={styles.banner}>
            <View >
                  <View style={{ height: 60,}}>
                  <Image source={logo} resizeMode="cover" style={styles.logo}></Image>
                  
                  </View>
                  </View>
                  <View style={{ height: 60,flexDirection: 'row',alignContent:'center',alignItems:'center',paddingRight:15}}>
                  <Image source={naicc} resizeMode="cover" style={styles.logo3}  ></Image> 
                  </View>
            </View>
           

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                
              <View style={styles.up}>


                <TouchableOpacity
                  style={styles.item1}
                  onPress={() => navigation.navigate('Tvprograms')}>
                  <View style={styles.inner}>
                    <Image
                      source={require('../assets/tv.png')}
                      style={styles.icon}
                    />

                    <Text style={{fontWeight: '800',}}>TV Programs</Text>
                  </View>
                </TouchableOpacity>



                <TouchableOpacity
                  style={styles.item1}
                  onPress={() => navigation.navigate('Shortvideos')}>
                  <View style={styles.inner}>
                    <Image
                      source={require('../assets/video2.png')}
                      style={styles.icon}
                    />
                    <Text style={{fontWeight: '800',}}>Short Videos</Text>
                  </View>
                  </TouchableOpacity>

              <TouchableOpacity
                  style={styles.item1}onPress={() => navigation.navigate('Shortmassages')}
                  > 
                  <View style={styles.inner}>
                    <Image
                      source={require('../assets/crop1.jpg')}
                      style={styles.icon}
                    />
                    <Text style={{fontWeight: '800',}}>Short Massages</Text>
                  </View>
                </TouchableOpacity> 

                <TouchableOpacity
                  style={styles.item1}
                  onPress={() => navigation.navigate('Beyond')}>
                  <View style={styles.inner}>
                    <Image
                      source={require('../assets/news.png')}
                      style={styles.icon}
                    />
                    <Text style={{fontWeight: '800',}}>News Articals</Text>
                  </View>
                </TouchableOpacity>


</View>



               

              <View style={styles.bottom}>
                <View style={styles.bottomline}>
                   <Text style={styles.newsline}>Up Comming Programs</Text> 
                  <LatestNews/>


                  
                  </View>
                  <View style={styles.banner1}>
                    <View style={styles.innerlogo1}>
                    <Image source={bannerimg} resizeMode="cover" style={styles.bannerimg1}></Image>
                    </View>
                    </View>
                
              </View>
              
             
            </ImageBackground>
          </View>
         
        </ScrollView>
      
    
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
  banner: {width: '100%', height: 60,flexDirection: 'row',padding: 1,backgroundColor: 'transparent',},
  banner1: {width: '100%', height: 550, flexDirection: 'row',},
  bannerimg1:{width: '65%', height:55},

  innerlogo1:{flex:1,
   backgroundColor: 'transparent',
   alignItems: 'center',
   justifyContent: 'center',
  
   width: '100%'},

  logo: {width: 60, height: 70, alignItems: 'flex-end'},
  logo2: {width: 60, height: 80, },
  logo3: {width: 50, height: 50, alignItems: 'flex-end',left:260,},
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  innerlogo:{
    
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '100%'},

  textag2: {
    fontSize: -5,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#000',
    width: '100%'
  },
  up: {
    width: '100%',
    height: 360,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1,
  },


  item1: {height: '50%', width: '50%', padding: 5},

  inner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  bottom: {
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
    borderTopLeftRadius: 100,
    paddingBottom: 0,
    padding: 0,
  },
  bottomline: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 250,
    left: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 10,
    borderColor: '#6aecb4',
    borderTopLeftRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsline: {position: 'absolute', bottom: 40, left: 100,fontWeight: '800',fontSize: 16,},
  icon: {
    width: '50%',
    height: '52%',
  }
});

export default Profile;
