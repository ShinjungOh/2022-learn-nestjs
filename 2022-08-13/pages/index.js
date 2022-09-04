import styles from '../styles/Home.module.css'
import Link from 'next/link'

export async function getServerSideProps() {
    console.log('server');  // SSR 서버 사이드 렌더링

    return {
        props: {time: new Date().toISOString()}
    }
}

export default function Home({time}) {
    return (
        <>
            <h1 className={styles.title}>
                {time}
            </h1>
            <h1><Link href="/csr"><a>CSR</a></Link></h1>
            <h1><Link href="/ssg"><a>SSG</a></Link></h1>
            <h1><Link href="/isr"><a>ISR</a></Link></h1>
        </>
    );
}
