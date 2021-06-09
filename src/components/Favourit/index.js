import React, { useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import {View, Image, Dimensions, ImageBackground, Text, Linking, Clipboard , ToastAndroid, Share,StatusBar, ActivityIndicator, Modal, TouchableWithoutFeedback} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");
import Styles from './style';

import Coupons from './Coupons';
import { useSelector, useDispatch } from "react-redux";

export default function LastCoupons ({navigation}){
  const {favourit} = useSelector(state => state.user);
  const [ modalVisible, setModalVisible] = useState(false);
  const [ ccode, setCode] = useState("");


  const copy= (it)=>{

    Clipboard.setString(it.code) ;
    ToastAndroid.show("تم النسخ في الحافظة", ToastAndroid.SHORT);
    
    
    setCode(it.code)
    setModalVisible(true);

    const timerId = setInterval(
       () => { 
        
        Linking.canOpenURL(it.url).then(supported => {
          if (supported) {
            Linking.openURL(it.url);
          } else {
            console.log("error", it.url);
            
          } 
        })
      
     clearInterval(timerId);
  }, 3000)
  return () => clearInterval(timerId);


   }
  
   const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'حمل تطبيق كوبون خصم ( أقوى كوبونات الخصم لأشهر المتاجر في تطبيق واحد)  https://play.google.com/store/apps/details?id=cobone.couponkhasm.coupon',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


    return (

    <Container style={{
      backgroundColor:'#eaeef0',
      
     }}>

<StatusBar  />
<Content contentContainerStyle={{
  paddingBottom:100
}}>

<Header style={{
  backgroundColor:'#f4db2c'
}}>
  <Left>
    <Button transparent onPress={
      ()=>navigation.goBack()
    }>
      <Icon name='arrow-back' />
    </Button>
  </Left>
  <Body>
    <Title>المفضلة</Title>
  </Body>
  <Right>
     
  </Right>
</Header>





 
  <Coupons items ={favourit} onShare={onShare} navigation={navigation} copy={copy}/>




  <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={ Styles.ModalPosition} />
              </TouchableWithoutFeedback>


              

              

              <View style={Styles.ModalPopup }>
               
              <TouchableOpacity style={{  width:width-50, marginTop:-50}}
                onPress={()=> setModalVisible(false) } >
                <Icon
                 type="MaterialCommunityIcons"
                 name="close-octagon"
                 style={{ color :'#4e4e4e', fontSize:35, textAlign:'right'}}
                />
              </TouchableOpacity>

              <View style={{marginTop:-10}} >
              <Icon 
                type="MaterialCommunityIcons"
                name="check-decagram"
                style={{color:'#58b64b', fontSize:50, textAlign:'center'}}
                />
                <Text style={{color:'#58b64b', fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>
                  تم نسخ الكوبون بنجاح!
                </Text>

                <Text style={{color:'#00000090', fontWeight:'bold', fontSize:14, textAlign:'center', marginLeft:30,marginRight:30, marginTop:10 }}>
                  قم بلصق أو وضع الكوبون في المكان المخصص للكوبون في المتجر واستمتع بالخصم علي مشترياتك
                </Text>

                <View style={{backgroundColor:'#d0d7dd', width:100, height:70, justifyContent:'center', alignItems:'center', borderRadius:20, alignSelf:'center', marginTop:15}}>
                    <Text style={{color:'#00000090', fontWeight:'bold', fontSize:20 }}>
                      { ccode }
                    </Text>
                </View>

                <Text style={{color:'#000', fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>
                  جاري تحويلك الي المتجر ...
                </Text>

                <TouchableOpacity style={{backgroundColor:'#1976d3', width:100, height:60, justifyContent:'center', alignItems:'center', borderRadius:10, alignSelf:'center', marginTop:15}}
                onPress={()=>setModalVisible(false)}
                >
                    <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:20 }}>
                      الغاء
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={{backgroundColor:'#1976d3', width:width/1.5, height:60, justifyContent:'center', alignItems:'center', borderRadius:10, alignSelf:'center', marginTop:15}}
                      onPress={
                        ()=> ( Clipboard.setString(ccode) ,
                        ToastAndroid.show("تم النسخ في الحافظة", ToastAndroid.SHORT)
                        )                      }
                >
                    <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:20 }}>
                      نسخ الكوبون مرة اخري
                    </Text>
                </TouchableOpacity>


              </View>
              
              </View>
            
            </Modal>
</Content>






</Container>
    )
}
