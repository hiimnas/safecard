import React from 'react';
import styles from '../style';
import { footerLinks, socialMedia } from '../const';

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col w-100 px-[3vw] pb-0`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-col justify-start mr-auto w-[fit-content]'>
          <a href='./'>
            <img src='./logo.png' alt='safecard' className='h-[72px] w-[fit-content] object-contain' />
          </a>
          <p className={`${styles.paragraph} mt-4 max-w-[310px] italic`}>
            A new way to make the payments easy, reliable and secure.
          </p>
          <p className={`${styles.paragraph} mt-2 max-w-[310px]`}>
            2024 Safecard. All Rights Reserved.
          </p>
          <div className='flex flex-row md:mt-0 mt-2 justify-center'>
            {socialMedia.map((social, index) => (
              <a href={social.link} className='text-white hover:!text-second' target='_blank'>
                <i key={social.id} className={`${social.icon} lead ${index != socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className='flex-[1.5] w-100 flex flex-row justify-between flex-wrap md:mt-0 mt-10 ml-3 px-3 md:border-l border-white'>
          {footerLinks.map((ftlink) => (
            <div key={ftlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-medium text-white h5'>{ftlink.title}</h4>
              <ul className='list-none mt-1'>
                {ftlink.links.map((link, index) => (
                  <li key={link.name} className={`${styles.paragraph} text-dimWhite ${index != ftlink.links.length - 1 ? 'mb-1' : 'mb-0'}`}>
                    <a href={link.link} className='hover:text-second'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul> 
            </div>
          ))}
        </div>
      </div>
      <div className='w-100 text-center'>
        <hr className='text-white' />
        <p className='lead text-white my-3'>© nas 🍵 Safecard original website idea coded using <a href='https://react.dev/' className='text-primary font-bold' target='_blank'>React</a>, <a href='https://en.wikipedia.org/wiki/HTML' className='text-primary font-bold' target='_blank'>HTML</a> and <a href='https://en.wikipedia.org/wiki/CSS' className='text-primary font-bold' target='_blank'>CSS</a>.</p>
      </div>
    </section>
  )
}

export default Footer