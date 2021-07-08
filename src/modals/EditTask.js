import React, {useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function EditTask({modal, toggle, taskObj, updateTask}) {

    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    const handleClick = (e) => {
        const { name, value } = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
        if(name === "description"){
            setDescription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) =>{
        e.preventDefault();
        let tempObj ={}
        tempObj["Name"] = taskName
        tempObj["Description"] = description
        updateTask(tempObj)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Task Name</label>
                            <input type="text" className="form-control" name="taskName" value={taskName} onChange={handleClick} />
                        </div><br></br>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea rows="5" className="form-control" name="description" value={description} onChange={handleClick} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
