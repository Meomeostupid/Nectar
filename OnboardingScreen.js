import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, StatusBar } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Đảm bảo status bar màu trắng để nổi bật trên nền ảnh tối */}
      <StatusBar barStyle="light-content" />
      
      <ImageBackground 
        source={require('../assets/page2.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          {/* Logo Cà rốt trắng nhỏ */}
          <Image 
            source={require('../assets/Vector.png')} 
            style={styles.miniLogo} 
            resizeMode="contain" 
          />
          
          <Text style={styles.title}>Welcome{"\n"}to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          
          <TouchableOpacity 
             style={styles.button}
             activeOpacity={0.8}
             onPress={() => navigation.navigate('SignIn')} 
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000' // Nền đen dự phòng khi ảnh chưa load xong
  },
  backgroundImage: { 
    flex: 1, 
    justifyContent: 'flex-end' 
  },
  overlay: { 
    paddingHorizontal: 30, 
    paddingBottom: 90, 
    alignItems: 'center', 
    // Độ mờ rgba(0,0,0,0.35) giúp chữ trắng nổi bật trên ảnh nền
    backgroundColor: 'rgba(0,0,0,0.35)' 
  },
  miniLogo: { 
    width: 48, 
    height: 56, 
    marginBottom: 15 
  },
  title: { 
    color: 'white', 
    fontSize: 48, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    lineHeight: 50 
  },
  subtitle: { 
    color: '#FCFCFC', 
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 10, 
    marginBottom: 40, 
    opacity: 0.7 
  },
  button: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    height: 67, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});

export default OnboardingScreen;