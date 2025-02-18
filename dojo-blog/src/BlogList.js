import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // These lines are commented because  line above
  // Instead of using BlogList = (props) => ...
  // we opted to destucture directly into the props object received...
  // we are using BlogList = ({blogs, title}) => ... and it works the same as
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
