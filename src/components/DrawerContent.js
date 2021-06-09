import React from 'react';
import { View, StyleSheet, Linking, Image, Share , Alert} from 'react-native';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

import Icon4 from 'react-native-vector-icons/AntDesign';
//import{ AuthContext } from '../components/context';




export default function DrawerContent(props) {

//console.log(props);

    //const { signOut, toggleTheme } = React.useContext(AuthContext);
    const doLogout = ()=>{
        dispatch(userlogout());
        props.navigation.navigate('Splash');
      }

      const notify = ()=>{
       // props.navigation.navigate('Notifications');
      }

      const about = () => {
        var l = "https://www.google.com/";
       Linking.canOpenURL(l).then(supported => {
         if (supported) {
           Linking.openURL(l);
         } else {
           showMessage({
               message: l+"خطأ في الرابط ",
               type: "danger",
             });
         }
       });
     };

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


      const aboutApp = ()=>{
          props.navigation.closeDrawer();
        Alert.alert(
            'كوبون خصم',
            'تسوق ووفر مع اقوي كوبونات الخصم للمتاجر العربية و العالمية كوبونات الخصم في تطبيق واحد ',
            [
              {
                text: 'موافق',
                onPress: () => console.log('Ask me later pressed')
              },
             ],
            { cancelable: false }
          );
      }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{...styles.drawerContent }}>
                    <View style={styles.userInfoSection}>
                        <View style={{ alignItems:'center',backgroundColor:"#f4db2c", padding:20, marginTop:-5, marginRight:-30}}>
                        <Image source={ require('../../assets/icon.png')}                                 style={{height:130, width:150}}
                                resizeMode="contain"
                                /> 
                            
                        </View>

                        
                    </View>

                    <Drawer.Section style={styles.drawerSection}
                    // style={{ borderBottomColor:'#FFF'}}
                    >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                 source={{uri:"data:image/png;base64,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"}}
                                 style={{ width:20, height:20}}
                                 />
                            )}
                            label="الكوبونات"

                            style={{
                                ///transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                               // transform: [{ rotateY:  "180deg" }]
                            }}
                            onPress={()=>props.navigation.navigate('Home')}
                        />


                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon3 
                                name="megaphone" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="اخر الكوبونات"

                            style={{
                               // transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                                //transform: [{ rotateY:  "180deg" }]
                            }}

                            onPress={()=>props.navigation.navigate('LastCoupons')}
                             
                            />


                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="favorite" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="المفضلة"

                            style={{
                                //transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                              //  transform: [{ rotateY:  "180deg" }]
                            }}

                            onPress={() => {props.navigation.navigate('Favourit')}}
                        />
                        
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon4
                                name="setting" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="الدولة"

                            style={{
                               // transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                               // transform: [{ rotateY:  "180deg" }]
                            }}

                           onPress={() => {props.navigation.navigate('Country')}}
                             
                             //   onPress={() => Linking.openURL('mailto:info@coupon.com?subject=What is your subject ..? &body= body...') } 
                            />




                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon3 
                                name="star" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="تقييم التطبيق"

                            style={{
                               // transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                               // transform: [{ rotateY:  "180deg" }]
                            }}

                            //onPress={about}
                             
                            />


                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="share" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="مشاركة"

                            style={{
                              //  transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                               // transform: [{ rotateY:  "180deg" }]
                            }}

                            onPress={onShare}
                             
                            />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon4
                                name="questioncircle" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="عن التطبيق"

                            style={{
                               // transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                                //transform: [{ rotateY:  "180deg" }]
                            }}

                            onPress={ aboutApp}
                             
                            />

<DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="information-outline" 
                                color={"#003052"}
                                size={size}
                                />
                            )}
                            label="تواصل معنا"

                            style={{
                               // transform: [{ rotateY:  "180deg" }]
                            }}
                            
                            labelStyle={{
                                textAlign:'left',
                                fontFamily:'Cairo_700Bold',
                                color:"#003052",
                             //   transform: [{ rotateY:  "180deg" }]
                            }}

                            onPress={() => Linking.openURL('mailto:info@coupoun.com?subject=What is your subject ..? &body= body...') } 

                             
                            />

                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple 
                        //onPress={() => {toggleTheme()}}
                        >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={"#003052"}
                        size={size}
                        />
                    )}
                    label="تسجيل الخروج"
                    style={{
                        transform: [{ rotateY:  "180deg" }]
                    }}
                    
                    labelStyle={{
                        textAlign:'right',
                        fontFamily:'Cairo_700Bold',
                        color:"#003052",
                        transform: [{ rotateY:  "180deg" }]
                    }}
                    onPress={doLogout}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingRight: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });