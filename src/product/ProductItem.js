import React from 'react';
import styled from 'styled-components';
import ScoreCircle from '../circle/Circle';

const ProductStyles = styled.div`/* giữ nguyên CSS bạn đã có */`;

const ProductItem = ({ name, imageTitle, reviewImage, score, grade, pros, cons, images, conclusion }) => {
  return (
    <ProductStyles>
      <div className='inner'>
        <div className='title'>
          <h1 className='contact-content'>{name}</h1>
          <img src={imageTitle} alt='' className='image-title' />
        </div>

        <div className='review'>
          <img src={reviewImage} alt='' className='image-review' />
          <div className='total-ranking-wrapper'>
            <ScoreCircle score={score} />
            <p className='product-title'>TOTAL RANKING</p>
          </div>
          <div>
            <p className='product-rank'>{grade}</p>
            <p className='product-title'>OVERALL GRADE</p>
          </div>
        </div>
      </div>

      <div className='mt-2 inner'>
        <div className='pros-cons'>
          <div>
            <h2 className='product-title-1'>PROS</h2>
            <div>
              {pros.map((pro, index) => (
                <p className='green-icon' key={index}>
                  <span>✔</span> {pro}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className='product-title-1'>CONS</h2>
            <div>
              {cons.map((con, index) => (
                <p className='red-icon' key={index}>
                  <span>✘</span> {con}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-2 inner'>
        <div className='content-wrapper'>
          <div className='flex flex-col items-center gap-y-5'>
            {images.map((src, index) => (
              <div className='w-[410px]' key={index}>
                <img src={src} alt='' className='image' />
              </div>
            ))}
          </div>
          <div className='p-10'>
            <h2 className='mb-5 product-title-1'>Conclusion</h2>
            {conclusion.map((text, index) => (
              <p className='text-content' key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </ProductStyles>
  );
};

export default ProductItem;
