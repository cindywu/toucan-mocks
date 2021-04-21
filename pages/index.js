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
              <a>Login</a>
            </Link>
          </div>
          <div>
            <Link href="/pages/register">
              <a>Register</a>
            </Link>
          </div>
          <div>
            <Link href="/pages/create-workspace">
              <a>⚠️ Create workspace</a>
            </Link>
          </div>
          <div>
            <Link href="/pages/invite">
              <a>⚠️ Invite people</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}