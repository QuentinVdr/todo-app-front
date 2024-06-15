import { getTagById, getTags } from '@api/tagApi';
import { tagQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useTagByIdQuery = (id, options) =>
  useQuery({
    ...options,
    queryKey: tagQKey.detail(id),
    queryFn: () => getTagById(id)
  });

export const useTagQuery = (options) =>
  useQuery({
    ...options,
    queryKey: tagQKey,
    queryFn: () => getTags()
  });
