import routes from './utils/routes';

import './styles/index.css';

window.addEventListener('load', () => {
  const root = document.querySelector('#root');
  const route = routes[window.location.pathname] || routes['/notFound'];

  if (root) {
    root.appendChild(route.getContent());
  }
  route.dispatchComponentDidMount();
});
