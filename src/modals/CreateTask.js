import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CreateTask({modal, toggle,save}) {

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

    const handleSave = () =>{
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
