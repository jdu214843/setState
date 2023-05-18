import React from 'react';

import { student } from './main.jsx';


class Student extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            name:"",
            status:"",
            data: student,
            search: "id",
            active: null,

        }
    }

    render() {
        const onFilter = (e)=>{
            const {value} = e.target;

            let result = student.filter(item => 
                `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()));
            this.setState({data: result});

        }
        const onDelete = (id)=>{
            let result = this.state.data.filter(value => value.id !== id);
            this.setState({data: result});


        }
        const onChange = (event)=>{
            console.log(event.target.name);
            this.setState({ [event.target.name] : event.target.value}) ;
        }
        const onAdd = ()=>{
            let newUser = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status,
            }
            this.setState({
                data: [...this.state.data, newUser],
                 name: "", 
                 status: "", 
                });
        }
        const onSelect= (e)=>{
            this.setState({search: e.target.value});
        }

        const onEdit= ({id,name, status})=>{
            this.setState({
                active: {id,name,status}
            })
        }
        return(
            <div>
                <h4>Name: {this.state.name}</h4>
                <h4>Status: {this.state.status}</h4>
                <input value={this.state.name} className='filter' name="name" onChange={onChange} type="text" placeholder='name' />
                <input value={this.state.status} className='filter' name="status" onChange={onChange} type="text" placeholder='status'/>
                <input className='filter' type="text" onChange={onFilter} placeholder="filter" />
                <select onChange={onSelect} name="" id="" className='select'>
                    <option value="id">ID</option>
                    <option value="name">name</option>
                    <option value="status">status</option>
                </select>
                <button className='sort-btn' onClick={onAdd}>add</button>
                <table className='wrapper'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>STATUS</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                            <th>SELECTED</th>
                        </tr>
                    </thead>
                <tbody className='tbody'>
                {
                    this.state.data.length ?
                    this.state.data.map(({id, name, status}) =>{
                        return (
                            <tr key={id}>
                                <td className='name-id'>{id}</td>
                                <td>{name}</td>
                                <td>{status}</td>
                                <td>
                                    <button onClick={()=>onEdit({id,name,status})}>
                                        {this.state.active?.id === id ? "save" : "edit" }
                                    </button>
                                </td>
                                <td>
                                    <button onClick={()=>onDelete(id)}>Delete</button>
                                </td>
                                <td>
                                    <button>Selected</button>
                                </td>
                            </tr>
                        )
                    }) : 
                    <tr>
                        <td colSpan={6} className="no-data">
                            <h1>no data</h1>
                        </td>
                    </tr>
                }
                </tbody>
                </table>
            </div>

        )
    }
}

export default Student