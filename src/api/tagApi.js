import { HttpClient } from './HttpClient';

const tagBaseUrl = '/tags';

export const getTags = () => {
  return HttpClient.get(tagBaseUrl).then((res) => res.data);
};

export const getTagById = (id) => {
  return HttpClient.get(`${tagBaseUrl}/${id}`).then((res) => res.data);
};

export const createTag = (tag) => {
  return HttpClient.post(tagBaseUrl, tag).then((res) => res.data);
};

export const updateTag = (id, tag) => {
  return HttpClient.patch(`${tagBaseUrl}/${id}`, tag).then((res) => res.data);
};

export const deleteTagById = (id) => {
  return HttpClient.delete(`${tagBaseUrl}/${id}`);
};
