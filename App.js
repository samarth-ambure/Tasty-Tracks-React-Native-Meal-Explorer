import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesContextProvider from './store/favorites-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: '#351401' },
        tabBarActiveTintColor: '#e2b497', // Gold for active tab
        tabBarInactiveTintColor: 'white',
        sceneStyle: { backgroundColor: '#3f2f25' }, // Matching your dark theme
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesContextProvider>
    <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' }, // Deep Plum/Brown Header
      headerTintColor: 'white', // White text for the title and back button
      contentStyle: { backgroundColor: '#3f2f25' }, // Dark wood background for all screens
    }}
  >
   <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
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
</FavoritesContextProvider>
  );
}