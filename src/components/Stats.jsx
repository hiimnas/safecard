import React from 'react';
import { stats } from '../const';
import styles from '../style';

function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 w-100`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='h2 text-white'><b>{stat.value}</b></h4>
          <p className='h5 text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats