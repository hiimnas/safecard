import React from 'react';
import styles from '../style';
import GetStarted from './GetStarted';

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col justify-content-between ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 w-100'>
          <img src='Discount.svg' alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} mx-2`}>Enjoy <span className='text-white'>20%</span> Discount for <span className='text-white'>1 month</span> when joining us</p>
        </div>

        <div className='flex flex-row items-center'>
          <h1 className='font-semibold display-1 text-white mr-4'>The <span className='text-gradient'>Next <br className='sm:block hidden' /> Generation</span></h1>
          <div className='ss:flex hidden md:m-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        
        <h1 className='font-semibold display-2 text-white w-full'>Payment Method</h1>
        <p className={`${styles.paragraph} mt-5`}>Safecard redefines the landscape of secure and efficient financial transactions. Our cutting-edge technology allows users to consolidate all their payment methods into one, providing a seamless, convenient payment experience ontop of expert analytics and digital wallet integration. Say goodbye to carrying multiple credit and debit cards, and hello to a smarter, more secure way to pay.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 relative`} style={{width: 'fit-content' }}>
        <img src='/cardpromo.png' alt='robot card' className='relative z-[5] transition duration-1000 transform hover:scale-110' style={{width: 'calc(92% - 120px)'}} />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white-gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue-gradient' />

        <div className={`ss:hidden ${styles.flexCenter} mr-auto`}>
          <GetStarted />
        </div>
      </div>
    </section>
  )
}

export default Hero

