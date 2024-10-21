import './BlogPost.css'; 

const BlogPost = ({ title, author, content, date }) => {
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author} on {formattedDate}</p>
      <p className="blog-content">{content}</p>
    </div>
  );
};

export default BlogPost;
