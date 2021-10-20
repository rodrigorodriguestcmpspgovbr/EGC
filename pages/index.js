import Link from "next/link";
import Head from "next/head";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, getSortedPostsDataApi } from "../lib/posts";

// export async function getStaticProps() {
//   const allPostsData2 = getSortedPostsData()
//   return {
//     props: {
//       allPostsData2
//     }
//   }
// }

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  const menuData = await getSortedPostsDataApi();
  return {
    props: {
      allPostsData,
      menuData,
    },
  };
}

export default function HomePage({ allPostsData, menuData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <div>Welcome to Next.js!</div>
      <h1 className="title">
        Learn <a href="/posts/first-post">Next.js!</a>{" "}
        <Link href="/posts/first-post">
          <a>Next.js!</a>
        </Link>
      </h1>
    </Layout>
  );
}
