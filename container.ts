import {Container} from 'inversify';
import {ITodoService, TodoService} from "./service/TodoService";
import {TYPES} from "./types";
import {ITodoRepo, TodoRepo} from "./repository/TodoRepo";

// set up container
let container = new Container();

// set up bindings
container.bind<ITodoService>(TYPES.TodoService).to(TodoService);
container.bind<ITodoRepo>(TYPES.TodoRepo).to(TodoRepo);

export {container};