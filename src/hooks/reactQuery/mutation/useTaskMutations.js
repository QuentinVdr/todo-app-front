import { createTask, deleteTaskById, updateTask } from '@api/taskApi';
import { taskQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task) => createTask(task),
    onSuccess: (savedTask) => {
      queryClient.setQueryData(taskQKey.detail(savedTask._id), savedTask);
    }
  });
};

export const useUpdateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedTask) => updateTask(updatedTask._id, updatedTask),
    onSuccess: (savedTask) => {
      queryClient.setQueryData(taskQKey.detail(savedTask._id), savedTask);
    }
  });
};

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTaskById(id),
    onSuccess: (_, id) => {
      queryClient.removeQueries([taskQKey.mainKey, id]);
    }
  });
};
