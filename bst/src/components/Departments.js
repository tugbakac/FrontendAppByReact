import React, { Component} from 'react';
import { Table } from 'react-bootstrap';
import { AddDepModal } from './AddDepModal';
import {EditDepModal} from './EditDepModal';
import { Button,ButtonToolbar } from 'react-bootstrap';

export class Departments extends Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
            deps:[],
            addModalShow:false,
            editModalShow:false
        };
    }
    componentDidMount(){
        this.refleshlist();
    }
<<<<<<< HEAD

    componentDidUpdate(){
        this.refleshlist();
    }

    //connection with API
=======
    //fake data
>>>>>>> 8147208d882e015cf9d7fedc3e5204845caad8b2
    refleshlist()
    {
        fetch('http://localhost:58127/api/Department')
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    deps:data
                });
            });
    }
    render(){
        const{deps,depID,depName}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false})
        let editModalClose=()=>this.setState({editModalShow:false})
        return(
            <div>
                    <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>DepartmentID</th>
                        <th>DepartmentName</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deps.map(dep=>
                            <tr key={dep.DepartmentID}>
                                <td>{dep.DepartmentID}</td>
                                <td>{dep.DepartmentName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button variant="warning text-light" onClick={()=>this.setState({
                                            editModalShow:true,
                                            depID:dep.DepartmentID,
                                            depName:dep.DepartmentName
                                        })}>
                                            Edit
                                        </Button>
                                        <EditDepModal
                                            show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            depID={depID}
                                            depName={depName}
                                        />
                                    </ButtonToolbar>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </Table>
            <ButtonToolbar>
                    <Button onClick={() => this.setState({
                        addModalShow:true
                    })}>
                        Add Department
                    </Button>
            </ButtonToolbar>
            <AddDepModal show={this.state.addModalShow} onHide={addModalClose} />
            </div>
        )
    }
}
