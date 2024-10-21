import BlogPost from './BlogPost';
import './BlogPost.css'; 

const PostList = () => {
 
  const posts = [
    {
      title: 'Understanding React Hooks',
      author: 'Samuel Owase',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempora ab quia ipsa sit soluta corporis expedita aut veritatis, minima laudantium excepturi, deleniti ut magnam blanditiis quaerat nobis vitae! Excepturi.',
      date: '2024-10-01',
    },
    {
      title: 'JavaScript ES6 Features You Should Know',
      author: 'Kolawole Emmanuel',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempora ab quia ipsa sit soluta corporis expedita aut veritatis, minima laudantium excepturi, deleniti ut magnam blanditiis quaerat nobis vitae! Excepturi.',
      date: '2024-09-15',
    },
    {
      title: 'How to Write Clean Code',
      author: 'Olusola Johnson',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempora ab quia ipsa sit soluta corporis expedita aut veritatis, minima laudantium excepturi, deleniti ut magnam blanditiis quaerat nobis vitae! Excepturi.',
      date: '2024-08-28',
    },
  ];

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostList;
