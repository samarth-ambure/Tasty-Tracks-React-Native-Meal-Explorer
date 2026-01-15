import { useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { FavoritesContext } from '../store/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  // Filter the global MEALS array to find only those whose ID is in our context
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { flex: 1, padding: 16 },
  text: { fontSize: 18, fontWeight: 'bold', color: 'white' },
});