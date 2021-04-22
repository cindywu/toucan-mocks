import React from 'react'
import Layout from '../../components/layout'

export default function Login() {
  return (
    <>
      <Layout>
        <div className='create-account-container'>
          <div className='heading'>
            Settings › Import and export
          </div>
          <div className='settings-subheading'>
              Import references
          </div>

          <div>
            <button 
              className='btn btn--primary'
            >
              Import
            </button>
          </div>
          <hr />
          <div className='settings-subheading'>
            Export references
          </div>
          <div>
            <button 
              className='btn btn--primary'
            >
              Export
            </button>
          </div>
        </div>
      </Layout>
    </>
  )
}
