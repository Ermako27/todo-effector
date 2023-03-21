import {
    createEvent,
    createStore,
    createEffect,
    sample
} from 'effector';
import type { Todo } from 'shared/model';
import { todoModel } from 'entities/todo';

const changeInputEvent = createEvent<string>(); // событие ввода буквы в поле ввода
const insertTodoEvent = createEvent<string>(); // событие добавления тудушки в стор
const submitFormEvent = createEvent<React.SyntheticEvent>(); // событие сабмита формы с полем ввода
submitFormEvent.watch((event) => event.preventDefault()); // при всяком срабатываении события submitFormEvent

const $input = createStore<string>(''); // стор для ввода тудушки
$input
    .on(changeInputEvent, (_, todoText) => todoText) // когда срабатывает changeTodoEvent, то есть вводим текст в поле ввода, обновляем стор $input 
    .reset(insertTodoEvent); // приводим стор в исходное состояние послет того как добавили новую тудушку

sample({
    clock: submitFormEvent, // когда произойдет событие сабмита формы
    source: $input, // возьмем данные из стора $input
    target: insertTodoEvent, // и вызовем с этими данными событие insertTodoEvent
})

todoModel.$todos
    // когда срабатывает событие insertTodoEvent, todos - текущее состояние стора, newTodoText - данные из события insertTodoEvent
    .on(insertTodoEvent, (todos, newTodoText) => {
        const newTodo: Todo = {
            title: newTodoText,
            id: todos.length + 1,
            completed: false
        }

        // добавляем новое туду в стор
        return [...todos, newTodo];
    })

// // сайд эффект для логирования
const logTodosFx = createEffect((todos: Todo[]) => {
    console.log('todos store state', todos);
})

// // следим за изменением стора $todos, логируем все изменения
todoModel.$todos.watch((todos) => {
    logTodosFx(todos);   
})

// экспортируем для ui только нужные события
export const events = {
    changeInputEvent,
    submitFormEvent,
}
