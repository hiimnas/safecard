import React from 'react'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[345px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={`/quotes.svg`} alt='double quotes' className='w-[42px] h-[27px] object-contain' />
      <p className='lead text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={`/${img}`} alt={name} className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='lead font-semibold text-white'>{name}</h4>
          <p className='lead fs-6 text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard