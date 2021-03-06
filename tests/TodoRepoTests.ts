import 'mocha';
import 'reflect-metadata';
import * as TypeMoq from "typemoq";
import {ITodoRepo} from "../repository/TodoRepo";
import {TodoService} from "../service/TodoService";
import {ITodoItem} from "../model/TodoItemModel";
import * as chai from "chai";

it("Should create a todo", async () => {

    const reMoq = TypeMoq.Mock.ofType<ITodoRepo>()
    const service = new TodoService(reMoq.object);

    const todoItem: ITodoItem = {_id: "", description: "hello", isDone: false, title: ""}

    reMoq.setup(m => m.save(TypeMoq.It.isAny())).returns(x => Promise.resolve(todoItem))

    let result = await service.create(todoItem);

    chai.expect(todoItem).to.eql(result);
})
it("Should throw an error about null description", async () => {

    const reMoq = TypeMoq.Mock.ofType<ITodoRepo>()
    const service = new TodoService(reMoq.object);

    // @ts-ignore
    const todoItem: ITodoItem = {_id: "", description: null, isDone: false, title: ""}

    await chai.should().Throw(() => service.create(todoItem), Error, "Provide valid description");

})