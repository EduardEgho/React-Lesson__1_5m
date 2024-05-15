import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PostPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://dummyjson.com/posts');
            setPosts(response.data.posts);
            console.log(response.data.posts);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <ol>
                    {posts.map((post) =>  <li key={post.id}>{post.title}</li>)}

                {/*{posts.map((post) => <li key={post.id}>{post.title}</li>)}*/}

            </ol>
        </div>
    );
}

export default PostPage;






