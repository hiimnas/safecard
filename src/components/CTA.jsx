import React from 'react';
import styles from '../style';
import GetStarted from './GetStarted';

function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] w-100`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try Safecard now!</h2>
        <p className={`${styles.paragraph} max-w-[480px]`}>Everything you need to spend, save and manage your money across different platforms, <b>in one</b>.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default CTA