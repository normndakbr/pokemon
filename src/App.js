import './App.css';
import react from 'react';

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
            ]
        }
    }

    render() {

        const {username, userDetail, users} = this.state
        return (
            <>
                <h1> Hello World </h1>
                <h3> This is subtitle </h3>
                <div>{this.state.username}</div>
                <div>{JSON.stringify(userDetail)}</div>
                {/* <div>{JSON.stringify(users)}</div> */}
                <ul>
                    {
                        users.map(user => {
                            return<li key={user.id}>id: {user.id}, name: {user.name}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default App;