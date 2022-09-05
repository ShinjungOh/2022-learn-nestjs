import styles from '../../styles/Home.module.css'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

export async function getStaticProps() {
  console.log('server') // ISR incremental static regeneration : 정적 사이트에 데이터를 가져와서 다시 그린다. (SSG + SSR)

  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return <h1 className={styles.title}>{time}</h1>
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
