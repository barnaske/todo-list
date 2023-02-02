import { Checkbox } from './Checkbox';
import styles from './Task.module.css'
import { DeleteInput } from './Trash';
import App from '../App';

interface TaskProps {
    id: string;
    content: string;
    isDone: boolean;
    onMarkAsDone: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({id, content, isDone, onMarkAsDone, onDeleteTask}: TaskProps) {
    
    function handleSetDone() {
        onMarkAsDone(id)
    }

    function handleDeleteTask() {
        onDeleteTask(id)
    }
    
    return (
        <div 
            id={'div_' + id}
            className={styles.taskBody}
        >
            <Checkbox 
                key={id}
                checked={isDone}
                readOnly
            />
            <p onClick={handleSetDone} className={isDone ? styles.doneText : styles.notDoneText}>{content}</p>
            <DeleteInput onClick={handleDeleteTask}/>
        </div>
    );
}

