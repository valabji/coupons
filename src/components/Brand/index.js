import React, { useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import {View, Image, Dimensions, ImageBackground, Text, Linking, Clipboard , ToastAndroid, Share, Modal, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
 
const { width, height } = Dimensions.get("window");
import MostUse from './MostUse';
import {addFavourit} from '../../actions/favourit';
import { useSelector, useDispatch } from "react-redux";

/*

I checked the file today and added the all 
modification of the patient , but there are 2 modification 

- patient cancel the appointment ==> need api to submit cancel 
- patient see doctor profile when click the
  visit details doctor image ==> neet api to get doctor information

*/

import Styles from './style';

import MostModern from './MostModern';

export default function Brand ({navigation, route}){



   const { item } = route.params;
   const [ mostuse , setMostuse] = useState(true);
   const [ mostmodern , setModern] = useState(false);
   const [ modalVisible, setModalVisible] = useState(false);
   const [ ccode, setCode] = useState("");

   const dispatch = useDispatch();
   
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

   const addToFavourit = (item)=>{
       dispatch(addFavourit(item));
       ToastAndroid.show("تم حفظ الكوبون", ToastAndroid.SHORT)
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




<Content contentContainerStyle={{
  paddingBottom:100
}}>

<ImageBackground

  source={{uri:item.imageurl}}
  style={{ 
     height:250,
     width:"100%",
     

  }}
>
    <View  style={{
      backgroundColor:'#f4db2c',
      flexDirection:'row',
      
    }}>
        <Button transparent onPress={
          ()=>navigation.goBack()
        }>
          <Icon name='arrow-back' style={{color:"#FFF"}}/>
        </Button>

      <Body>
        <Title>{item.name}</Title>
      </Body>
</View>
    </ImageBackground>



<View style={{
  borderRadius:20,
  borderWidth:.4,
  borderColor:'grey',
  margin:5,
  padding:10,
  backgroundColor:'#FFFFFF80'
}}>
  <Text style={{
    textAlign:'right',
    color:"#00000090"
  }}>
    
    {item.description}
  </Text>
</View>


<TouchableOpacity onPress={
  ()=>Linking.canOpenURL(item.link).then(supported => {
    if (supported) {
      Linking.openURL(item.link);
    } else {
      console.log("error", item.link);
      
    } 
  })
}>
  <View style={{
    backgroundColor:'#f4db2c',
    padding:15,
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
    borderRadius:20
  }}>
    <Text style={{
      fontWeight:'bold',
      color:'#FFF',
      fontSize:16
    }}   >
      الذهاب الي  متجر {item.name}
    </Text>
  </View>
  </TouchableOpacity>





  <View style={{
   flex:1,
  flexDirection:'row',
  justifyContent:'center',
  marginTop:10
}}>

{mostuse?<TouchableOpacity style={{width:width*.50}} onPress={()=>{
  setMostuse(true);
  setModern(false);
}}>
     <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:"#94e5f8", paddingTop:10, paddingBottom:10}}> 
    <Text style={{ color:'#FFFFFF', fontWeight:"bold", fontSize:18, padding:5}}> الاكثر استخداما</Text>
  </View>
</TouchableOpacity>
:
<TouchableOpacity style={{width:width*.50}} onPress={()=>{
  setMostuse(true);
  setModern(false);
}}>
     <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:"#cfd8dd", paddingTop:10, paddingBottom:10}}> 
    <Text style={{ color:'#FFFFFF', fontWeight:"bold", fontSize:18, padding:5}}> الاكثر استخداما</Text>
  </View>
</TouchableOpacity>
}
{
  mostmodern?
  <TouchableOpacity style={{width:width*.50}}onPress={()=>{
    setMostuse(false);
    setModern(true);
  }}>
  <View style={{  flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center',  backgroundColor:"#94e5f8", paddingTop:10, paddingBottom:10}}> 
  <Text style={{ color:'#FFF', fontWeight:"bold", fontSize:18, padding:5}}> الاحدث</Text>
  </View> 
</TouchableOpacity>
:
<TouchableOpacity style={{width:width*.50}}onPress={()=>{
  setMostuse(false);
  setModern(true);
}}>
  <View style={{  flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center',  backgroundColor:"#cfd8dd", paddingTop:10, paddingBottom:10}}> 
  <Text style={{ color:'#FFF', fontWeight:"bold", fontSize:18, padding:5}}> الاحدث</Text>
  </View> 
</TouchableOpacity>
}



</View>





 {mostuse? <MostUse  store_id={item.id} onShare={onShare} addToFavourit={addToFavourit} setModalVisible={setModalVisible} copy={copy}/>:null}


{mostmodern? <MostModern store_id={item.id}  onShare={onShare} addToFavourit={addToFavourit} setModalVisible={setModalVisible} copy={copy} />:null} 








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




/*






*/