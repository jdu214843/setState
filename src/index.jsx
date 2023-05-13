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
        return(
            <div>
                {
                    this.state.data.map(({id, name, status}) =>{
                        return (
                           <div className='wrapper'>
                             <div className='parent-wrap'>
                                <table className='table'>
                                    <tbody className='tbody'>
                                        <tr className='table-tr'>
                                            <th className='name-id'>{id}</th>
                                            <th className='data-name'>{name}</th>
                                            <th className='status'>{status}</th>
                                        </tr>
                                    </tbody>
                                    <div className='btn-wrap'>
                                        <button>edit</button>
                                        <button>delete</button>
                                        <button>selecet</button>
                                    </div>
                                </table>
                            </div>
                           </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Student