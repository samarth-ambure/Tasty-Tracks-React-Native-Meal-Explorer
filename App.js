import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' }, // Deep Plum/Brown Header
      headerTintColor: 'white', // White text for the title and back button
      contentStyle: { backgroundColor: '#3f2f25' }, // Dark wood background for all screens
    }}
  >
    <Stack.Screen
      name="MealsCategories"
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
      }}
    />
    <Stack.Screen 
      name="MealsOverview" 
      component={MealsOverviewScreen} 
    />
    <Stack.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={{
        title: 'About the Meal',
      }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}