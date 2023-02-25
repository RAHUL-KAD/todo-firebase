import Head from 'next/head'
import Image from 'next/image'
import LoginPage from '@/components/LoginPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginPage />
        <i className='fa-solid fa-dragon'></i>
      </main>
    </>
  )
}
