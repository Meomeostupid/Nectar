import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VerificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Text style={styles.label}>Code</Text>
        
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="- - - -" 
            keyboardType="number-pad"
            maxLength={4}
            autoFocus={true}
          />
        </View>

        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#53B175', fontSize: 18 }}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.nextBtn}
        onPress={() => navigation.navigate('SelectLocation')}
      >
        <Ionicons name="chevron-forward" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Bạn có thể dùng chung Style với NumberScreen hoặc copy lại các style tương tự
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  backBtn: { padding: 20 },
  content: { paddingHorizontal: 25, marginTop: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725', marginBottom: 30 },
  label: { color: '#7C7C7C', fontSize: 16, fontWeight: '600' },
  inputContainer: { borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingVertical: 15 },
  input: { fontSize: 18, letterSpacing: 10 }, // Tạo khoảng cách cho các dấu gạch ngang
  nextBtn: {
    position: 'absolute',
    right: 25,
    bottom: 40,
    width: 67,
    height: 67,
    borderRadius: 33.5,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default VerificationScreen;