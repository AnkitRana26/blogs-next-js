"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import blogsJSON from "../../blogs.json";
import { Blog } from "@/types/type";
import TagItem from "@/components/TagItem";
import Image from "next/image";

const BlogDescription = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogDetail, setBlogDetails] = useState<Blog>();
    const params : {blog : string} = useParams();

    const imageLoadHandler = () => {
        setIsLoading(false);
    }

    useEffect(() => {
        const title = params.blog?.split("-")?.join(" ");
        blogsJSON.blogs.forEach(e => {
            if (e?.title === title) setBlogDetails(e);
        })
    },[blogsJSON])

	return <div id="blogDescriptionContainer">
        <div id="blogDescriptionImageContainer">
            {isLoading && <div className="loaderDiv">
                    <div className="loader"></div>
            </div>}
            <img onLoad={imageLoadHandler} src={blogDetail?.image|| ""} alt={blogDetail?.title || ""}/>
        </div>
        <div id="descriptionTagsContainer">
            {
                blogDetail?.tags.map((tag, index) => {
                    return <TagItem key={`${blogDetail?.id}-${index}`} tagName={tag}/>
                })
            }
        </div>
        <div id="descriptionContent">
            {blogDetail?.content}
        </div>
    </div>;
};

export default BlogDescription;
