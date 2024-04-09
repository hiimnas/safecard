import React from 'react';
import styles from '../style';

const Button = () => {
  return (
    <>
      <button type='button' className={`py-2 px-3 outline-none ${styles} font-medium text-[18px] btn btn-outline-light`} data-bs-toggle='modal' data-bs-target='#application'>Apply Now</button>

      <div class='modal fade ' id='application' tabindex='-1' aria-labelledby='application' aria-hidden='true'>
        <div class='modal-dialog '>
          <div class='modal-content bg-first text-white border border-light'>
            <div class='modal-header'>
              <h1 class='modal-title fs-5' id='applicationLabel'>Account Application</h1>
              <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
              ...
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' class='btn btn-info'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Button