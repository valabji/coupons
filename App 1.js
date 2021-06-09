import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from './src/components/Splash';
import Home from './src/components/Home';
import Brand from './src/components/Brand';
import LastCoupons from './src/components/LastCoupons';
import Favourit from './src/components/Favourit';

import Country from './src/components/Countries';

import  DrawerContent  from './src/components/DrawerContent';




import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
//import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import logger from 'redux-logger';
import { useSelector } from "react-redux";
import reducer from "./src/reducers";




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(  thunk , logger)
); 

const persistor = persistStore(store);



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {


 
const NewStack = ()=>{
  return (
    
    <Stack.Navigator>



<Stack.Screen name="Splash"  component={Splash}
        options={{
        headerShown:false
        }}
        /> 

<Stack.Screen name="Country"  component={Country}
        options={{
        headerShown:false
        }}
        /> 
       
<Stack.Screen name="Favourit"  component={Favourit}
        options={{
        headerShown:false
        }}
        /> 
        
  <Stack.Screen name="Home"  component={Home}
        options={{
        headerShown:false
        }}
        /> 

<Stack.Screen name="Brand"  component={Brand}
        options={{
        headerShown:false
        }}
        />

<Stack.Screen name="LastCoupons"  component={LastCoupons}
        options={{
        headerShown:false
        }}
        />


  </Stack.Navigator>
  );
}



return (
  <Provider store={store}>
        
 
      <PersistGate loading={null} persistor={persistor}>
<NavigationContainer  >
             <Drawer.Navigator
             drawerPosition='left'
             drawerContent={props => <DrawerContent {...props} />}
          
             >
          <Drawer.Screen name="الرئيسية"  component={NewStack}
            options={{
              headerShown:false
            }}  />


      
      </Drawer.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

