import './App.css';
import react from 'react';
import User from './components/User';

class App extends react.Component {

    constructor() {
        super()

        this.state = {
            username: "Akbar",
            userDetail: {
                id: 3,
                name: "Pikachu"
            },
            users: [
                {
                    id: 1,
                    name: "Squirtle"
                },
                {
                    id: 2,
                    name: "Charmender"
                },
                {
                    id: 4,
                    name: "Totodile"
                }
            ],
            inputUserName: ""
        }
    }

    componentDidMount() {
        
    }

    //handle change on input
    handleInputChange = (event) => {
        console.log(event.target.value)
        
        //set value to state.inputUserName equals value on input
        this.setState({
            inputUserName: event.target.value
        })
    }

    render() {

        const { username, userDetail, users, inputUserName } = this.state
        return (
            <>
                <h1> Hello World </h1>
                <h3> This is subtitle </h3>
                <div>{this.state.username}</div>
                <div>{JSON.stringify(userDetail)}</div>
                <form>
                    <input value={inputUserName} onChange={this.handleInputChange} placeholder="insert your name" style={{ margin: "10px" }} />
                </form>
                <ul>
                    {
                        users.map(user => {
                            //send/props data to User Component
                            return <User key={user.id} userData={user} />
                        })
                    }
                </ul>
            </>
        )
    }
}

export default App;