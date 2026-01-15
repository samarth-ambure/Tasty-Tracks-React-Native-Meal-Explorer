// screens/MealDetailScreen.js
import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Marked as favorite!');
  }
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable 
            onPress={headerButtonPressHandler}
            style={({ pressed }) => pressed && { opacity: 0.7 }}
          >
            <Ionicons name="star" size={24} color="white" />
          </Pressable>
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
               <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}

          <Text style={styles.subtitle}>Steps</Text>
          {selectedMeal.steps.map((step) => (
            <View key={step} style={styles.listItem}>
               <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { 
    marginBottom: 32 
  },
  image: { 
    width: '100%', 
    height: 350 
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 24, 
    margin: 8, 
    textAlign: 'center', 
    color: 'white' // Necessary for dark theme
  },
  details: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 8 
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'white' // Makes duration/complexity visible
  },
  subtitle: {
    color: '#e2b497', // Soft Gold
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  listOuterContainer: { 
    alignItems: 'center' 
  },
  listContainer: { 
    width: '80%' 
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497', // Gold background
  },
  itemText: {
    color: '#351401', // Dark text for readability on gold
    textAlign: 'center',
  },
});