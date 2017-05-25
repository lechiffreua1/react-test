import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age,
            name: props.name
        }
    }

    incrementAge() {
        let incrementedAge = this.state.age + 1;
        this.setState({
            age: incrementedAge
        });
    }

    render() {
        let name = this.state.name;
        let age = this.state.age;
        return (
            <div>
                <p>In a new Component</p>
                <p>My name is {name}</p>
                <p>I'm {age} years old</p>
                <hr/>
                <button onClick={this.incrementAge.bind(this)} className="btn btn-primary">Increment the age</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};