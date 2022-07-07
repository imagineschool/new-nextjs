import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Info() {
  return (
    <div className={styles.container}>
      <h1>Info</h1>

      <hr></hr>

      
        <Link href='/'>
          Home
        </Link>
      
    </div>
  )
}