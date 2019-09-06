import React, { useEffect }from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit }>
            <h1>Hai noroc!</h1>
            <p className={assignedClasses.join(' ')}>Mere treaba</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default Cockpit;