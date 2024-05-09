import Link from "next/link";
import React from "react";

const notfound = () => {
	return (
		<div className="flex items-center justify-center flex-col mt-10">
			<h1 className="text-9xl capitalize font-extrabold text-wrap text-center">
				page not found
			</h1>
			<button className="mt-20 underline text-3xl text-emerald-600">
				<Link href={"/"}>Back To Home</Link>
			</button>
		</div>
	);
};

export default notfound;
