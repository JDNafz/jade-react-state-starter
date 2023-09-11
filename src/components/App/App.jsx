import './App.css';
import Clicker from '../Clicker/Clicker.jsx'
// object desctructuring
// it's a shortcut to get a property of an object
import { useState } from 'react';
// this is shorthand for:
// import React from 'react';
// const useState = React.useState;

// We use the useState hook to declair variables in React
// They act as a getter and a setter.



function App() {

    // This is the pattern for tracking state
    // AKA variables
    // They must live in the component

    // helper funcitons must live inside the component
    // within a component, helper functions should be defined before they are used.
    // they are not "hoisted" like in normal javascript.

    return (
        <div>
            <h1>React local State</h1>
            <Clicker name="Andrew" />
            <Clicker name="Angelica" />
            <Clicker name="Paul" />
        </div>
    );
}

export default App;
