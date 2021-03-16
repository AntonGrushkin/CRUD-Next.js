import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="admin/crud"><a>Go to CRUD page</a></Link>
    </div>
  )
}
