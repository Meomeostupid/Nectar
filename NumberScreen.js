import React from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, TextInput, 
  TouchableOpacity, Image, KeyboardAvoidingView, Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NumberScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView giúp đẩy các thành phần lên khi bàn phím hiện ra */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Nút Back */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.label}>Mobile Number</Text>
          
          <View style={styles.inputContainer}>
            <Image 
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png' }} 
              style={styles.flag} 
            />
            <Text style={styles.countryCode}>+880</Text>
            <TextInput 
              style={styles.input} 
              placeholder="0123456789" 
              keyboardType="phone-pad"
              autoFocus={true} 
            />
          </View>
        </View>

        {/* Nút tròn Next - Bây giờ nó sẽ tự động được đẩy lên trên bàn phím */}
        <TouchableOpacity 
          style={styles.nextBtn}
          // KIỂM TRA TÊN NÀY TRONG APP.JS: Phải khớp 100%
          onPress={() => navigation.navigate('Verification')}
        >
          <Ionicons name="chevron-forward" size={30} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  backBtn: { padding: 20 },
  content: { paddingHorizontal: 25, marginTop: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725', marginBottom: 30 },
  label: { color: '#7C7C7C', fontSize: 16, fontWeight: '600' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingVertical: 15 },
  flag: { width: 30, height: 20, marginRight: 10 },
  countryCode: { fontSize: 18, color: '#181725', marginRight: 10 },
  input: { flex: 1, fontSize: 18 },
  nextBtn: {
    position: 'absolute',
    right: 25,
    bottom: 40, // Khoảng cách này sẽ tự động thay đổi nhờ KeyboardAvoidingView
    width: 67,
    height: 67,
    borderRadius: 33.5,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  }
});

export default NumberScreen;