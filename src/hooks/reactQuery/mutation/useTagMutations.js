import { createTag, deleteTagById, updateTag } from '@api/tagApi';
import { tagQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tag) => createTag(tag),
    onSuccess: (savedTag) => {
      queryClient.setQueryData(tagQKey.detail(savedTag._id), savedTag);
    }
  });
};

export const useUpdateTagMutation = (tagId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedTag) => updateTag(tagId, updatedTag),
    onSuccess: (savedTag) => {
      queryClient.setQueryData(tagQKey.detail(tagId), savedTag);
    }
  });
};

export const useDeleteTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTagById(id),
    onSuccess: (_, id) => {
      queryClient.removeQueries([tagQKey.mainKey, id]);
    }
  });
};
