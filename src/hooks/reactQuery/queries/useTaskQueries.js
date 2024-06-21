import { getTaskById, getTasks } from '@api/taskApi';
import { taskQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useTaskByIdQuery = (id, options) =>
  useQuery({
    ...options,
    queryKey: taskQKey.detail(id),
    queryFn: () => getTaskById(id)
  });

export const useTaskQuery = (options) =>
  useQuery({
    ...options,
    queryKey: taskQKey.mainKey,
    queryFn: () => getTasks()
  });
