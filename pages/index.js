import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className='create-account-container'>
          <div className='heading-workspace'>
            <h1>Toucan</h1>
            <div className='heading-description'>Toucan streamlines literature review for high-performing teams</div>
          </div>
        </div>
        <div className='pages'>
          <div>
            <Link href="/pages/login">
              <a>Log in to account</a>
            </Link>
          </div>
          <div>
            <Link href="/pages/register">
              <a>Create account</a>
            </Link>
          </div>
          <div>
            <Link href="/pages/create-workspace">
              <a>Create workspace</a>
            </Link>
          </div>
          <div>
            <Link href="/pages/invite">
              <a>Invite people</a>
            </Link>
          </div>
          <div>
            <Link href="/settings/workspace">
              <a>Delete workspace</a>
            </Link>
          </div>
          <div>
            Delete team
          </div>
          <div> 
            <Link href="/settings/import-export">
              <a>Import and export</a>
            </Link>
            
          </div>
          <div> 
            Settings
          </div>
          <div>
            Workspace
            <ul>
              <li>Empty</li>
              <li>Onboarding</li>
            </ul>
          </div>
          <div>
            Create reference
            <ul>
              <li>In app</li>
              <li>Browser extension</li>
              <li>Slack</li>
              <li>Drag and drop</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            Edit reference
            <ul>
              <li>Archive</li>
              <li>Comment</li>
              <li>Add label</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}