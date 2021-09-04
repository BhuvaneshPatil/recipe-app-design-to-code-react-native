import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../components";
import { Home } from "../screens";
import { images, icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 0,
					right: 0,
					height: 75,
					borderTopColor: "transparent",
					backgroundColor: COLORS.white,
				},
			}}
		>
			<Tab.Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.home} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.search} />
					),
				}}
			/>
			<Tab.Screen
				name="Bookmark"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.bookmark} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.settings} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
