import React from 'react';
import { 
  View, Text, StyleSheet, Image, TextInput, 
  TouchableOpacity, SafeAreaView 
} from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Ảnh các loại quả ở phía trên (Bạn nhớ Export ảnh này từ Figma nhé) */}
      <Image 
        source={require('../assets/page3.png')} 
        style={styles.bannerImage}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

            {/* 2. Ô nhập số điện thoại - Bấm vào vùng này để chuyển sang màn Number */}
      <TouchableOpacity 
        style={styles.phoneInput}
        activeOpacity={0.7}
        // Thêm lệnh chuyển màn ở đây
        onPress={() => navigation.navigate('Number')} 
      >
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/323/323319.png' }} 
          style={styles.flagIcon}
        />
        <Text style={styles.countryCode}>+880</Text>
        
        {/* Quan trọng: Dùng thẻ Text thay vì TextInput. 
            Vì ở màn hình này theo thiết kế Figma, đây chỉ là một "nút bấm giả" 
            để dẫn người dùng sang màn hình nhập số chuyên dụng.
        */}
        <Text style={{ flex: 1, fontSize: 18, color: '#B1B1B1' }}>
          Enter your number
        </Text>
      </TouchableOpacity>

        <Text style={styles.orText}>Or connect with social media</Text>

        {/* 3. Nút Google */}
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#5383EC' }]}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* 4. Nút Facebook */}
        <TouchableOpacity 
          style={[styles.socialButton, { backgroundColor: '#4A66AC', marginTop: 20 }]}
          onPress={() => navigation.navigate('Login')} // Chuyển sang màn Login khi nhấn
        >
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  bannerImage: { width: '100%', height: 300 },
  content: { paddingHorizontal: 25 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725', marginBottom: 25 },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 10,
    marginBottom: 40
  },
  flagIcon: { width: 30, height: 20, marginRight: 10 },
  countryCode: { fontSize: 18, color: '#181725', marginRight: 10 },
  input: { flex: 1, fontSize: 18 },
  orText: { 
    textAlign: 'center', 
    color: '#828282', 
    fontSize: 14, 
    fontWeight: '600', 
    marginBottom: 35 
  },
  socialButton: {
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' }
});

export default SignInScreen;