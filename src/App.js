import './App.css';
import react from 'react';
import User from './components/User';
import Todo from './components/Todo';

class App extends react.Component {

    constructor() {
        super()

        this.state = {
            todos: [],
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
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then( data => {
            this.setState({
                todos: data
            })
        })
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

        const { username, userDetail, users, inputUserName, todos } = this.state
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
                <ul>
                    {
                        todos.map(todo => {
                            //send/props data to Todo Component
                            return <Todo key={todo.id} todoList={todo} />
                        })
                    }
                </ul>
            </>
        )
    }
}

export default App;