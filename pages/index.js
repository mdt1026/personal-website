import Head from 'next/head';
import Link from 'next/link';

import { Navbar } from '@nextui-org/react';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar isBordered variant="static" containerCss={{ background: "$nord4" }}>
        <Navbar.Content activeColor="primary" enableCursorHighlight variant="underline">
          <Navbar.Link isActive href="/" >Home</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <b>Matt</b>.
          I'm a 3/4 Cybersecurity student studying at Stevens Institute of Technology.
          This site is current a <i>work-in-progress</i> project.
          Check out my{' '}
          <a href="https://matturner.com/github">GitHub</a> and{' '}
          <a href="https://matturner.com/linkedin">LinkedIn</a> profiles.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog [SAMPLE PAGES]</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
