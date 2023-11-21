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
      <section className={utilStyles.heading1Xl}>
        // Cybersecurity Graduate at Stevens Institute of Technology //
      </section>
      <section className={utilStyles.headingMd}>
          Hi, my name is <b>Matt Turner</b>.
          I'm a 4/4 student currently studying for my Master's degree in Cybersecurity after earning my Bachelor's degree at Stevens Institute of Technology.
          This site is currently a <i>work-in-progress</i> project.
          Check out my
          <a href="https://matturner.com/github"> GitHub</a> and
          <a href="https://matturner.com/linkedin"> LinkedIn</a> profiles.
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>// RECENT PROJECTS //</h2>
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
}
