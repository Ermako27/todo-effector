import React from 'react';
import { Checkbox } from 'antd';

// Q: в рамках одной фичи правильно ли делать импорты так или лучше относительные через ../../ ?
import { toggleTodoModel } from 'features/toggle-todo';

export type CompleteCheckboxProps = {
    todoId: number;
    completed: boolean;
}

export const CompleteCheckbox: React.FC<CompleteCheckboxProps> = ({todoId, completed}) => {
    return (
        <Checkbox
            onClick={() => toggleTodoModel.events.toggleTodoEvent(todoId)}
            checked={completed}
        />
    )
}