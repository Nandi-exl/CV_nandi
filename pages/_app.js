// import '../styles/globals.css';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Header/navigationbar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <SSRProvider>
        <Head>
          <link rel='icon' href='/vercel.svg' />
        </Head>
        <NavigationBar />
        <main>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </SSRProvider>
    </div>
  );
}

export default MyApp;
