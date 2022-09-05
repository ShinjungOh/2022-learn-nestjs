import styles from '../../../styles/Home.module.css'
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function CartDateSlug() {
    return (
        <>
            <h1 className={styles.title}>Cart Date Slug</h1>
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
