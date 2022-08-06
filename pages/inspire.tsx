import { query } from '../utils/model'
import Head from 'next/head'
import styles from '../styles/Inspire.module.css'

export default function Inspire() {
    const randInt = Math.floor(Math.random() * 5) + 1
    return (
        <div className="absolute">
            <div className={styles.content}>
                <img
                    className="h-screen w-screen"
                    src={`/bg/${randInt}.jpg`}
                />
                <div className="absolute top-32 pl-64">
                    <h1 className="text-9xl font-bold text-white w-2/3">"i hate this font."</h1>
                    <p className="text-white text-2xl">- Slack user</p>
                </div>
            </div>
        </div>
    )
}
