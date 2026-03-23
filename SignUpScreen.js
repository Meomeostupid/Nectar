import React from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView 
} from 'react-native';
import AppInput from '../components/AppInput'; // Tái sử dụng Component cũ

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 1. Logo Cà rốt cam */}
        <Image 
          source={require('../assets/Vector.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>
        </View>

        {/* 2. Form nhập liệu */}
        <AppInput label="Username" placeholder="Enter your username" />
        <AppInput label="Email" placeholder="Enter your email" keyboardType="email-address" />
        <AppInput label="Password" placeholder="Enter your password" secureTextEntry={true} />

        {/* 3. Phần Điều khoản dịch vụ (Terms of Service) */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>

        {/* 4. Nút Sign Up */}
        <TouchableOpacity 
          style={styles.signupBtn}
          onPress={() => alert('Đăng ký thành công!')}
        >
          <Text style={styles.signupBtnText}>Sing Up</Text>
        </TouchableOpacity>

        {/* 5. Chuyển ngược lại Login */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Loging</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { paddingHorizontal: 25, paddingTop: 30, alignItems: 'center' },
  logo: { width: 47, height: 55, marginBottom: 50 },
  header: { width: '100%', marginBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725' },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginTop: 10 },
  termsContainer: { width: '100%', marginBottom: 30, marginTop: 10 },
  termsText: { fontSize: 14, color: '#7C7C7C', lineHeight: 22 },
  linkText: { color: '#53B175', fontWeight: '500' },
  signupBtn: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    height: 67, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  signupBtnText: { color: 'white', fontSize: 18, fontWeight: '600' },
  footer: { flexDirection: 'row', marginTop: 25, justifyContent: 'center', marginBottom: 20 },
  footerText: { fontSize: 14, color: '#181725', fontWeight: '600' },
  loginLink: { fontSize: 14, color: '#53B175', fontWeight: '600' }
});

export default SignUpScreen;