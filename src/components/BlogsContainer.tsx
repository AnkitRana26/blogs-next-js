import { Blog, SearchAndFilterType } from "@/types/type";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

interface props {
	blogs: Blog[];
	searchAndFilters: SearchAndFilterType;
}

const BlogsContainer = ({ blogs, searchAndFilters }: props) => {

  const [tempBlogs, setTempBlogs] = useState<Blog[]>([]);

	useEffect(() => {
    const searchedData = blogs.filter(blog => {
      return !searchAndFilters.search ? true : blog.title.toLowerCase().includes(searchAndFilters.search?.toLowerCase());
    } )

    const filteredData = searchedData.filter(blog => {
      return !searchAndFilters.filter ? true : blog.tags.includes(searchAndFilters.filter?.toLowerCase());
    } )

    console.log(searchAndFilters, filteredData, searchedData, blogs)
    setTempBlogs(filteredData);
  }, [searchAndFilters, blogs]);

	return (
		<div id='blogsContainer'>
			{tempBlogs.map((blog) => {
				return <BlogItem key={blog.id} blogDetails={blog} />;
			})}
		</div>
	);
};

export default BlogsContainer;
