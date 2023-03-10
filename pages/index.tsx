import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Counter from "./Counter";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    //setCounter function
    const [counter, setCounter] = useState(false)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className="flex space-x-2 justify-center">
          <button type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => setCounter(!counter)}>
              {counter ? "Hide" : "Show"}
          </button>
          {counter && <Counter/>}
      </div>
    </div>
      </main>
    </>
  )
}
