import React from "react";

import { Layout, Row, Col, Typography, Spin, Empty } from "antd"; // ~ "shared/ui/{...}"

import styles from "./styles.module.css";

import { InputTodoForm } from "features/add-todo";


export const TodoListPage: React.FC = () => {
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
                </Row>
            </Layout.Content>
        </Layout>
    )
}
