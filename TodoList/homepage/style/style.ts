import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
      backgroundColor: '#e9eaed', 
      height: '100%', 
      width: '100%', 
      paddingTop: 50, 
      paddingBottom: 20, 
      paddingLeft: 20, 
      paddingRight: 20
    },
  
    title:{
      fontSize: 24, 
      fontWeight: '700'
    },

    input:{
      backgroundColor: "white",
      height:42,
      flexGrow:1,
      borderRadius:25,
      paddingLeft: 20,
      paddingRight: 20,
      marginRight: 20,
      textAlign: "center"
    },
    
    shadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },

    btn:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:56,
      height:56,
      borderRadius: 28,
      backgroundColor: 'white'
    },

    wrapper:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    item:{
      display:'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
      padding:16,
      borderRadius: 8,
      alignItems: 'center'
    },

    subItem:{
      display:'flex',
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center'
    },

    cirle:{
      width: 14,
      height: 14,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#92c3d5'
    },

    square:{
      width:24,
      height:24,
      backgroundColor: '#92c3d5',
      borderRadius: 5
    },
    mr_16:{
      marginRight: 16
    },
    mt_24:{
      marginTop: 24
    },
    mt_16:{
      marginTop: 16
    }

})