import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeScreen from "./src/screens/HomeScreen"
import BookingScreen from "./src/screens/BookingScreen"

export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            let iconName

            if (route.name === "Home") {
              iconName = "home-outline"
            } else if (route.name === "Booking") {
              iconName = "calendar-outline"
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Booking" component={BookingScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
