"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center flex-col gap-5">
			<div className="">
				<h1>Welcome To Recipe List</h1>
			</div>

			<div>
				<Button>
					<Link href={"/recipelistpage"}>Explore Recipes </Link>
				</Button>
			</div>
		</div>
	);
}
