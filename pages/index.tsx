import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, createContext } from 'react'
import useSound from 'use-sound'
import Card from '../components/card'

const Home: NextPage = () => {
  const [party, setParty] = useState(false)
  const Sound = "https://ia803206.us.archive.org/31/items/rick-astley-never-gonna-give-you-up/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp3"
  const [play] = useSound(Sound)
  if (party) {play()}

  return (
    <div className={` ${party ? "bg-rick" : "font-red-800"} absolute text-center flex pt-8 flex-col place-items-center w-screen h-screen`}>
      <Head>
        <title>Useless projects!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        className="font-bold text-6xl"
      >
        A collection of our useless projects
      </h1>
      <p className="text-xl">
        here&apos;s all of the totally useless things we decided to build, here at Assemble!
      </p>
      <button
      className="bg-red-800 p-4"
        onClick={() => setParty(true)}
      >
        ${`party || "disable party mode :(`}
      </button>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Home
