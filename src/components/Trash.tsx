import { Trash } from 'phosphor-react';
import styles from './Trash.module.css'

export function DeleteInput({...props}) {
    
    return (
                <button 
                    className={styles.customButton}
                    title="Deletar tarefa"
                    {...props}
                >
                    <Trash size={24}/>
                </button>
    );
}