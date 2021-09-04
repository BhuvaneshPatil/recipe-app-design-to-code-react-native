import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Recipe } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Tabs from "./navigation/tabs";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});
	if (!loaded) {
		return (
			<View style={styles.container}>
				<Text>Loadig</Text>
			</View>
		);
	}
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="Login"
			>
				<Stack.Screen component={Login} name="Login" />
				<Stack.Screen component={Tabs} name="Home" />
				<Stack.Screen component={Recipe} name="Recipe" />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
