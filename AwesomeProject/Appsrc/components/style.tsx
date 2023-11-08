import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    HeaderComponent:{
        backgroundColor:'#00A9FF',
        paddingTop:30,
        flexDirection:'row',
        padding:10,
        borderBottomEndRadius:15,
        borderBottomLeftRadius:15,
    },
    icon:{
        width:20,
        height:20,

    },
    txtHeader:{
        color:'white',
        textAlign:'center',
        flex:1,
        fontSize:18,
    },
    txtInputComponent:{
        width:'70%',
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:5,
        alignSelf:'center',
    },
    txtInput:{
        flex:1,
    },
    container:{
        flex:1,
        padding:5,
        borderWidth:1,
        margin:5,
        width:150,
        height:140,
      
    },
    imgProduct:{
        width:'100%',
        height:80,
        
        

    },
    imgLike:{
        width:20,
        height:20,
    },
    imgSearch:{
        width:30,
        height:20,
    },
    ItemSearch:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20,
        borderWidth:1,
        marginTop:30,
        borderRadius:10,
        paddingLeft:5,
        marginBottom:50,

    },
    TxtSearch:{
        width:'80%',
    },
    txtCart:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    txtMonney:{
        color:'black',
        fontSize:12,

     },
     txtTitle:{
        color:'black',
        fontWeight:'500',
     }
})
export default styles;