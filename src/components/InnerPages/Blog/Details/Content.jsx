import React from 'react';
//= Components
import Post from './Post';
import RecentPosts from './RecentPosts';
import Comments from './Comments';
import CommentsForm from './CommentsForm';

function Content() {
  return (
    <section className="blog section-padding pb-0">
      <Post />
      <RecentPosts />
      <Comments />
      <CommentsForm />
    </section>
  )
}

export default Content