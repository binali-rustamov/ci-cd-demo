import mongoose, {Schema, Document} from 'mongoose';

export interface ITodoItem {
    _id: string,
    title: string,
    description: string
    isDone: boolean
}

interface ITodoItemModel extends Document, ITodoItem {
    _id: string;
}

const TodoItemSchema: Schema = new Schema({
    title: {type: String, required: true, unique: false},
    description: {type: String, required: false},
    isDone: {type: Boolean, required: false}
});
export const TodoItemModel = mongoose.model<ITodoItemModel>('TodoItem', TodoItemSchema);