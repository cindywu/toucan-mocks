import React, { useState } from 'react'
import Layout from '../../components/layout'

export default function Login() {
  const [ isOpen, setIsOpen ] = useState(true)

  const switchModal= () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Layout>
        { isOpen ? 
          <div className='invite-modal'>
            <div className="exit-invite-modal-button-container">
              <button 
                className="btn exit-invite-modal"
                onClick={switchModal}
              >&times;</button>
            </div>
            <div className='heading'>
              Invite people
              <div className='heading-description'>Invite people to collaborate in Toucan</div>
            </div> 
            <div className='form-container'>
              <textarea placeholder="name@company.com"></textarea>
            </div>
            <div className='form-container'>
              <textarea placeholder="name@company.com"></textarea>
            </div>
            <div className='form-container'>
              <textarea placeholder="name@company.com"></textarea>
            </div>
            <div className='heading-description'>
              <button className='btn btn--tertiary'>Add more +</button>
            </div>
            <button className="btn btn--primary">Invite</button>
          </div>
        : <div className='create-account-container'>
            <div 
              className="heading"
              onClick={switchModal}
            >
              + Invite people
            </div>
          </div>
        }
      </Layout>
    </>
   
  )
}