import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from './BlogData.js'
const BlogPage = () => {
    return (
        <>
            <h1>Blog</h1>
            <Outlet />
            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))}
            </ul>

        </>
    );
};

const BlogLink = ({ post }) => {

    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}



export { BlogPage };