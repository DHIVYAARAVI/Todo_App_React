import React, {useEffect, useState} from 'react'
import './todo_list.css'
import CreateTask from '../modals/CreateTask'
import Cards from './Cards';

export default function Todo_List() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const toggle = () => setModal(!modal);

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const taskDelete = (index) =>{
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    return (
        <div>
            <div className="header">
                <h1 className="title">Todo List</h1>
                <button className="task_btn" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="task_container">
                {
                    taskList.map((obj, index) => <Cards taskObj={obj} index={index} taskDelete= {taskDelete} 
                    updateListArray={updateListArray} />)
                }
            </div>
            <CreateTask toggle={toggle} modal={modal} save = {saveTask}/>
        </div>
    )
}
