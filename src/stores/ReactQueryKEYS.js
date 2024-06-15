/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  list: () => [exempleQKey.mainKey, 'list'],
  detail: (id) => [exempleQKey.mainKey, 'detail', id]
};

/** Task */
export const taskQKey = {
  mainKey: 'task',
  list: () => [taskQKey.mainKey, 'list'],
  detail: (id) => [taskQKey.mainKey, 'detail', id]
};

/** Tag */
export const tagQKey = {
  mainKey: 'tag',
  list: () => [tagQKey.mainKey, 'list'],
  detail: (id) => [tagQKey.mainKey, 'detail', id]
};
