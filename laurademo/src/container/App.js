import React, {Component} from 'react';
import './App.css';
import axios from '../axios';

class App extends Component {
    state = {
        isLoading: true,
        persons: []
    };

    async componentDidMount() {
        axios.get('/person').then(
            response => {
                const body = response.data;
                const temp = body._embedded.person;
                this.setState({persons: temp, isLoading: false});
            }
        );
    }

    render() {
        const {persons, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-intro">
                        <h2>Person List</h2>
                        {persons.map(person =>
                            <div key={person.id}>
                                {person.name}
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
