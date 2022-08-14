import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    console.log('server');  // ISR incremental static regeneration : 정적 사이트에 데이터를 가져와서 다시 그린다. (SSG + SSR)

    return {
        props: {time: new Date().toISOString()},
        revalidate: 1,
    }
}

export default function ISR({time}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {time}
                </h1>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
