import React from 'react';
import './Comment.css'

const Comment = () => {
    const handleComment = () =>{
        
    }
    return (
        <div className='comment'>
       <form onSubmit={handleComment}>
       <input type="text" />
       <input type="submit" value="Give your comment" />
       </form>
        </div>
    );
};

export default Comment;