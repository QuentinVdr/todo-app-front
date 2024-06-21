/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  detail: (id) => [exempleQKey.mainKey, id, 'detail']
};

/** Task */
export const taskQKey = {
  mainKey: 'task',
  detail: (id) => [taskQKey.mainKey, id, 'detail']
};

/** Tag */
export const tagQKey = {
  mainKey: 'tag',
  detail: (id) => [tagQKey.mainKey, id, 'detail']
};
