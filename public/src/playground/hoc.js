import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => (
    <div>
        <h1>Hello</h1>
        <p>Hello: {props.name}</p>
    </div>
);

const message = (WrappedComponent) => {
  return (props) => (
    <div>
        <p>Be very very careful with this information</p>
        <WrappedComponent {...props}/>
    </div>
    );
};

const isAuthenticated = (WrappedComponent, props) => {
   return (props) => (
       <div>
           {props.auth ? <Component name='aden'/> : <p>please log in to view message</p>}
       </div>
   )
}

const Component = message(Hello);
const AuthInfo = isAuthenticated(Hello);


//ReactDOM.render(<Component name='Aden'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo auth={true} name='Aden'/>, document.getElementById('app'));


