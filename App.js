import * as React from 'react';



import Home from './screen/Home';
import SplashScreen from './screen/splash';
 import Profile from './screen/Profile';
import Tvprograms from './screen/Tvprograms'; 
import Mihikatha from './screen/Mihikatha';
import Govibima from './screen/Govibima';
import Beyond from './screen/Beyond';
import Tamil from './screen/Tamil';
import Shortmassages from './screen/ShortMessages';
import Bprouduct from './screen/BeyondProduction';
// import Eventgovi from './screen/Events'; 
//import TvShedule from './screen/TvShedule';
import Shortvideos from './screen/ShortVideos';


 //import registerNNPushToken from 'native-notify';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';









const Stack = createNativeStackNavigator();

export default function App() {

 
  //registerNNPushToken(10475, 'dkaKDtWAyCrJ6DSGsSggdN');
  
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
          
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{ headerShown: false,   }}
         
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false, tabBarStyle: { display: "none" },}}
        />
          <Stack.Screen
          name="Tvprograms"
          component={Tvprograms}
          options={{headerShown: false}}
        /> 
         <Stack.Screen
          name="Mihikatha"
          component={Mihikatha}
          options={{headerShown: false, }}
        />
        <Stack.Screen
          name="Govibima"
          component={Govibima}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Beyond"
          component={Beyond}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tamil"
          component={Tamil}
          options={{headerShown: false}}
        />
      <Stack.Screen
        name="BeyondProduction"
        component={Bprouduct}
        options={{headerShown: false}}
      /> 
     {/* <Stack.Screen
      name="TvShedule"
      component={TvShedule}
      options={{headerShown: false}}
    />  */} 
     <Stack.Screen
      name="Shortvideos"
      component={Shortvideos}
      options={{headerShown: false}}
    />  
      <Stack.Screen
      name="Shortmassages"
      component={Shortmassages}
      options={{headerShown: false}}
    />   
</Stack.Navigator>
    </NavigationContainer>
  );
}

