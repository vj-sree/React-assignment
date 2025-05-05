import { Component } from "react";
import USERSERVICE from "./user-service";
import { Link } from "react-router-dom";
export default class UserListComponent extends Component {

         constructor(props){
            super(props);
            this.state={
                users:[],
                user:{}
            }
            this.getUserById = this.getUserById.bind(this);
         }
     componentDidMount(){
        USERSERVICE.getUsers().then(res => {this.setState({users:res.data});
        console.log("users asynch:"+this.state.users.data)})
        console.log("users:"+this.state.users.data)
     }
     getUserById(event){

       /* console.log("user id:"+event.target.innerText);
        let id = event.target.innerText;
        console.log("user id:"+id);
        USERSERVICE.getUserById(id).then(res => {this.setState({user:res.data});
        console.log("users asynch:"+this.state.user.data)})*/
      //  console.log("users:"+this.state.users.data)
     }      
     render(){
        return(
            <div>
                <h5>All Users</h5>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            <tr key={user.id}>
                              {/*   <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>*/}
                                <td><Link to={"/user/"+user.id}>{user.id}</Link></td>
                              
                              {/* <td><button onClick={this.getUserById} >{user.id}</button></td>*/}
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>   
                    </table>
             

            </div>
        )
     }



}
