import {getMenuTemplate} from './components/menu';
import {getFilterTemplate} from './components/filter';
import {getBoardTemplate} from './components/board';

const mainContainer = document.querySelector(`.main`);
const headerContainer = mainContainer.querySelector(`.main__control`);

const render = (container, markup, position = `beforeEnd`) => {
  container.insertAdjacentHTML(position, markup);
};

render(headerContainer, getMenuTemplate());
render(mainContainer, getFilterTemplate());
render(mainContainer, getBoardTemplate());
