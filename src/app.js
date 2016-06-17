var React = require('react');
var ReactDOM = require('react-dom');
console.log("HELLO WORLD!")
var Container = require('./container.jsx'); 
ReactDOM.render(
    <div>   
        <Container></Container>
    </div>
    , document.getElementById('container'));