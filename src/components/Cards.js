import React, {useState} from 'react'
import './cards.css'
import EditTask from '../modals/EditTask'

export default function Cards({taskObj, index, taskDelete, updateListArray}) {
    const [modal, setModal] = useState(false)
    const colors = [
        {
            secondaryColor : "#000080"
        },
        {
            secondaryColor : "#00BFFF"
        },
        {
            secondaryColor : "#8A2BE2"
        },
        {
            secondaryColor : "#FF1493"
        },
        {
            secondaryColor : "#FF00FF"
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
            <div className="card-body" style={{borderTop: `6px solid ${colors[index%5].secondaryColor}` }}>
                <h4 className="card-title mb-3">{taskObj.Name}</h4>
                <p className="card-text" style={{height: "75%"}}>{taskObj.Description}</p>
            </div>
            <div className="font_awesome">
                <i class="fa fa-edit" style={{fontSize: "24px", marginRight: "10px", color: `${colors[index%5].secondaryColor}` , 
                cursor: "pointer" }}
                onClick={() => setModal(true)}></i>
                <i class="fa fa-trash-o" style={{fontSize: "24px", color: `${colors[index%5].secondaryColor}` ,
                cursor: "pointer"}} onClick={handleDelete}></i>
            </div>
            <EditTask modal={modal} toggle={toggle} taskObj={taskObj} updateTask={updateTask}/>
        </div>
        
    )
}
