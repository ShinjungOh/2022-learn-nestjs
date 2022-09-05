import styles from '../../../../styles/Home.module.css'
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function MyInfo() {
    return (
        <>
            <h1 className={styles.title}>My Info</h1>
        </>
    )
}

MyInfo.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout>{page}</SubLayout>
        </Layout>
    )
}
