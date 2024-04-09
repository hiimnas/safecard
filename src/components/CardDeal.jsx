import React from 'react';
import styles, {layout} from '../style';
import Button from './Button';

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className='display-4 font-semibold text-white'>Optimize Payments<br />in <span className='text-gradient'>a few easy steps</span>.</h2>
        <p className={`${styles.paragraph} mt-5 mb-3`}>Unleash the full potential of the way you pay. Sign up for Safecard and experience a new world of financial freedom and convenience. With a simple application, you too can experience the future of finance.</p>
        <Button />
      </div>
      <div className={layout.sectionImg}>
          <img src='/card.png' alt='card' className='w-100 h-100' />
        </div>
    </section>
  )
}

export default CardDeal