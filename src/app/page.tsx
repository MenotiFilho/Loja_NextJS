"use client";
import ProductComponent from "@/components/ProductComponent";
import React from "react";
import { ThemeProvider } from "@primer/react";

function page() {
	return (
		<ThemeProvider>
			<div className="flex items-center justify-center">
				<ProductComponent />
			</div>
		</ThemeProvider>
	);
}

export default page;
