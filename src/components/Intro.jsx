import React from 'react';

function Intro() {
  return (
    <section id='intro' className={`h-[60vw] w-100 p-0 m-0`}>
        <iframe 
        title='Intro'
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/eA_RCevaULI'
        frameBorder='0' 
        allowFullScreen
        />
    </section>
  )
}

export default Intro