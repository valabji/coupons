import { Platform } from 'react-native' ;
import {  Dimensions} from 'react-native';

const { height , width} = Dimensions.get("window");

export default 
{
    
     
    Logo:{
        width: 202 , height : 49 , 
      }, 
    LogoStyle:{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 0.15 * height,
        marginTop:70
    },
    TouchView:{
        flexDirection:'row',
        alignItems:'center'
    },
    TouchText:{
        color:'#FFFFFF',
        fontSize:16,
        fontFamily:"Cairo_700Bold"
    },
    TouchLine:{
        borderWidth:1, 
        marginLeft:18, 
        marginBottom:23,
        marginTop:10
    },
    LoginView:{
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom:150 
    },
    LoginTextStyle:{
        marginBottom:13, 
        marginTop:20 ,
    },
    LoginInputStyle:{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        borderRadius: 5,
        height: 42,
        backgroundColor: "#FFFFFF1E"
    }
    ,
     
     
    ButtonText : {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    ButtonStyle:{
        backgroundColor: "#112435FF",
        borderRadius: 5
    },
    ButtonView:{
        marginBottom: 17,
        marginTop: 75,
        borderRadius: 5,
        height: 42
    } ,
    LoginNote:{
        marginBottom: 17,
        marginTop: 22,
        height: 42
    },
    ModalPosition:{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#00000060"
    },
    ModalPopup:{
        flex: 1,
        marginTop:height/7,
        marginBottom:height/7,
        height:height*.506,
        marginLeft:15,
        marginRight:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        paddingBottom:15,
        borderRadius:20
    },
    ModalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    ModalText:{
        marginTop:10, 
        color:"#FFFFFF80", 
        fontSize:20, 
        fontFamily:'Cairo_700Bold',
        padding:10
    },
    ModalButton:{
        width:width/1.7,
        height:50,
        borderRadius:10,
        marginTop:20,
        backgroundColor:'#458E21',
    },
    ModalButtonText:{
        color:"#FFFFFF", 
        fontSize:15,
    },
    loading : {
        position:'absolute',
        zIndex:3,
        //top:100,
        //left:width/2,
    }


}; 