import Head from "next/head";
import { FC } from "react";
import { NavBar } from '../NavBar';

import styles from './MainLayout.module.css';

interface Props {
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact - Moises</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>

                {children}

            </main>
        </div>
    )
}
