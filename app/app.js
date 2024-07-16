import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './(auth)/sign-up';
import SignIn from './(auth)/sign-in';
import Home from './(tabs)/home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="sign-up" component={SignUp} />
        <Stack.Screen name="sign-in" component={SignIn} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;