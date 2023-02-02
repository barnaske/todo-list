import styles from './Checkbox.module.css'


export function Checkbox({...props}) {
    return (
        <div className={styles.customCheckBox}>
            <input 
                type="checkbox" 
                name="isDone"
                id="isDone"
                {...props}
            />
            <label htmlFor="isDone"></label>
        </div>
    );
}