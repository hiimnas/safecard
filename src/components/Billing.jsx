import React from 'react';
import styles, { layout } from '../style'

function Billing() {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src='./bill.png' alt='billing' className='w=[100%] h-[100%] relative' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white-gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your<br />billing and invoicing</h2>
        <p className={`${styles.paragraph} mt-5`}>Say goodbye to paper clutter and manual tracking of expenses. With Safecard, manage your billing and invoicing with ease, making it simple to monitor your spending and stay informed. Effortlessly track and manage your cards and wallets across 42 supported providers, with easy access to subscriptions and service charges, streamlining the entire process for you. It’s never been easier to keep track of your finances.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <a href='https://www.apple.com/app-store/' target='_blank'><img src='./apple.svg' alt='app store' className='h-[3rem] object-contain mr-5' /></a>
          <a href='https://play.google.com/store/' target='_blank'><img src='./google.svg' alt='play store' className='h-[3rem] object-contain' /></a>

        </div>
      </div>
    </section>
  )
}

export default Billing