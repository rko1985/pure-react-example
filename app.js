const Person = props => { //component
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
}

const App = () => { //component
    return React.createElement('div', {}, [
        React.createElement('h1', {class: 'title'}, 'React is rendered'),
        React.createElement(Person, {name: 'Russell', occupation: 'programmer'}, null),
        React.createElement(Person, {name: 'Andrei', occupation: 'lead programmer'}, null),
        React.createElement(Person, {name: 'Russell', occupation: 'teacher'}, null)
    ]);
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));