import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/Mainscreen';
import AnimationScreen from './screens/Animationscreen';
import AlertScreen from './screens/Alertscreen';
import ProfileScreen from './screens/Profilescreen';





const Stack = createNativeStackNavigator();

export default function App() {
  const {height_button, width_button} = Dimensions.get('window');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Animation" component={AnimationScreen} />
        <Stack.Screen name="Alert" component={AlertScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}



const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3498db",textAlign: 'center',marginBottom: 30,}}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff", textTransform: "uppercase", alignItems: 'center',}} >
                    {"\n"} Welcome, Friend! {"\n"} Investigate our App!{"\n"}
            </Text>
        </View>

        <View>
            <View>
                <TouchableOpacity style={styles.homeButtonMain} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>
                    <Text>Go to Profile</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.homeTextMain}> This is Where you can leave your personal ToDO List </Text>
            </View>
        </View>

        <View>
            <View>
                <TouchableOpacity style={styles.homeButtonMain} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} title="Go to Main ML" onPress={() => navigation.navigate('Main', { name: 'Jane' })}>
                    <Text>Go to Main ML</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.homeTextMain}>  This is where you could use Machine Learning  to test photo performance!</Text>
            </View>
        </View>

        <View>
            <View>
                <TouchableOpacity style={styles.homeButtonMain} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} title="Go to Animation" onPress={() => navigation.navigate('Animation', { name: 'Jane' })}>
                    <Text>Go to Animation</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.homeTextMain}>  This is where you could use Test our Animation Screen!</Text>
            </View>
        </View>


        <View>
            <View>
                <TouchableOpacity style={styles.homeButtonMain} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} title="Go to Alert" onPress={() => navigation.navigate('Alert', { name: 'Jane' })}>
                    <Text>Go to Alert</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.homeTextMain}>   This is where you could use Test our Alert Screen!</Text>
            </View>
        </View>





    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTextMain: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#DDDDDD",
    textAlign: 'center',
    borderWidth: 5,
    lineHeight: 30,
    marginRight: 10,
    marginLeft: 10,

  },

  homeButtonMain:{
    alignItems: "center",
    backgroundColor: "#61dafb",
    padding: 10,
    marginTop: 10,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 140,
    marginRight: 140,
  },


});
