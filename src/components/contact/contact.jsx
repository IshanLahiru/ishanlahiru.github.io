import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import './style.css';

const Contact = () => {
   const { ref } = useParallax({ speed: 10 });
   return <div ref={ref} className="my-thing" />;
};

export default Contact;
