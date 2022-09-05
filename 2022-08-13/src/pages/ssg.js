import styles from '../../styles/Home.module.css'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

export async function getStaticProps() {
  console.log('server') // SSG static site generation : 정적인 사이트를 그려둔다. 서버 부하를 줄임. build 필요

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function SSG({ time }) {
  return <h1 className={styles.title}>{time}</h1>
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
