import React from 'react';
import styles from '../style';

const GetStarted = () => {
  return (
    <a role='button' href='#intro' className={`btn btn-outline-info ${styles.flexCenter} w-[7rem] h-[7rem] rounded-full p-[2px]`}>
      <div className={`${styles.flexCenter} flex-col bg-first w-100 h-100 rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-medium text-[18px] leading-[23px] text-gradient'>Get <i className='bi bi-box-arrow-up-right p-[2px]' style={{background: 'white', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i><br /> Started</p>
        </div>
      </div>
    </a>
  )
}

export default GetStarted