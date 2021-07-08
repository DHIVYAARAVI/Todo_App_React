import React, {useState} from 'react'
import './cards.css'
import EditTask from '../modals/EditTask'

export default function Cards({taskObj, index, taskDelete, updateListArray}) {
    const [modal, setModal] = useState(false)
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleDelete = () => {
        taskDelete(index)
    }

    const toggle = () => setModal(!modal)

    const updateTask = (obj) =>{
        updateListArray(obj, index)
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-3">{taskObj.Name}</h4>
                <p className="card-text" style={{height: "75%"}}>{taskObj.Description}</p>
            </div>
            <div className="font_awesome">
                <i class="fa fa-edit" style={{fontSize: "24px", marginRight: "10px", color: "red" , cursor: "pointer" }}
                onClick={() => setModal(true)}></i>
                <i class="fa fa-trash-o" style={{fontSize: "24px", cursor: "pointer"}} onClick={handleDelete}></i>
            </div>
            <EditTask modal={modal} toggle={toggle} taskObj={taskObj} updateTask={updateTask}/>
        </div>
        
    )
}
