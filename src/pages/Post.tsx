import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import '../styles/Post.css';

const Post = () => {
  let { postSlug } = useParams();

  const [body, setBody] = useState("body");

  useEffect(() => {
    fetch(`/content/${postSlug}.md`)
      .then(resp => resp.text())
      .then(content => {
        setBody(marked.parse(content));
      });
  }, [postSlug]);

  return (
    <div className="m-24 min-h-[50vh]">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }} id="postContent" />
    </div>
  );
}

export default Post;
