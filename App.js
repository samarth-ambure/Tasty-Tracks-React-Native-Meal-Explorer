import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MealsCategories" 
          component={CategoriesScreen} 
          options={{ title: 'Meal Categories' }} 
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen 
          name="MealDetail" 
          component={MealDetailScreen} 
          options={{ title: 'About the Meal' }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}