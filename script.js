const movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: './images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    poster: './images/lew.jpg'
  },
  {
    id: 3,
    title: 'Black Hawk Down',
    desc: 'Film o Mogadiszu',
    poster: './images/black.jpg'
  },
  {
    id: 4,
    title: 'Game of Thrones',
    desc: 'Serial na podstawie serii Pieśń lodu i ognia',
    poster: './images/game.jpg'
  }
];

const moviesElements = movies.map(function (movie) {
  return React.createElement('li', {key:movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', { src: movie.poster, width: 182})
  );
});

const element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));