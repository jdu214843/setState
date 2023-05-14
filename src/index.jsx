import React from 'react';

import { student } from './main.jsx';


class Student extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            name:"Asilbek",
            data: student,
        }
    }

    render() {
        const onFilter = (e)=>{
            let result = student.filter(value => value.name.toLocaleLowerCase().includes(e.target.value));
            this.setState({data: result});

        }
        const onStatus = (e)=>{
            // let res = this.state.data.filter(value => value.status.includes(e.target.status));
            // this.setState({data: res});
            console.log(e);
        }
        
        const onDelete = (id)=>{
            let result = this.state.data.filter(value => value.id !== id);
            this.setState({data: result});

        }
        return(
            <div>
                <input className='filter' type="text" onChange={onFilter} placeholder="filter" />
                <input className='filter' type="text" onChange={onStatus} placeholder="filter" />

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
                    this.state.data.map(({id, name, status}) =>{
                        return (
                            <tr key={id}>
                                <td className='name-id'>{id}</td>
                                <td>{name}</td>
                                <td>{status}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button onClick={()=>onDelete(id)}>Delete</button>
                                </td>
                                <td>
                                    <button>Selected</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>
            </div>

        )
    }
}

export default Student