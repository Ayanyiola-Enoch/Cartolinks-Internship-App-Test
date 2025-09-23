import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Dimensions,
  Image,
  Alert

} from 'react-native';
import { X, ChevronRight } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';

// const { Alert } = require('react-native');

const { width, height } = Dimensions.get('window');

const posterTypes = [
  {
    id: 1,
    title: 'New\nLimited\nEdition',
    category: 'Display',
    background: '#8B4513',
    selected: true,
  },
  {
    id: 2,
    title: 'Up to\n50% Off',
    category: 'Promotion',
    background: '#ffd900a9',
    textColor: '#fff',
  },
  {
    id: 3,
    title: "Editor's Choice",
    category: 'Branding',
    background: '#2F4F4F',
    badge: "Editor's Choice",
  },
  {
    id: 4,
    title: 'JOIN US AT\nOUR STUDIO',
    category: 'Announcement',
    background: '#4682B4',
  },
  {
    id: 5,
    title: 'Black\nFriday',
    category: 'Promotion',
    background: '#8B0000',
  },
];

export default function SmartScript() {
  const [activeTab, setActiveTab] = useState('smart');
  const [selectedPoster, setSelectedPoster] = useState(1);
  const [description, setDescription] = useState(
    'stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting.'
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton}>
            <X size={40} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'smart' && styles.activeTab]}
            onPress={() => setActiveTab('smart')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'smart' && styles.activeTabText,
              ]}
            >
              Smart script
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'advanced' && styles.activeTab]}
            onPress={() => setActiveTab('advanced')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'advanced' && styles.activeTabText,
              ]}
            >
              Advanced script
            </Text>
          </TouchableOpacity>
        </View>

        {/* Question */}
        <Text style={styles.question}>
          What type of posters do you want to create?
        </Text>

        {/* Poster Types */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.posterContainer}
          contentContainerStyle={styles.posterContent}
        >
          {posterTypes.map((poster) => (
            <TouchableOpacity
              key={poster.id}
              style={[
                styles.posterCard,
                selectedPoster === poster.id && styles.selectedPosterCard,
              ]}
              onPress={() => setSelectedPoster(poster.id)}
            >
              <View
                style={[
                  styles.posterImage,
                  { backgroundColor: poster.background },
                ]}
              >
                {poster.badge && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{poster.badge}</Text>
                  </View>
                )}
                <Text
                  style={[
                    styles.posterTitle,
                    { color: poster.textColor || '#fff' },
                  ]}
                >
                  {poster.title}
                </Text>
              </View>
              <Text style={styles.posterCategory}>{poster.category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Description Input */}
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            multiline
            placeholder="Describe your poster..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.imageButton}>
            <View style={styles.imageIcon}>
              {/* <Text style={styles.imageIconText}>🖼️</Text> */}
              <Image source={require('../../assets/images/gallery_add2.png')} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Size</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>1080 x 1920 px</Text>
              <ChevronRight size={20} color="#666" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Category</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>Foods and beverage</Text>
              <ChevronRight size={20} color="#666" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Generate Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.generateButton}
          onPress={() => {
            Alert.alert('Poster Generated', 'Thank you! Enjoy your poster.');
          }}
        >
          <Image source={require('../../assets/images/ai_icon2.png')} />
          <Text style={styles.generateText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  closeButton: {
    padding: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  tab: {
    paddingBottom: 10,
    marginRight: 20,
    width: '50%',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    width: '50%',
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 20,
    marginBottom: 25,
    lineHeight: 30,
  },
  posterContainer: {
    marginBottom: 30,
  },
  posterContent: {
    paddingHorizontal: 20,
    gap: 15,
  },
  posterCard: {
    marginRight: 15,
  },
  selectedPosterCard: {
    borderWidth: 2,
    borderColor: '#4A90E2',
    borderRadius: 15,
    padding: 2,
  },
  posterImage: {
    width: 120,
    height: 160,
    borderRadius: 12,
    padding: 15,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  posterTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  posterCategory: {
    fontSize: 12,
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  descriptionInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    maxHeight: 120,
    minHeight: 80,
  },
  imageButton: {
    marginLeft: 10,
  },
  imageIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIconText: {
    fontSize: 20,
  },
  settingsContainer: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValueText: {
    fontSize: 16,
    color: '#888',
    marginRight: 8,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  generateButton: {
    borderRadius: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    marginBottom: 11,
    gap: 8,
  },
  generateText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
