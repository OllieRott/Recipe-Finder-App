import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
	const [userRecipeChoice, setUserRecipeChoice] = useState();
	return (
		<Box backgroundColor={"blue.500"} textAlign={"center"} p={8}>
			{userRecipeChoice ? (
				<RecipeChoice recipe={userRecipeChoice} onClick={setUserRecipeChoice} />
			) : (
				<>
					<Heading
						fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
						color={"whiteAlpha.800"}
					>
						Recipe Finder
					</Heading>
					<RecipeSearch onSearch={setUserRecipeChoice} />
				</>
			)}
		</Box>
	);
};
