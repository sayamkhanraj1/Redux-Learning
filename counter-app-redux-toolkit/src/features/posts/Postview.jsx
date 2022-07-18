import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";

const Postview = () => {
  const { loading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(fetchPosts())
  }, [dispatch])
  
  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Postview;
