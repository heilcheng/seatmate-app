import Head from 'next/head'
import SeatMateSelection from '../components/SeatMateSelection'

export default function Home() {
  return (
    <>
      <Head>
        <title>SeatMate.ai</title>
        <meta name="description" content="Find your perfect seatmate for your next flight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SeatMateSelection />
      </main>
    </>
  )
}