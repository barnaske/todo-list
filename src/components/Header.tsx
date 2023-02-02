import styles from './Header.module.css'

import toDoLogo from '../assets/ToDoListLogo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logotipo da ToDoList" />
        </header>
    );
}