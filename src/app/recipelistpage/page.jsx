import RecipeListComponent from "@/components/recipelistcomponent";

//creating method for fetching recipe data
async function fetchListOfRecipes() {
	try {
		const apiResponse = await fetch("https://dummyjson.com/recipes");
		const data = await apiResponse.json();

		return data?.recipes;
	} catch (error) {
		throw new Error(error);
	}
}
const RecipePage = async () => {
	const recipeList = await fetchListOfRecipes();
	return (
		<div>
			<RecipeListComponent recipeList={recipeList} />
		</div>
	);
};

export default RecipePage;
