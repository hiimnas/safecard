import React from 'react';
import { features } from '../const';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index != features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <i className={`${icon} h2 text-[#c5ebf3] mb-0`}></i>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-semibold text-white h5'>{title}</h4>
      <p className={`font-normal text-dimWhite`}>{content}</p>
    </div>
  </div>
)

function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className='display-3 font-semibold text-white mb-1'>You do you,<br className='sm:block hidden' /><span className='text-gradient'>we'll handle the money.</span></h2>
        <p className={`${styles.paragraph} my-3`}>At Safecard, we believe in simplifying the complexities of personal finance, allowing you to focus on what truly matters to you. With our innovative platform and intuitive tools, managing your money becomes effortless. With rewards, security and speed, we ensure you have the freedom to pursue your passions without worrying about financial hassles.</p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col justify-content-around`}>
        {features.map ((feature, index) => (
          <FeatureCard key={feature.id} {... feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business