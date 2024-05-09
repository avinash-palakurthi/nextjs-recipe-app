function RecipeDetailsComponent({ getRecipeDetails }) {
	return (
		<div>
			<div className="p-5 lg:max-w-6xl max-w-2xl mx-auto bg-slate-950 mt-5">
				<div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="w-full lg:sticky top-0 sm:flex gap-2">
						<img
							src={getRecipeDetails?.image}
							alt="image"
							name={getRecipeDetails?.name}
							className="w-4/5 rounded-2xl object-cover"
						/>
					</div>
					<div className="flex  flex-col items-center gap-8">
						<h2 className="text-5xl font-bold text-teal-600">
							{getRecipeDetails?.name}
						</h2>
						<div>
							<p className="font-semibold text-3xl text-rose-600 ">
								{getRecipeDetails?.mealType[0]}
							</p>
						</div>
						<div className="text-white">
							<h2 className="text-3xl uppercase">ingredients</h2>
							<ul>
								{getRecipeDetails?.ingredients.map((item) => (
									<li className="text-amber-600 text-wrap ">{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetailsComponent;
