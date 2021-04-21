import React from 'react'
import Layout from '../../components/layout'

export default function Register() {
  return (
    <>
      <Layout>
        <div className='create-account-container'>
          <div className='heading'>Create your Toucan account</div>
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
