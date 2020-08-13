// const name = 'Vue';

const subject = {
  name: 'React',
  description: 'A JavaScript library for building user interfaces',
};

// Exercise, to that for Angular or Vue

// https://randomuser.me/photos
const person = {
  firstName: 'Venkat',
  lastName: 'Raj',
  profilePic: 'https://randomuser.me/api/portraits/men/66.jpg',
};

const formatName = (person) => {
  return `${person.firstName} ${person.lastName}`;
};

// const el = (
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
const getGreeting = () => <h1>Hello, {formatName(person)}</h1>;

const el = (
  <div id="person">
    {getGreeting()}
    <img src={person.profilePic} alt="That is not me!" />
  </div>
);

const root = document.getElementById('root');

ReactDOM.render(el, root);
