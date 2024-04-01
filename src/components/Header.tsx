import styles from './Header.module.css'
import igniteLogo from "../assets/Ignite simbol.svg"
// interface ButtonProps {
//     color?: 'primary' | 'secondary' | 'danger' | 'success' | 'neutral';
// }

export function Header() {
    return (
        <>
        <strong className={styles.header}>
            <img src={igniteLogo} alt='Logo do Ignite'>
            </img>
        </strong>
        </>
    )
}