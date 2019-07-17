import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://colum-nc-news.herokuapp.com/api'
});

export const getArticles = (topic, sort) => {
  return instance
    .get(`/articles`, {
      params: {
        topic,
        sort_by: sort
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = async id => {
  const { data } = await instance.get(`/articles/${id}`);
  return data.article;
};

export const getCommentsByArticleId = async (article_id, sort) => {
  return instance
    .get(`/articles/${article_id}/comments`, {
      params: {
        sort_by: sort
      }
    })
    .then(({ data }) => {
      return data.comments;
    });
};

export const getTopicsList = () => {
  return instance.get(`/topics`).then(({ data }) => {
    return data;
  });
};

export const postComment = async (article_id, newComment) => {
  const { data } = await instance.post(`articles/${article_id}/comments`, newComment);
  return data.comment;
};

export const deleteComment = async comment_id => {
  await instance.delete(`/comments/${comment_id}`);
};

export const vote = async (type, id, inc_votes) => {
  const { data } = await instance.patch(`/${type}s/${id}`, { inc_votes });
  return data;
};
