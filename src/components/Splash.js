import React, { useEffect , useState} from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions, ActivityIndicator } from "react-native";
import { Container, Text } from "native-base";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useSelector, useDispatch } from "react-redux";


const { width, height } = Dimensions.get("window");
export default function Splash({navigation}) {   

  const user = useSelector(state => state.user);   

  
 useEffect(() => {
  
  
  const timerId = setInterval(() => {
      if(user.country){
      navigation.replace("Home");}
      else{
      navigation.replace("Country");
    }
     clearInterval(timerId);
  }, 4000)
  return () => clearInterval(timerId);
}, []);


  return (
      <Container style={{
       backgroundColor:'#f4db2c'
      }}>




        <StatusBar hidden={true} />
        
          <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:'#f4db2c'
              
          }}>
            

<AnimatedCircularProgress
  size={200}
  width={3}
  fill={200}
  tintColor="#FFFFFF"
  backgroundColor="transparent"
  duration={5000}
   
  >
  {
    (fill) => (
        <Image source={ require('../../assets/icon.png')} 
        style={{height:150, width:150}}
        resizeMode="contain"
        /> 
    )
  }
</AnimatedCircularProgress>


          </View>

           

 
      </Container>
    );
  }

