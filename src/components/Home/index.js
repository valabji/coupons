import React, { useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import {View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window");
import { useSelector, useDispatch } from "react-redux";
import useFetch from "react-fetch-hook";


export default function Home ({navigation}){
  const user = useSelector(state => state.user);

  const URL = "https://coupon-free.com/wp-json/wp/v2/stores_app";
  const { isLoading, data } = useFetch( URL );

  const [open , setOpen] = useState(true);

  
 
  

    return (

    <Container style={{
      backgroundColor:'#eaeef0',
      
     }}>
<Header style={{
  backgroundColor:'#f4db2c'
}}>
  <Left>
    <Button transparent onPress={
      ()=>navigation.openDrawer()
    }>
      <Icon name='menu' />
    </Button>
  </Left>
  <Body>
    <Title>كود الخصم</Title>
  </Body>
  <Right>
    <Button transparent >
      <Icon name='search'
      type="MaterialIcons"
      />
    </Button>
  </Right>
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
{ data&&data.map( (item , index ) => {
  return (
    item.acf.country_stores.includes(user.country+"")&&
    <TouchableOpacity key={index} onPress={()=>{
      navigation.navigate("Brand", {
        item:{
          name:item.name,
          description:item.description,
          link:item.acf.links_store,
          imageurl:item.acf.logo_store.url,
          id:item.id
        }
      })
    }}>
    <View
    style={{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:5
    }}
    >
    <Image 
      source = {{ uri: item.acf.logo_store.url}}
      style={{
        width:width*.46,
        height:150,
        borderRadius:20
      }}
    />
    </View>
    </TouchableOpacity>
    
  )
}
)}

</View>
}

</Content>

 







</Container>
    )
}
