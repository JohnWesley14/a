import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const ArthurAzevedo = ( ) => {
  
  return (
   <SafeAreaView style={style.divTeatro}>
      <Header />
     
      
         <View style={style.divCard} >
            <View style={style.infoPrincipal}>
               <Text style={style.heading}>Teatro Arthur Azevedo</Text>
               <Image source={require('./../../images/arthuraz.jpg')} style={style.image}/>
               <Text style={style.description}>O teatro conta com várias atrações, como por exemplo o incrível acervo de apresentações durante o dia, que cativa os turistas a virem visitá-lo.</Text>
            </View>
            
            <View style={style.sectionButtons}>
               <TouchableOpacity style={style.button}>
                  <Image source={require('./../../images/Location.png')}/>
                  <Text style={style.nameButton}>Localização</Text>
                  
               </TouchableOpacity>
            </View>
         </View>
    
   </SafeAreaView>
   
   // <TouchableOpacity onPress={() => navigation.navigate('Apresentacao')}>
   
   
  )
}

const style = StyleSheet.create({
   divTeatro:{
      alignItems: 'center',
      
      backgroundColor: 'white',
      flex: 1,
      backgroundColor: '#0F0F0F',
   },
   divCard:{
      maxWidth: '95%',
      borderWidth: 1,
      borderColor: '#20232a',
      borderRadius: 10,
      minHeight: 600,
      alignItems: 'center',
      marginTop: 30,
      
   },
   image:{
      maxWidth: '100%',
      height: 280,
      borderRadius: 10,
      width: 430,
   },
   heading:{
      color: "#FFF",
      paddingBottom: 16,
      fontSize: 17,
   },
   description:{
      color: "#FFF",
      fontSize: 13,
      fontWeight: 300,
      paddingLeft: 20,
      paddingRight: 10,
      marginTop: 5,
   },
   nameButton:{
      color: "#FFF",
      borderWidth: 1,
      borderColor: '#20232a',
      borderRadius: 10,
      width: '110%',
      height: 30,
      textAlign: 'center',
      

   },
   infoPrincipal:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
   },
   sectionButtons:{
      width: '100%',
      
   },
   button:{
      borderWidth: 1,
      borderColor: '#20232a',
      borderRadius: 10,
      minWidth: '30%',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 120,
      padding: 20,
      marginLeft: 18,
      marginTop: 15,

   }
})
export default ArthurAzevedo