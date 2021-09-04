import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	StatusBar,
} from "react-native";
import CustomButton from "../components/CustomButton";

import { images, icons, FONTS, COLORS, SIZES } from "../constants";
const Login = ({ navigation }) => {
	const renderHeader = () => {
		return (
			<View style={{ height: SIZES.height > 700 ? "65%" : "65%" }}>
				<ImageBackground
					source={images.loginBackground}
					style={{ flex: 1, justifyContent: "flex-end" }}
					resizeMode="cover"
				>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
						colors={[COLORS.transparent, COLORS.black]}
						style={{
							height: 200,
							justifyContent: "flex-end",
							paddingHorizontal: SIZES.padding,
						}}
					>
						<Text
							style={{
								width: "80%",
								...FONTS.largeTitle,
								color: COLORS.white,
								lineHeight: 45,
							}}
						>
							Cooking a delicious food easily
						</Text>
					</LinearGradient>
				</ImageBackground>
			</View>
		);
	};
	const renderDetails = () => {
		return (
			<View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
				{/* Description */}
				<Text
					style={{
						color: COLORS.gray,
						marginTop: SIZES.radius,
						width: "80%",
						...FONTS.body4,
					}}
				>
					Discover more than 1200 food recipes in your hands and
					cooking it easily!
				</Text>
				{/* Buttons */}
				<View style={{ marginTop: 25 }}>
					<CustomButton
						buttonText="Login"
						colors={[COLORS.darkGreen, COLORS.lime]}
						pressHandler={() => navigation.replace("Home")}
						buttonStyling={{
							paddingVertical: 18,
							borderRadius: 20,
						}}
					/>
					<CustomButton
						buttonText="Sign Up"
						buttonStyling={{
							marginTop: 15,
							paddingVertical: 18,
							borderRadius: 20,
							borderWidth: 1,
							borderColor: COLORS.darkLime,
						}}
						colors={[]}
						pressHandler={() => navigation.replace("Home")}
					/>
				</View>
			</View>
		);
	};
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.black }}>
			<StatusBar barStyle="light-content" />
			{/* Header */}
			{renderHeader()}
			{/* details */}
			{renderDetails()}
		</View>
	);
};

export default Login;
