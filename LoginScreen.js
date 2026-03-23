import React from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView 
} from 'react-native';
import AppInput from '../components/AppInput';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Logo cà rốt cam trung tâm */}
        <Image 
          source={require('../assets/Vector.png')} // Bạn có thể dùng logo cà rốt cam riêng nếu đã export
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your emails and password</Text>
        </View>

        {/* 2. Các ô nhập liệu dùng Component */}
        <AppInput 
          label="Email" 
          placeholder="Enter your email" 
          keyboardType="email-address" 
        />
        <AppInput 
          label="Password" 
          placeholder="Enter your password" 
          secureTextEntry={true} 
        />

        {/* 3. Quên mật khẩu */}
        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* 4. Nút Log In */}
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => alert('Đăng nhập thành công!')}
        >
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>

        {/* 5. Chuyển sang đăng ký */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Singup</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { paddingHorizontal: 25, paddingTop: 30, alignItems: 'center' },
  logo: { width: 47, height: 55, marginBottom: 60 },
  header: { width: '100%', marginBottom: 40 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725' },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginTop: 10 },
  forgotBtn: { alignSelf: 'flex-end', marginBottom: 30 },
  forgotText: { color: '#181725', fontSize: 14 },
  loginBtn: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    height: 67, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  loginBtnText: { color: 'white', fontSize: 18, fontWeight: '600' },
  footer: { flexDirection: 'row', marginTop: 25, justifyContent: 'center' },
  footerText: { fontSize: 14, color: '#181725', fontWeight: '600' },
  signupLink: { fontSize: 14, color: '#53B175', fontWeight: '600' }
});

export default LoginScreen;