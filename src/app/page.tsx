"use client";

import { useEffect, useState } from "react";
import blogsJSON from "../blogs.json";
import BlogsContainer from "@/components/BlogsContainer";
import { Blog, SearchAndFilterType } from "@/types/type";
import SearchAndFilter  from "@/components/SearchAndFilter";

export default function Home() {
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [searchAndFilters, setSearchAndFilters] = useState<SearchAndFilterType>({
		search: "",
		filter: ""
	})


	useEffect(() => {
		setBlogs(blogsJSON.blogs);
	}, []);

	return (
		<div id="homePage">
			<SearchAndFilter blogs={blogs} searchAndFilters={searchAndFilters} setSearchAndFilters={setSearchAndFilters} />
			<BlogsContainer blogs={blogs} searchAndFilters={searchAndFilters} />
		</div>
	);
}
