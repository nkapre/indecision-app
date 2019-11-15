import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));

class NewSyntax {
    name =  'XYZ';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);