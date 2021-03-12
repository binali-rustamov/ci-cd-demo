import {inject, injectable} from "inversify";
import {ITodoItem} from "../model/TodoItemModel";
import {ITodoRepo} from "../repository/TodoRepo";
import {TYPES} from "../types";

export interface ITodoService {
    getAll(): Promise<ITodoItem[]>;

    create(model: ITodoItem): Promise<ITodoItem>;
}

@injectable()
export class TodoService implements ITodoService {
    constructor(@inject(TYPES.TodoRepo) private repo: ITodoRepo) {
    }

    public getAll(): Promise<ITodoItem[]> {
        return this.repo.getAll();
    }

    public create(model: ITodoItem): Promise<ITodoItem> {
        // if (model.description == null) {
        //     throw new Error("Provide valid description");
        // }
        return this.repo.save(model);
    }

}