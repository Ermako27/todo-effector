import { Button, Form, Input } from 'antd';

// Q: в рамках одной фичи правильно ли делать импорты так или лучше относительные через ../../ ?
import { addTodoModel } from 'features/add-todo';

export const InputTodoForm: React.FC = () => {
    return (
        <Form>
            <Form.Item>
                <Input onChange={(event) => addTodoModel.events.changeInputEvent(event.currentTarget.value)}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={addTodoModel.events.submitFormEvent}>
                    Добавить Todo
                </Button>
            </Form.Item>
        </Form>
    );
}