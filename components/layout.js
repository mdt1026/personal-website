import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from 'next/navbar';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = "Matthew Turner";
export const siteTitle = 'Matthew Turner';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm a cybersecurity student at Stevens Institute of Technology with interests in low-level programming and networks."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/$(encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="I'm a cybersecurity student at Stevens Institute of Technology with interests in low-level programming and networks." />
      </Head>
      <Navbar />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
