import Head from 'next/head'
import Header from 'components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{'>'} Oriol Bover 👨‍💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
