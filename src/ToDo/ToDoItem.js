import React, {useContext} from 'react'
import Context from "../context";
import PropTypes from 'prop-types'
const styles = {
    li: {
    display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pudding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

 function ToDoItem ({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
     if (todo.completed === true) {
         classes.push('done')
     }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" style={styles.input} onChange={() => onChange(todo.id)} checked={todo.completed}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
        <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}
ToDoItem.propTypes = {
     todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem