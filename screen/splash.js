import React from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground,Image, TouchableOpacity,  Button, Platform , SafeAreaView, } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useState, useEffect, useRef } from 'react';

//import * as Device from 'expo-device';
//import * as Notifications from 'expo-notifications';
//import registerNNPushToken from 'native-notify' 

const bannerimg = require('../assets/logo.png');


/*  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  }); 
 */


const SplashScreen = ({navigation}) => {
 /*   registerNNPushToken(10503, 'aFQxUYNFdv2CaJu9bOMpfl');

   const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef(); 
  
     useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);  */ 
  
    return (
         
        <View style={styles.container}>
             <ImageBackground source={require('../assets/bottem1.jpg')}  style={{flex: 3}}>
             <View style={styles.bottom}>
                <View style={styles.bottomline}>
             
            
               
                
                <View style={styles.button}>
                <Animatable.View   animation="fadeInUp"  style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            
                            <View style={styles.goview}>
                            <Image source={bannerimg} resizeMode="cover" style={styles.bannerimg1}></Image>
                            <View style={styles.go1}>
                            <View style={styles.go2}>
                           
                              <Text style={styles.text3}>Get Start</Text></View>
                              
                            </View>
                            </View>
                            
                   
                </TouchableOpacity> 
                </Animatable.View >
                </View>
            
            

            </View></View>
            </ImageBackground>
        </View>
      
    );
}
     
  /* async function schedulePushNotification() {

    await Notifications.setNotificationChannelAsync('new-emails', {
        name: 'E-mail notifications',
        sound: 'notification-sound.wav', // Provide ONLY the base filename
      });
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }
  
*/

  /* async function registerForPushNotificationsAsync() {
    let token; 
    
      
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
       
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      
    } 
  
    return token;
  } 
  
  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Krushi Tv',
      body: "New Video Arrived",
    },
    trigger: null,
  });
  
  
 */

  //   ...........................




   
        
   



  
        
     

export default SplashScreen;







  


// ......................

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
   

    footer: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,     
       
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 25,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
   
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    go1: {
        width:150,
        height: 60,
        
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 5,
        borderColor: '#fcb43c',
        borderRadius: 100 ,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      },
      go2: {
        width: 150,
        height: 60,
        backgroundColor: '#1c883c',
    
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text3: {
        fontSize: 18,
        lineHeight: 50,
        alignContent: 'center',
        alignItems: 'center',
        color:'white',
      },
      goview:{
        alignItems: 'center',
        justifyContent: 'center',
        top:300,
    paddingHorizontal: 110,
      },
     
     
     
     bottom: {
      width: '100%',
      height: 600,
      backgroundColor: '#fff',
      borderTopLeftRadius: 200,
      paddingBottom: 0,
      padding: 0,
      top:200,
    },
    bottomline: {
      width: '100%',
      height: 300,
      position: 'absolute',
      bottom: 300,
      left: 0,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 10,
      borderColor: '#1c883c',
      borderTopLeftRadius: 200,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
});