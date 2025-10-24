
import React from 'react';
import BlogArea from './BlogArea';
import CtaAbout from '../about/CtaAbout';
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb subtitle="Blogs" />
      <BlogArea />
      <CtaAbout />
      <FooterOne />
    </>
  );
};

export default Blog;