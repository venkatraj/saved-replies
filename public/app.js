"use strict";

// const name = 'Vue';
var subject = {
  name: 'React',
  description: 'A JavaScript library for building user interfaces'
}; // Exercise, to that for Angular or Vue
// https://randomuser.me/photos

var person = {
  firstName: 'Venkat',
  lastName: 'Raj',
  profilePic: 'https://randomuser.me/api/portraits/men/66.jpg'
};

var formatName = function formatName(person) {
  return "".concat(person.firstName, " ").concat(person.lastName);
}; // const el = (
//   <div id="content">
//     <h1>Hello, {subject.name}</h1>
//     <p>{subject.description}</p>
//   </div>
// );
// functions are expressions.
// Element attribute values can be an expression
// const el = (
//   <div id="person">
//     <h1>Hello, {formatName(person)}</h1>
//     <img src={person.profilePic} alt="That is not me!" />
//   </div>
// );
// Even jsx itself is an expression


var getGreeting = function getGreeting() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello, ", formatName(person));
};

var el = /*#__PURE__*/React.createElement("div", {
  id: "person"
}, getGreeting(), /*#__PURE__*/React.createElement("img", {
  src: person.profilePic,
  alt: "That is not me!"
}));
var root = document.getElementById('root');
ReactDOM.render(el, root);