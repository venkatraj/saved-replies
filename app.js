// var el = React.createElement('h1', {}, 'Hello, React');

var el = React.createElement(
  'div',
  { id: 'content' },
  React.createElement('h1', {}, 'Hello, React'),
  React.createElement(
    'p',
    {},
    'A JavaScript library for building user interfaces'
  )
);

ReactDOM.render(el, document.getElementById('root'));
