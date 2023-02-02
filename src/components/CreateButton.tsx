import styles from './CreateButton.module.css'
import { PlusCircle } from 'phosphor-react'

export function CreateButton() {
    return (
        <button type="submit" className={styles.createButton}>
            <strong>Criar</strong> <span><PlusCircle size={16}/></span>
        </button>
    );
}