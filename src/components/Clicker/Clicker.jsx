import { useState } from 'react';

function Clicker(props) {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('clicked');
        setCount(count + 1);
    }

    return (
        <div className="App">
            <p>Hello! My name is {props.name}.</p>
            {/* note, we don't update state variables directly.  This doesn't work: count ++, or count += 1 */}
            {/* We HAVE to use the setter */}
            <button onClick={handleClick} >Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default Clicker;
