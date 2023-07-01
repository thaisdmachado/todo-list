import { useState } from 'react';
import styles from './Sidebar.module.css'

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const Sidebar: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([
        {id: 1, text:"Minhas ideias", completed: false},
        {id: 2, text:"Receita de bolo", completed: false},
    ]);

    const handleToggle = (id:number) => {
        setTodos(
            todos.map((todo)=> {
                if(todo.id === id) {
                    return{...todo, completed: !todo.completed};
                }
                return todo;
            })
        );
    };
    return (
    <div className={styles.sidebar}>
        <h2>TODO LIST</h2>
        <ul>
            <button> + Adicionar</button>
            {todos.map((todo) => (
                <li key={todo.id} onClick={()=> handleToggle(todo.id)}>{todo.text}</li>
            ))}
        </ul>
    </div>
    );
  };
  
