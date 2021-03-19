import {interfaces, controller, httpGet, httpPost, requestBody} from "inversify-express-utils";
import {ITodoService} from "../service/TodoService";
import {inject} from "inversify";
import {TYPES} from "../types";
import {ITodoItem} from "../model/TodoItemModel";

@controller("/todo")
export class TodoController implements interfaces.Controller {

    constructor(@inject(TYPES.TodoService) private service: ITodoService) {
    }

    @httpGet("/")
    public getAll(): Promise<ITodoItem[]> {
        return this.service.getAll();
    }

    @httpPost("/")
    public create(@requestBody() model: ITodoItem): Promise<ITodoItem> {
        console.log(model);
        return this.service.create(model);
    }
}