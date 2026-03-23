import React from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SelectLocationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 1. Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      <View style={styles.content}>
        {/* 2. Ảnh minh họa bản đồ (Bạn nhớ export từ Figma nhé) */}
        <Image 
          source={require('../assets/illustration.png')} 
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with{"\n"}what’s happening in your area
        </Text>

        {/* 3. Ô chọn Zone */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Zone</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Banasree</Text>
            <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        </View>

        {/* 4. Ô chọn Area */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Area</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Types of your area</Text>
            <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        </View>

        {/* 5. Nút Submit */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // Chuyển sang màn Login tiếp theo
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  backBtn: { padding: 20 },
  content: { paddingHorizontal: 25, alignItems: 'center' },
  illustration: { width: 220, height: 170, marginBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725', textAlign: 'center' },
  subtitle: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    textAlign: 'center', 
    marginTop: 15, 
    marginBottom: 40,
    lineHeight: 22 
  },
  inputGroup: { width: '100%', marginBottom: 30 },
  label: { fontSize: 16, fontWeight: '600', color: '#7C7C7C', marginBottom: 10 },
  dropdown: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingVertical: 10
  },
  dropdownText: { fontSize: 18, color: '#181725' },
  button: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    height: 67, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600' },
});

export default SelectLocationScreen;