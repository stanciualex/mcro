import React, {Component} from 'react';
import styles from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }
    state = {
        persons: [
            {id: 'asdlqdo', name: 'Max', age: 28},
            {id: 'l;dsfkd', name: 'Manu', age: 29},
            {id: 'lj3jr2o', name: 'Stef', age: 22}
        ],
        showPersons: true
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    };

    deletePersonHandler = (personsIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1);
        this.setState({
            persons: persons
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };


    componentDidMount() {
        console.log('[App.js] coponentDidMount');
    }

    shouldComponentUpdate() {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    render() {
        console.log('[App.js] rendering...')

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }

        return (
            <div className={styles.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;

// const App = () => {
//     const [ personsState, setPersonsState ] = useState({
//         persons: [
//             { name: 'Max', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stef', age: 22 }
//         ]
//     });
//
//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: 'Pizda', age: 28 },
//                 { name: 'Manu', age: 29 },
//                 { name: 'Stef', age: 99 }
//             ]
//         });
//     };
//
//
//     return (
//         <div className="App">
//             <h1>Hai noroc!</h1>
//             <p>Mere treaba</p>
//             <button onClick={switchNameHandler}>Switch name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//             <Person
//
//                 name={personsState.persons[1].name} age={personsState.persons[1].age} >ASDsadasdsdadsaas</Person>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//         </div>
//     );
// }`