import {ITodoItem, TodoItemModel} from "../model/TodoItemModel";
import {injectable} from "inversify";

export interface ITodoRepo {
    getAll(): Promise<ITodoItem[]>;

    save(model: ITodoItem): Promise<ITodoItem>;
}

@injectable()
export class TodoRepo implements ITodoRepo {
    getAll(): Promise<ITodoItem[]> {
        return TodoItemModel.find({}).exec();
    }

    save(model: ITodoItem): Promise<ITodoItem> {
        return TodoItemModel.create(model);
    }
}