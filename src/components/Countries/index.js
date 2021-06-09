import React, { useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , Text} from 'native-base';
import {View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";
import useFetch from "react-fetch-hook";


const { width, height } = Dimensions.get("window");

import {storeCountry} from '../../actions/footer';

export default function Country ({navigation}){

  const URL = "https://coupon-free.com/wp-json/wp/v2/country_app";
  const { isLoading, data } = useFetch( URL );

//   database()
//   .ref('/countries')
//   .set([
//     {
//     id:10,
//     name: 'مصر',
//   },
//   {
//     id:11
//     name: 'السعوديه',
//   },
//   {
//    id:12
//     name: 'الامارات',
//   },
//   {
//    id:23
//     name: 'دول اخري ',
//   }
// ])
//   .then(() => console.log('Data set.'));
const dispatch = useDispatch();
const user = useSelector(state => state.user);
console.log(user);

const [ county , setCountry ] = useState(user.country);

const follow = () => {
  dispatch(storeCountry(county));

  navigation.replace("Home");
  
};

  


    return (

    <Container style={{
      backgroundColor:'#eaeef0',
     }}>
<Header style={{
  backgroundColor:'#f4db2c'
}}> 
  <Body>
    <Title>اختيار الدولة</Title>
  </Body>
  
</Header>



<Content>

{
  isLoading?<View style={{ height:height-100, justifyContent:'center', alignItems:'center'}}>
  <ActivityIndicator size="large" color="#f4db2c" />
</View> :

<View style={{
  flex:1,
  flexDirection:'row',
  padding:10,
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center'

}}>


{
data && data.map((item, index) =>



<TouchableOpacity onPress={
  ()=>setCountry(item.id)
} key={index}>
    <View style={{
      borderWidth:.3,
      height:200,
      width:width*.45,
      borderRadius:20,
      justifyContent:"center" ,
      alignItems:'center',
      marginBottom:10, backgroundColor:'#FFFFFF95'
}}>
<Text style={{
  fontWeight:'bold',
  fontSize:20
  
}}>
  {item.name}
</Text>

<View style={{ width:40, height:40,borderRadius:20,borderWidth:1 , position:'absolute', bottom:10, right:10,
 //backgroundColor:county=="Egypt"?'green':'transparent',
 borderColor:'green',
 justifyContent:'center',alignItems:'center'
}}>

{county==item.id?
<Icon 
   type="MaterialCommunityIcons"
   name="check-decagram"
   style={{color:'green'}}
  />
  :null}
  </View>

</View>
</TouchableOpacity>

)}


</View>
}
 
 

</Content>
<TouchableOpacity onPress={ follow  } style={{ marginBottom:10}}>

   <View style={{
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'#f4db2c',
     padding:12, marginLeft:20, marginRight:20,   borderRadius:20
   }}>

<Text style={{
  fontSize:20, color:'#FFF', fontWeight:'bold'
}}>
  متابعة
</Text>
   </View>

 </TouchableOpacity>

</Container>
    )
}
