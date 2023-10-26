import React from "react";
import LiTask from "./LiTask";


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
        return taskArray.map((task) => <LiTask key={task.id} text={task.text} id={task.id} delCallback={(id) => this.sortTasks(id)} />)
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