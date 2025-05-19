
import React from 'react';
import Post from './Post';

const mockPosts = [
  {
    id: 1,
    author: {
      name: 'Emily Parker',
      role: 'Marketing Director at CreativeHub',
      avatar: 'EP',
    },
    timeAgo: '2h',
    content: 'Just wrapped up an amazing digital marketing conference! So many insights on the future of social media advertising and customer engagement strategies. Looking forward to implementing these ideas at CreativeHub. #DigitalMarketing #Innovation',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    likes: 84,
    comments: 17,
    shares: 5,
  },
  {
    id: 2,
    author: {
      name: 'David Wilson',
      role: 'Software Engineer at TechInnovate',
      avatar: 'DW',
    },
    timeAgo: '4h',
    content: 'Excited to announce that our team just released a major update to our platform! We\'ve completely redesigned the user interface and added several new features requested by our community. Check it out and let me know what you think!',
    likes: 132,
    comments: 43,
    shares: 12,
    isLiked: true,
  },
  {
    id: 3,
    author: {
      name: 'Sarah Johnson',
      role: 'HR Specialist | Talent Acquisition',
      avatar: 'SJ',
    },
    timeAgo: '8h',
    content: 'We\'re hiring! My team is looking for experienced UX/UI designers to join our growing product department. Remote positions available. DM me if you\'re interested or know someone who might be a good fit.',
    likes: 56,
    comments: 23,
    shares: 8,
  },
];

const PostFeed = () => {
  return (
    <div className="space-y-4">
      {mockPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
