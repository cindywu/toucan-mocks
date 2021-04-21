import React from 'react'
import Layout from '../../components/layout'

export default function Login() {
  return (
    <>
      <Layout>
        <div className='invite-modal'>
          <div className="exit-invite-modal-button-container">
            <button className="btn exit-invite-modal">&times;</button>
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
      </Layout>
    </>
   
  )
}