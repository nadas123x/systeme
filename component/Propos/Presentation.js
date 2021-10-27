import React, { Component,useEffect,useFocusEffect } from 'react';

import Svg, { Ellipse } from "react-native-svg";
import {
  StyleSheet,
  Text,
  View,
  Image,
  opacity,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
 Button,

  Dimensions,
  ScrollView
} from 'react-native';

import {BackHandler} from 'react-native';

export default function Presentation( {navigation}){
  

  const PressHandler = () => {
    navigation.navigate('Infos')
  }
  
  
    return (
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground
        source={{uri: 'https://i.pinimg.com/originals/03/02/bc/0302bc613ea56d6e74c6edb151712364.jpg'}}
        style={styles.imagee}
    />
        <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.image}
    />
     <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(255,255,255,1)"
            cx={'41%'}
            cy={'51%'}
            rx={'50%'}
            ry={'50%'}
          ></Ellipse>
        </Svg>
          <View style={styles.header}>
         
              <Text style={styles.headerTitle}>

              <Image source ={{uri:'https://seeklogo.com/images/O/ocp-africa-logo-8D8E6B532F-seeklogo.com.png' }}style={styles.bc} />
              </Text>
              
          </View>
         
          <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                    Présentation:
              </Text>
              

              <Text style={styles.postDescription}>
             •    Un des leaders mondiaux sur le marché du phosphate et ses
dérivés, OCP opère sur les cinq continents et dispose des plus
importantes réserves de phosphate au monde. Avec plus de 90 ans
d’expérience dans la mine et 45 ans en chimie, OCP offre l’une
des plus larges gammes de roche pour divers usages. Premier
exportateur de phosphate brut et d’acide phosphorique dans le
monde et l’un des principaux exportateurs d’engrais phosphatés,
OCP joue un rôle central dans ses régions d’implantation et
emploie directement près de 20 000 personnes ce qui le place dans
le peloton de tête des plus grands employeurs du Royaume.
Première entreprise industrielle du Maroc, OCP contribue
substantiellement au développement de l’économie nationale par
le biais de ses exportations .En
outre, OCP apporte un soutien indéfectible à l’agriculture
marocaine en général et aux PME en particulier.






              </Text>
            

              <TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "white",
                    marginLeft :'75%',
                    marginTop :'20%'
                }}>
            <Button
             title=' ►'
             alignItems='center'
               onPress={PressHandler}

               color="olive"  
              
                       />
               </TouchableHighlight>

              

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

              
              </View>
      
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>
                  
                  </Text>  
              </TouchableOpacity> 
          </View>
        </View>
        </View>
     </ScrollView>
     
    );
    
  }

 
const styles = StyleSheet.create({
  octet: {
    fontFamily: 'icomoon',
    fontSize: 20,
  },
  container:{
    backgroundColor: 'black',
    height: Dimensions.get('window').height,
  

  },
  ellipse: {
    top: 0,
    left: 0,
    width:800,
    height: 800,
    position: "absolute"
  },
 
  
  
  

  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
  
  
  imagee:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
  
  
    },

  postTitle:{
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine: "underline",
    marginLeft:'45%',
    marginTop:'24%',
    color:'olive',
    backgroundColor: "transparent",
  
  },
  postDescription:{
    fontSize:14,
    marginTop:'20%',
    marginLeft:'5%',
    backgroundColor: "transparent",
fontStyle:'italic'
  },

 
 
  
  name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:'10%'
  }, 
  
});
 