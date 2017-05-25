import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        let name = this.props.name;
        let age = this.props.age;
        let hobbies = this.props.hobbies;
        return (
            <div>
                <p>In a new Component</p>
                <p>My name is {name}</p>
                <p>I'm {age} years old</p>
                <div>
                    <h3>Hobbies</h3>
                    <ul>
                        {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    children: PropTypes.element.isRequired
};