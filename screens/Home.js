import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	FlatList,
	TextInput,
	SafeAreaView,
} from "react-native";
import { CategoryCard, TrendingCard } from "../components";
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../constants";
const Home = ({ navigation }) => {
	function renderHeader() {
		return (
			<View
				style={{
					flexDirection: "row",
					marginHorizontal: 20,
					marginVertical: 20,
					alignItems: "center",
				}}
			>
				<View style={{ flex: 1 }}>
					<Text style={{ ...FONTS.h2, color: COLORS.darkLime }}>
						Hello Bhuvanesh,
					</Text>
					<Text style={{ ...FONTS.body5, color: COLORS.gray }}>
						What you want to cook today?
					</Text>
				</View>
				<Image
					source={images.UserProfile1}
					style={{ height: 40, width: 40, borderRadius: 40 }}
					resizeMode="cover"
				/>
			</View>
		);
	}
	function renderSearchBar() {
		return (
			<View
				style={{
					height: 50,
					flexDirection: "row",
					backgroundColor: COLORS.lightGray,
					alignItems: "center",
					borderRadius: SIZES.radius,
					marginHorizontal: 20,
					paddingHorizontal: SIZES.radius,
					marginBottom: 20,
				}}
			>
				<Image
					source={icons.search}
					style={{ height: 18, width: 18, tintColor: COLORS.gray }}
				/>
				<TextInput
					style={{
						marginLeft: SIZES.radius,
						...FONTS.body4,
						flex: 1,
					}}
					placeholderTextColor={COLORS.gray}
					placeholder="Search Recipes"
				/>
			</View>
		);
	}
	function renderSeeRecipeCard() {
		return (
			<View
				style={{
					flexDirection: "row",
					backgroundColor: COLORS.lightGreen,
					alignItems: "center",
					borderRadius: SIZES.radius,
					marginHorizontal: 20,
					paddingHorizontal: SIZES.radius,
					paddingVertical: 10,
					marginBottom: 20,
				}}
			>
				<Image
					source={images.recipe}
					style={{ height: 80, width: 80 }}
				/>
				<View style={{ marginLeft: 20 }}>
					<Text
						style={{
							width: "65%",
							color: COLORS.black,
							...FONTS.body5,
							lineHeight: 18,
							flex: 1,
						}}
					>
						You have 12 recipes that you haven't tried yet
					</Text>
					<TouchableOpacity>
						<Text
							style={{
								color: COLORS.darkLime,
								textDecorationLine: "underline",
								...FONTS.h4,
								fontSize: 13,
							}}
						>
							See Recipes
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	function renderTrendingRecipes() {
		return (
			<View
				style={{
					marginLeft: SIZES.padding,
					marginBottom: SIZES.padding,
				}}
			>
				<Text style={{ ...FONTS.h2, color: COLORS.blue }}>
					Trending Recipes
				</Text>
				<FlatList
					data={dummyData.trendingRecipes}
					keyExtractor={(item) => `${item.id}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => {
						return (
							<TrendingCard
								data={item}
								onPress={() =>
									navigation.navigate("Recipe", {
										data: item,
									})
								}
							/>
						);
					}}
					contentContainerStyle={{ marginVertical: 20 }}
				/>
				<Text style={{ ...FONTS.h2, color: COLORS.blue }}>
					Categories
				</Text>
			</View>
		);
	}
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.white }}>
			<FlatList
				data={dummyData.categories}
				keyExtractor={(item) => `${item.id}`}
				keyboardDismissMode="on-drag"
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{/* Header */}
						{renderHeader()}
						{/* Search Bar */}
						{renderSearchBar()}
						{/* See Recipe */}
						{renderSeeRecipeCard()}
						{/* Trending */}
						{renderTrendingRecipes()}
						{/* Category Header */}
					</View>
				}
				renderItem={({ item }) => {
					return (
						<CategoryCard
							data={item}
							onPress={() =>
								navigation.navigate("Recipe", { data: item })
							}
						/>
					);
				}}
				ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
			/>
		</View>
	);
};

export default Home;
