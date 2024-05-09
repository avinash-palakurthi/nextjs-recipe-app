import RecipeDetailsComponent from "@/components/recipedetailscomponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function fetchRecipeDetails(currentRecipeId) {
	try {
		const apiResponse = await fetch(
			`https://dummyjson.com/recipes/${currentRecipeId}`
		);
		const data = await apiResponse.json();

		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function RecipeDetailsPage({ params }) {
	const getRecipeDetails = await fetchRecipeDetails(params?.details);
	return (
		<div>
			<div className="max-w-4xl mx-auto  flex items-center justify-between mt-2">
				<h1 className="text-3xl text-red-600 bg-black px-4 rounded-lg">
					Recipe Details
				</h1>

				<Button>
					<Link href={"/recipelistpage"}>Back to recipes</Link>
				</Button>
			</div>
			{/* ----------------------- */}
			<RecipeDetailsComponent getRecipeDetails={getRecipeDetails} />
		</div>
	);
}

export default RecipeDetailsPage;
