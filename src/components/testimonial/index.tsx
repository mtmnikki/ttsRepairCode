import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import TestimonialHomeOne from '../homes/home/TestimonialHomeOne';

const Testimonial = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb subtitle="Testimonial" />
      <TestimonialHomeOne />
      <FooterOne />
    </>
  );
};

export default Testimonial;