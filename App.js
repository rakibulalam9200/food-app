import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen}
                      options={{
                        title: 'Business Search',
                        headerStyle: {
                          // backgroundColor: 'lightgray',
                        },
                        headerTintColor: 'black',
                        headerTitleAlign:'center',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          alignSelf:'center'
                        },
                       }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
