
var routes = [
  {
    path: '/',
    url: './index.html',
    keepAlive: true,
  },

  {
    path: '/about/',
    url: './pages/about.html',
  },

  {
    path: '/form/',
    url: './pages/form.html',
  },

  {
    name: 'pregunta1', 
    path: '/pregunta1/',
    url: './pages/pregunta1.html',
    keepAlive: true,
    options: {
      transition: 'f7-cover',
    },

  },

  {
    name: 'pregunta2',
    path: '/pregunta2/',
    url: './pages/pregunta2.html',
    keepAlive: true,
    options: {
      transition: 'f7-cover',
    },
  },

];
