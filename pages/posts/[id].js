import Head from 'next/head';

import Date from '../../components/date';
import Layout from '../../components/layout';

import { Navbar } from '@nextui-org/react';

import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar isBordered variant="static" containerCss={{ background: "$nord4" }}>
          <Navbar.Content activeColor="primary" enableCursorHighlight variant="underline">
            <Navbar.Link href="/" >Home</Navbar.Link>
          </Navbar.Content>
      </Navbar>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
