
import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({subtitle}: any) => {
  return (
    <>
      <div style={{background: `url(/assets/img/about-page-title.jpg)`}} className="ak-bg">
        <div className="ak-height-100 ak-height-lg-100"></div>
        <div className="ak-height-125 ak-height-lg-40"></div>
        <div className="container">
            <div className="common-page-title">
                <h3 className="page-title">{subtitle}</h3>
                <div className="d-flex gap-2 align-items-center">
                    <Link href="/">Home</Link>
                    <p>/</p>
                    <p>{subtitle}</p> 
                </div>
            </div>
        </div>
        <div className="ak-height-100 ak-height-lg-100"></div>
    </div>
    </>
  );
};

export default Breadcrumb;