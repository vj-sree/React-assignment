import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';                                                                               
import { withRouter } from 'react-router-dom'; 
import { useParams } from "react-router-dom"; 
import USERSERVICE from './user-service';        

function UserDetailComponent (props) {
  
    const [user, setUser] = useState({});
    //const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        
       // const userId = props.match.params.id;
        USERSERVICE.getUserById(id).then(res => {
            setUser(res.data);
        });
    }, []);
    //const { user } = this.state;
    
    return (
            <div>
                <h5>User Details</h5>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>User ID</td>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <td>User Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>User Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>User Phone</td>
                            <td>{user.phone}</td>
                        </tr>
                    </tbody>   
                </table> 
            </div>
        );
    }       
          
export default UserDetailComponent;
