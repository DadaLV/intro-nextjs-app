import styles from "../styles/home.module.css"
import Link from 'next/link'

export default async function Home() {
  return <div className={styles.home}>
    <div>
      <div>Hello, I'm Liubov Vynohradov</div>
      <div>
        <Link href="/blog">My blog</Link>
      </div>
      <div>
        <Link href="#"></Link>
      </div>
    </div>
  </div>
}
