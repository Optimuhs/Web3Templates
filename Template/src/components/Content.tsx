import styles from '@/styles/Home.module.css';
import MintButton from "./MintButton"
export default function Content() {
    return (
        <main className={styles.main}>
            <section className={styles.projTitle}>
                <div>
                    <h1>THIS IS A PROJECT TITLE</h1>
                </div>
            </section>
            <section className={styles.content}>
                <div>
                    <h4 className={styles.subtitle}> This is some mint info for our project!</h4>
                </div>
                <div>
                    <ul>
                        <li>Info number 1 for some info reason</li>
                        <li>Info number 2 for some info reason, except this one has a bit more text</li>
                        <li>Info number 3 for some info reason, except this one has a lot more text to represent some change
                            in resoning or explanation sizing.
                        </li>
                    </ul>
                </div>
            </section>
            <MintButton/>
        </main>
    )
}