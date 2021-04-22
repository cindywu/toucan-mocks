import React from 'react'
import Layout from '../../components/layout'

export default function Login() {
  return (
    <>
      <Layout>
        <div className='create-account-container'>
          <div className='heading'>
            Settings › Workspace
          </div>
          <div className='settings-subheading'>
              Manage your workspace settings
          </div>
          <div className='form-container'>
            <p className='form-label'>Workspace name</p>
            <textarea>Protocol Labs</textarea>
          </div>
          <div className='form-container'>
            <p className='form-label'>Workspace URL</p>
            <textarea>http://toucan.app/protocol-labs</textarea>
          </div>
          <div>
            <button 
              className='btn btn--primary'
            >
              Update
            </button>
          </div>
          <hr />
          <div className='settings-subheading'>
            Delete workspace
          </div>
          <div>
            <button className='btn btn--danger'>Delete workspace</button>
          </div>
        </div>
      </Layout>
    </>
  )
}
