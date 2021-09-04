import React, { useRef } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	Platform,
	FlatList,
	Image,
} from "react-native";
import { ViewersList } from "../components";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HEADER_HEGHT = 350;

const RecipeCreatorCardInfo = ({ data }) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.transparentGray,
				borderRadius: SIZES.radius,
				flexDirection: "row",
				alignItems: "center",
				paddingHorizontal: SIZES.radius,
			}}
		>
			<Image
				source={data.author.profilePic}
				style={{ height: 50, width: 50, borderRadius: 50 }}
			/>
			<View
				style={{
					flex: 1,
					justifyContent: "flex-start",
					marginLeft: 20,
				}}
			>
				<Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>
					Recipe By
				</Text>
				<Text
					style={{
						...FONTS.h3,
						color: COLORS.white2,
						alignContent: "flex-start",
					}}
				>
					{data.author.name}
				</Text>
			</View>
			<TouchableOpacity
				style={{
					borderColor: COLORS.lightGreen1,
					borderWidth: 1,
					height: 30,
					width: 30,
					borderRadius: 5,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={icons.rightArrow}
					style={{
						height: 15,
						width: 15,
						tintColor: COLORS.lightGreen,
					}}
				/>
			</TouchableOpacity>
		</View>
	);
};

const Recipe = ({ navigation, route }) => {
	const { data } = route.params;
	const scrollY = useRef(new Animated.Value(0)).current;
	function renderRecipeCardHeader() {
		return (
			<View
				style={{
					alignItems: "center",
					overflow: "hidden",
					marginTop: -1000,
					paddingTop: 1000,
				}}
			>
				{/* Background Image */}
				<Animated.Image
					source={data.image}
					resizeMode="contain"
					style={{
						height: HEADER_HEGHT,
						width: "200%",
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [
										-HEADER_HEGHT,
										0,
										HEADER_HEGHT,
									],
									outputRange: [
										HEADER_HEGHT / 2,
										0,
										HEADER_HEGHT * 0.75,
									],
								}),
							},
							{
								scale: scrollY.interpolate({
									inputRange: [
										-HEADER_HEGHT,
										0,
										HEADER_HEGHT,
									],
									outputRange: [2, 1, 0.75],
								}),
							},
						],
					}}
				/>
				{/* Recipe Creator Card */}
				<Animated.View
					style={{
						position: "absolute",
						bottom: 15,
						left: 20,
						right: 20,
						height: 80,
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [0, 170, 350],
									outputRange: [0, 0, 100],
									extrapolate: "clamp",
								}),
							},
						],
					}}
				>
					<RecipeCreatorCardInfo data={data} />
				</Animated.View>
			</View>
		);
	}
	function renderHeaderBar() {
		return (
			<View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 75,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: SIZES.padding,
				}}
			>
				<Animated.View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: COLORS.transparentBlack9,
						opacity: scrollY.interpolate({
							inputRange: [HEADER_HEGHT - 100, HEADER_HEGHT - 70],
							outputRange: [0, 1],
						}),
					}}
				/>
				{/* Title */}
				<Animated.View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						alignItems: "center",
						justifyContent: "flex-end",
						paddingBottom: 10,
						opacity: scrollY.interpolate({
							inputRange: [HEADER_HEGHT - 100, HEADER_HEGHT - 70],
							outputRange: [0, 1],
						}),
						transform: [
							{
								translateY: scrollY.interpolate({
									inputRange: [
										HEADER_HEGHT - 100,
										HEADER_HEGHT - 50,
									],
									outputRange: [100, 0],
									extrapolate: "clamp",
								}),
							},
						],
					}}
				>
					<Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>
						Recipe By
					</Text>
					<Text
						style={{
							...FONTS.h3,
							color: COLORS.white2,
							alignContent: "flex-start",
						}}
					>
						{data.author.name}
					</Text>
				</Animated.View>
				<TouchableOpacity
					style={{
						height: 35,
						width: 35,
						borderColor: COLORS.lightGray,
						backgroundColor: COLORS.transparentBlack5,
						borderWidth: 1,
						borderRadius: 18,
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => navigation.goBack()}
					activeOpacity={0.75}
				>
					<Image
						source={icons.back}
						resizeMode="contain"
						style={{
							height: 15,
							width: 15,
							tintColor: COLORS.lightGreen1,
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity>
					<Image
						resizeMode="contain"
						source={
							data.isBookmark
								? icons.bookmarkFilled
								: icons.bookmark
						}
						style={{
							tintColor: COLORS.lime,
							height: 22,
							width: 22,
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
	function renderRecipeInfo() {
		return (
			<View
				style={{
					marginHorizontal: SIZES.padding,
					paddingVertical: 20,
					flexDirection: "row",
				}}
			>
				<View style={{ flex: 1.5 }}>
					<Text
						style={{
							color: COLORS.blue,
							fontSize: 15,
							...FONTS.h2,
						}}
					>
						{data.name}
					</Text>
					<Text
						style={{
							...FONTS.body5,
							color: COLORS.lightGray2,
							fontSize: 11,
						}}
					>{`${data.duration} | ${data.serving} Serving`}</Text>
				</View>
				{/* Avatars */}
				<View
					style={{
						flex: 1,
						alignItems: "flex-end",
						justifyContent: "flex-start",
					}}
				>
					{data.viewers.length ? (
						<View>
							<ViewersList allViews={data.viewers} />
							<Text
								style={{
									...FONTS.body5,
									color: COLORS.lightGray2,
									lineHeight: 18,
									textAlign: "right",
									marginTop: 10,
								}}
							>
								{`${data.viewers.length}+ have \nAlready try ${data.category}`}
							</Text>
						</View>
					) : (
						<Text
							style={{
								...FONTS.body5,
								color: COLORS.lightGray2,
								lineHeight: 18,
								textAlign: "center",
							}}
						>
							☹️ We have no viewers till now for this recipe
						</Text>
					)}
				</View>
			</View>
		);
	}
	function renderIngredientHeader() {
		return (
			<View
				style={{
					flexDirection: "row",
					paddingHorizontal: 30,
					marginBottom: SIZES.padding,
				}}
			>
				<Text style={{ ...FONTS.h3, flex: 1 }}>Ingredients</Text>
				<Text
					style={{ ...FONTS.body5, color: COLORS.lightGray2 }}
				>{`${data.ingredients.length} items`}</Text>
			</View>
		);
	}
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
			}}
		>
			<Animated.FlatList
				data={data.ingredients}
				keyExtractor={(item) => `${item.id}`}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={18}
				bounces={false}
				onScroll={Animated.event(
					[
						{
							nativeEvent: { contentOffset: { y: scrollY } },
						},
					],
					{ useNativeDriver: true }
				)}
				contentContainerStyle={{
					paddingBottom: 40,
				}}
				ListHeaderComponent={
					<View>
						{/* Header */}
						{renderRecipeCardHeader()}
						{/* render recipe info */}
						{renderRecipeInfo()}
						{/* Ingredient Header */}
						{renderIngredientHeader()}
					</View>
				}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingHorizontal: SIZES.padding,
								paddingVertical: SIZES.radius,
								marginVertical: 10,
								marginHorizontal: SIZES.padding,
								borderRadius: SIZES.radius,
								backgroundColor: COLORS.lightGray,
							}}
						>
							<Image
								source={item.icon}
								style={{ height: 30, width: 30 }}
							/>
							<Text
								style={{
									flex: 1,
									marginLeft: 20,
									...FONTS.body5,
									color: COLORS.blue,
								}}
							>
								{item.description}
							</Text>
							<Text
								style={{ ...FONTS.body5, color: COLORS.blue }}
							>
								{item.quantity}
							</Text>
						</View>
					);
				}}
			/>
			{renderHeaderBar()}
		</View>
	);
};

export default Recipe;
