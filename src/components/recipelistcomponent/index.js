import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function RecipeListComponent({ recipeList }) {
	return (
		<div>
			<div className="sm:max-w-full md:max-w-4xl lg:max-w-6xl p-4 mx-auto">
				<h2 className="text-4xl font-bold text-gray-600 mb-12">Recipes</h2>
				<Button className="mb-5">
					<Link href={"/"}>Back To Home</Link>
				</Button>
				<div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{recipeList && recipeList.length > 0
						? recipeList.map((recipe) => (
								<Link href={`/recipelistpage/${recipe.id}`}>
									<Card>
										<CardContent className="bg-white rounded-md overflow-hidden shadow-lg shadow-slate-600 cursor-pointer hover:scale-[1.1] duration-700 transition-all ">
											<div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
												<img
													src={recipe.image}
													alt="image"
													className="w-full h-full object-cover object-top"
												/>
											</div>
											<div className="p-6 text-center ">
												<h3>{recipe.name}</h3>
												<div className="flex items-center justify-between ">
													<p className="font-bold text-gray-500 flex gap-2 items-center justify-center bg-black px-4 rounded-lg">
														Rating:{""}
														<span className="text-emerald-600">
															{recipe.rating}
														</span>
													</p>
													<p className="font-bold text-gray-500 flex gap-2 items-center justify-center bg-black px-4 rounded-lg">
														Origin:
														<span>{recipe.cuisine}</span>
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
						  ))
						: null}
				</div>
			</div>
		</div>
	);
}

export default RecipeListComponent;
