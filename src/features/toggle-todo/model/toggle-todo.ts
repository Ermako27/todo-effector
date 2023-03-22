import { createEvent } from 'effector';
import { todoModel } from "entities/todo";

const toggleTodoEvent = createEvent<number>();

todoModel.$todos.on(toggleTodoEvent, (todos, todoId) => {
    const result = {...todos};
    result[todoId].completed = !result[todoId].completed;
    return result;
});

export const events = {
    toggleTodoEvent
};
