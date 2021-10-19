import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert'


export default function FirstPost() {
    return (
        <Layout>
        <Head>
        <title>First Post teste</title>
      </Head>
      <Alert type='error'>
          <p>Teste</p>
      </Alert>
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>

          {/* { Avatar1()  } */}
        </Layout>
      )
  }