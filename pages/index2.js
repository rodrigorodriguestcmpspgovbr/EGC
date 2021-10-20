import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData ,getSortedPostsDataApi,getSortedPostsDataApi2 } from '../lib/posts'


// export async function getStaticProps() {
//   const allPostsData2 = getSortedPostsData()
//   return {
//     props: {
//       allPostsData2
//     }
//   }
// }

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  const menuData = await getSortedPostsDataApi()
  return {
    props: {
      allPostsData,
      menuData
    }
  }
}

export default function HomePage({ allPostsData ,menuData }) {
    return (
    <Layout home>

<Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>



    <div>Welcome to Next.js!</div>
      <h1 className="title">

        Learn <a  href="/posts/first-post">Next.js!</a>
        {' '}
        <Link href="/posts/first-post">
              <a>Next.js!</a>
            </Link>
    </h1>

    <h1 className="title">
    Read{' '}
    <Link href="/posts/first-post">
      <a>this page!</a>
    </Link>
    </h1>


    <Link href="/">
      <a className="foo" target="_blank" rel="noopener noreferrer">
        Hello World com link
      </a>
    </Link>

    <img src="/images/profile.jpg" alt="Your Name" />

    <Link href="/posts/imagemteste">
              <a>Ver imagem!</a>
            </Link>


  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              <Link href={`/posts/${id}`}>
              <a>{id}</a>
            </Link>
        
              <br />
              <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
          {menuData.map(({ id, url, texto }) => (
            <li className={utilStyles.listItem} key={id}>
              {texto}
              <br />
              <Link href={url}>
              <a>{id}</a>
            </Link>
        
              <br />
            
            </li>
          ))}
        </ul>
      </section>
            </Layout>)
  }
  
