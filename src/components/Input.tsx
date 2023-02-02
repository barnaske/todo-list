import styles from './Input.module.css'



export function Input({...props}){
    return (
        <input
            className={styles.input} 
            type="textarea"
            name="newTask" 
            id="newTask" 
            placeholder="Adicione uma nova tarefa"
            required={true}
            {...props}
        />
    );
}