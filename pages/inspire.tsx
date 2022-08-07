import Head from 'next/head'
import styles from '../styles/Inspire.module.css'
import useSWR, { useSWRConfig } from "swr"
import fetcher from '../utils/fetch'
import prisma from '../utils/prisma'
import { useEffect, useState } from 'react'

interface Quote {
    body: string,
    author: string
}

export default function Inspire() {
    const randInt = Math.floor(Math.random() * 5) + 1
    const { data } = useSWR<Quote[]>("/api/quote", fetcher)
    const [item, setItem] = useState<Quote>()
    useEffect(()=>{
        if (!data) return
        setItem(data[Math.floor(Math.random()*data.length)])
    },[data])
    return (
        <div className="absolute">
            <div className={styles.content}>
                <img
                    className="h-screen w-screen"
                    src={`/bg/${randInt}.jpg`}
                />
                <div className="absolute top-32 pl-64">
                    {item ? (
                        <>
                            <h1 className="text-9xl font-bold text-white w-2/3">{item.body}</h1>
                            <p className="text-white text-2xl">- {item.author}</p>
                        </>
                    ) : (
                        null
                    )}
                </div>
            </div>
        </div>
    )
}
