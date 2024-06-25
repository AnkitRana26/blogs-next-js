import { Blog } from "@/types/type";
import Image from "next/image";
import React, { useState } from "react";
import TagItem from "./TagItem";
import { useRouter } from "next/navigation";

const BlogItem = ({ blogDetails }: { blogDetails: Blog }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const imageLoadHandler = () => {
        setIsLoading(false);
    }

    const clickHandler = () => {
        const param = blogDetails.title.split(" ").join("-");
        router.push(`/${param}`)
    }


	return <div className="blogItem">
        <div className="blogItemImageContainer">
            {isLoading && <div className="loaderDiv">
                    <div className="loader"></div>
            </div>}
            <img onLoad={imageLoadHandler} src={blogDetails.image} alt={blogDetails.title}/>
        </div>
        <h3 className="blotItemTitle">{blogDetails.title}</h3>
        <div className="tagsContainer">
            {
                blogDetails.tags.map((tag, index) => {
                    return <TagItem key={`${blogDetails.id}-${index}`} tagName={tag}/>
                })
            }
        </div>
        <button onClick={clickHandler} className="blogItemButton">Read More</button>
    </div>;
};

export default BlogItem;
