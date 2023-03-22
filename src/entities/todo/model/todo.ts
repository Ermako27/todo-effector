import { createStore, createEffect } from 'effector';

import type { Todo } from 'shared/model';

// Q: где и как в fsd правильно хранить и эксортировать типы ?
export type todoStoreType = {[key: number]: Todo}

export const $todos = createStore<todoStoreType>({});