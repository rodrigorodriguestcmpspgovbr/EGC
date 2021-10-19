import Link from 'next/link'
import Head from 'next/head'
import Alert from '../../components/alert'


export default function TesteIndex() {
    return (
        <>
        <Head>
        <title>Post teste</title>
      </Head>
      <Alert type='success'>
          <p>Teste</p>
      </Alert>
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
          </>
      )
  }