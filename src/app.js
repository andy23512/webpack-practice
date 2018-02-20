if (module.hot) {
  module.hot.accept(); // accept hot reloading of this module and any of its dependencies
}

import './style.scss';
import codeURL from './code.png';

import { groupBy } from 'lodash/collection';
import people from './people';

const managerGroups = groupBy(people, 'manager');

const root = document.querySelector('#root');
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;

const img = document.createElement('img');
img.src = codeURL;
img.style.backgroundColor = '#2B3A42';
img.style.padding = '20px';
img.width = 32;
document.body.appendChild(img);

const routes = {
  dashboard: () => {
    System.import('./dashboard')
      .then(dashboard => {
        dashboard.draw();
      })
      .catch(err => {
        console.log('Chunk loading failed');
      });
  }
};

// demo async loading with a timeout
setTimeout(routes.dashboard, 1000);
