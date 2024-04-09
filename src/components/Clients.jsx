import React from 'react';
import {clients} from '../const';
import styles from '../style';

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4 w-full`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) =>
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={`/${client.logo}`} alt={client.logo} className='sm:w-[192px] w-[100px] object-contain opacity-[0.56] transition duration-1000 hover:opacity-[1]' />
          </div>
        )}
      </div>
    </section>
  )
}

export default Clients