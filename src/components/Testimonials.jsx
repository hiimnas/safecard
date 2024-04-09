import React from 'react';
import { feedback } from '../const';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

function Testimonials() {
  return (
    <section id='team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className={`absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue-gradient`} />
      <div className='w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>Meet our team</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left`}>Our team at Safecard is composed of highly skilled individuals with diverse backgrounds and expertise in finance, marketing, technology, product development and more. We are united by a common goal: to revolutionize the world of finance through a secure and convenient payment method that manages them all.</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      <div>
        <a href="#" role="button" class="btn btn-outline-dark bg-blue-gradient">View More</a>
      </div>
    </section>
  )
}

export default Testimonials