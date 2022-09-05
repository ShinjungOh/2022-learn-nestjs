import styles from '../../../styles/Home.module.css'
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import {useRouter} from "next/router";
import Link from 'next/link';

export default function CartDateSlug() {
    const router = useRouter();
    const {date} = router.query;

    return (
        <>
            <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
            <Link href="/cart/2022/09/05"><a>2022년 9월 5일로</a></Link>
            <br/>
            <button onClick={() => router.push('/cart/2022/06/01')}>2022년 6월 1일로</button>
        </>
    )
}

CartDateSlug.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout>{page}</SubLayout>
        </Layout>
    )
}
