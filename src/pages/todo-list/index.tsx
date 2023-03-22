import React from "react";
import { useStore } from 'effector-react'
import {
    Layout,
    Row,
    Typography,
} from "antd";
import styles from "./styles.module.css";

import { InputTodoForm } from "features/add-todo";
import { TodoRow, todoModel } from "entities/todo";

export const TodoListPage: React.FC = () => {
    const todos = useStore(todoModel.$todos);
    return (
        <Layout className={styles.root}>
            <Layout className={styles.toolbar}>
                {/* ~ Layout.Toolbar */}
                <Row justify="center">
                <Typography.Title level={1}>Todo List</Typography.Title>
                </Row>
                <Row justify="center">
                {/* <TasksFilters /> */}
                </Row>
            </Layout>
            <Layout.Content className={styles.content}>
                <Row gutter={[0, 20]} justify="center">
                {/* <PageContent /> */}
                    <InputTodoForm/>
                    {
                        todos.map((todo) => (
                            <TodoRow key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}></TodoRow>
                        ))
                    }
                </Row>
            </Layout.Content>
        </Layout>
    )
}
