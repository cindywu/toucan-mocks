import React from 'react'
import Layout from '../../components/layout'

export default function Login() {
  return (
    <>
      <Layout>
        <div className='create-account-container'>
          <div className='heading'>Log in to Toucan</div>
          <div>
            <button 
              className='btn btn--primary'
            >
              Continue with Google
            </button>
          </div>
          <div>
            <button className='btn btn--secondary'>Continue with email</button>
          </div>
        </div>
      </Layout>
    </>
   
  )
}

