import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Sau 2.5 giây tự chuyển sang màn hình Onboarding
    setTimeout(() => {
      navigation.replace('Onboarding'); 
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Image 
        source={require('../assets/page1.png')} // Kiểm tra lại tên file logo của bạn
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#53B175', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 250, height: 100 }
});

export default SplashScreen;