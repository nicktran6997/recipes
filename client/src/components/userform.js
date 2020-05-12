import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
        }
    }
    updatePassword(value) {
        this.setState({
            password: value,
        });
    }
    updateName(value) {
        this.setState({
            name: value,
        });
    }

    submit() {
        //submits form either to login or sign up
        //then redirects to homepage.
    }
    render() {
        const borderStyle = {border: "1px dotted white"}
        const formInputstyle = {display:"block", width: "100%"};
        return (
            <div style={borderStyle}>
                <h1>My Simple Form</h1>
                <form>
                    <label for="username">Username</label>
                    <input type="text" name="username" onChange={(e)=>{this.updateName(e.target.value)}} style={formInputstyle}/>
                    <label for ="password">Password</label>
                    <input type="password" name="password" onChange={(e)=>{this.updatePassword(e.target.value)}} style={formInputstyle}/>
                    
                    <button onClick={()=>this.submit()}>Submit</button>
                </form>

            </div>
        )
    }
}

export default UserForm;