import { createStore, createEffect } from 'effector';

import type { Todo } from 'shared/model';

export const $todos = createStore<Todo[]>([]);
