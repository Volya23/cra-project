import React from "react";


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            taskArray: [ //todoList
                {
                    id: 1,
                    text: "go to party"
                },
                {
                    id: 2,
                    text: "meet friends"
                 },
                 {
                    id: 3,
                    text: "have a walk"
                 }
             ]
        }
    }

    sortTasks(taskIDDel) {
        const {taskArray} = this.state;
        const filterArray = taskArray.filter((task) => task.id !== taskIDDel);
        this.setState({
            taskArray: filterArray
        });
    }


    taskToDo() { //renderLi
        const {taskArray} = this.state;
        return taskArray.map((task) =>
            <li key={task.id}>
            {task.text}
            <button onClick={() => {this.sortTasks(task.id)}}>x</button>
            </li>
        )
    }

    render() {
        return(
            <>
            <h1>TO DO LIST</h1>

                <ul>
                    {this.taskToDo()}
                </ul>
            </>
          
        )
    }
    
}

export default ToDoList;