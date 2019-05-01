import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const buttonText = "Click me!"
        return (
            <div>
                <label htmlFor="name" className="label">Enter name:</label>
                <input id="name" type="text"/>
                <button style={{backgroundColor: 'blue',color: 'white'}}>
                    {buttonText}
                </button>
                </div>
        )
    }
}

ReactDOM.render(<App />,
    document.querySelector('#root')
);