import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    container :{
        padding:30,
        fontWeight:'bold'
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    },
    modal:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        paddingTop:60
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    }
})

export const images = {
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}