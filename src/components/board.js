import {getTaskEditTemplate, getTaskTemplate} from './tasks';

const getLoadMoreButtonTemplate = () => (
  `<button class="load-more" type="button">load more</button>`
);

export const getBoardTemplate = () => {
  let taskList = ``;
  const task = getTaskTemplate();
  const editableTask = getTaskEditTemplate();
  const showMoreButton = getLoadMoreButtonTemplate();

  const TASK_AMOUNT = 3;

  for (let i = 0; i < TASK_AMOUNT; i++) {
    taskList = `${taskList}${task}`;
  }

  return (
    `
    <section class="board container">
      <div class="board__filter-list">
        <a href="#" class="board__filter">SORT BY DEFAULT</a>
        <a href="#" class="board__filter">SORT BY DATE up</a>
        <a href="#" class="board__filter">SORT BY DATE down</a>
      </div>

      <div class="board__tasks">${editableTask}${taskList}</div>
      ${showMoreButton}
    </section>
    `);
};
