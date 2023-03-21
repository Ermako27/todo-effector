// import { lazy } from "react";

import {
    Routes,
    Route,
} from "react-router-dom";

import { TodoListPage } from './todo-list';


// const TodoListPage = lazy(() => import("./todo-list"));
// const TaskDetailsPage = lazy(() => import("./task-details"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoListPage />} />
        </Routes>
    );
};
