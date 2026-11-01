import React from 'react';

// 1. Fetch data based on the dynamic ID from the URL
export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    
    return { props: { post: data } };
}

// 2. Render the fetched data
export default function DynamicSSRPage({ post }) {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Server-Side Rendered Post (Dynamic)</h1>
            <p><strong>Post ID:</strong> {post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}