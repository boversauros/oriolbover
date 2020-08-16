import Head from 'next/head'
import Header from 'components/Header'
import Introduction from 'components/Introduction'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{'>'} Oriol Bover 👨‍💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="content">
        <Introduction />
      </main>
    </div>
  )
}
