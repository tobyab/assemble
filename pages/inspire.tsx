import Head from 'next/head'
import styles from '../styles/Inspire.module.css'
import useSWR, { useSWRConfig } from "swr"
import fetcher from '../utils/fetch'

export default function Inspire() {
    const randInt = Math.floor(Math.random() * 5) + 1

    const { mutate } = useSWRConfig()
    const { data } = useSWR<{
        body?: string,
        author?: string
    }>("/api/quote" + fetcher)
    
    return (
        <div className="absolute">
            <div className={styles.content}>
                <img
                    className="h-screen w-screen"
                    src={`/bg/${randInt}.jpg`}
                />
                <div className="absolute top-32 pl-64">
                    {data ? (
                        <>
                            <h1 className="text-9xl font-bold text-white w-2/3">{data.body}</h1>
                            <p className="text-white text-2xl">- {data.author}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
