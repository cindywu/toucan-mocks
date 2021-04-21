import React from 'react'
import Layout from '../../components/layout'

export default function CreateWorkspace() {
  return (
    <>
      <Layout>
        <div className='create-account-container'>
          <div className='heading-workspace'>
            Create a new workspace
            <div className='heading-description'>Toucan streamlines literature review for high-performing teams</div>
          </div>
          <div className='form-container'>
            <p className='form-label'>Workspace name</p>
            <textarea placeholder="What do you call your organization?"></textarea>
          </div>
          <div className='form-container'>
            <p className='form-label'>Workspace URL</p>
            <textarea placeholder="http://toucan.app/url"></textarea>
          </div>
          <div>
            <button 
              className='btn btn--primary'
            >
              Create workspace
            </button>
          </div>
        </div>
      </Layout>
    </>
  )
}