import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem'; // We will create this next

function MealsOverviewScreen({ route, navigation }) {
  // Extract the categoryId passed from CategoriesScreen
  const catId = route.params.categoryId;

  // Filter meals that belong to this category
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // Set the header title dynamically to the Category Title
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  if (displayedMeals.length === 0) {
  return (
    <View style={styles.container}>
      <Text style={styles.fallbackText}>
        No meals found for this category. Check your IDs!
      </Text>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  fallbackText: { fontSize: 16, textAlign: 'center', color: 'gray' },
});