import React, { useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import {View, Image, Dimensions, ImageBackground, Text, Linking, Clipboard , ToastAndroid, Share} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");


export default function Coupons ({items, onShare, copy}){

console.log(items);

    return (

      <>
      {
        items.map( ( it, index ) =>
        <View style={{  borderRadius:20, margin:10, backgroundColor:"#FFF"}} key={index}>
        <TouchableOpacity  >
        <View style={{
          flex:1,
          flexDirection:'row',
          margin:15, 
        
        }}>
    
    <View style={{flex:2.5}}>
      <Title style={{
        color:'#ba342b',
        textAlign:'right',
        padding:10,
        fontWeight:'600'
      }} >
         {it.title.rendered.replace(/(\r\n|\n|\r|<p>)/gm, "").
         replace('</p>', "")}
      </Title>
      <Text style={{
        color:'#00000080',
        fontSize:16,
        fontWeight:'600',
        paddingLeft:5,
        paddingRight:5
      }} numberOfLines={3}>
       {it.content.rendered.replace(/(\r\n|\n|\r|<p>)/gm, "").
         replace('</p>', "")}
      </Text>
       
    </View>
    
    <View style={{flex:1}}>
    <Image source={{uri:it.x_metadata.image}} 
           style={{
         width:90,
         height:90
       }}
      />
    </View>
    
    
    </View>
    </TouchableOpacity >
    
    
    <View style={{
      flex:1,
      flexDirection:'row',
      marginRight:20
    }}>
    
    <TouchableOpacity onPress={()=>
      ToastAndroid.show("تم حفظ الكوبون", ToastAndroid.SHORT)
    } style={{
      width:width*.45
    }}>
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}> 
        <Text style={{ color:'blue', fontWeight:"bold", fontSize:18, padding:5}}> حفظ الكوبون</Text>
        <Icon
         type="MaterialCommunityIcons"
         name="heart"
         style={{color:'#ba342b'}}
        />
      </View>
      </TouchableOpacity>
    <TouchableOpacity onPress={onShare} style={{
      width:width*.30
    }}>
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}> 
      <Text style={{ color:'blue', fontWeight:"bold", fontSize:18, padding:5}}> شارك</Text>
    
        <Icon
         type="FontAwesome"
         name="share-alt-square"
         style={{color:'#ba342b'}}
        />
      </View>
    </TouchableOpacity>
    
    <Image 
    source={{uri:it.imageurl}}
    style={{ width:50, height:50 , position:'absolute', right:-10, bottom:-5}}
    />
    </View>
    
    
    <View style={{
      flex:1,
      flexDirection:'row',
    //  marginLeft:15,
    //  marginRight:15,
      marginTop:10
    }}>
    
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:"#4d4d4d", padding:10}}> 
        <Text style={{ color:'#FFFFFF', fontWeight:"bold", fontSize:18, padding:5}}> {it.x_metadata.Code_Coupon}</Text>
         
      </View>
    
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center',  backgroundColor:"blue", padding:10}}> 
      <Text style={{ color:'#FFF', fontWeight:"bold", fontSize:18, padding:5}}> رمز الكوبون</Text>
    
         
      </View>
    
    
    </View>
    
    
    <TouchableOpacity onPress={
      () =>  copy({ 
        code :it.x_metadata.Code_Coupon,
        url:it.x_metadata.Links_Affiliats
       })
      
      } >
        <View style={{
          flex:1,
          flexDirection:'row',
          //marginLeft:15,
          //marginRight:15,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#ba342b',
          padding:10,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20
        }}>
    
          
    
          <Text style={{ color:'#FFF', fontWeight:"bold", fontSize:18, padding:5}}> نسخ الكوبون</Text>
    
            
    
    
        </View>
    </TouchableOpacity>
    
    
    </View>    
      
      )
      }
    
    
    
    
    </>
    
    )
}
