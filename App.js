import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import { StyleSheet } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';//



const Stack = createStackNavigator();

export default function App() {
  return (
    //<LinearGradient colors={['#0000FF', '#00008B']} style={styles.background}></LinearGradient> //
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
//    </LinearGradient> //
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
