import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://colum-nc-news.herokuapp.com/api'
});

export const getArticles = topic => {
  return instance
    .get(`/articles`, {
      params: {
        topic
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

export const getCommentsByArticleId = async article_id => {
  const { data } = await instance.get(`/articles/${article_id}/comments`);
  return data.comments;
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
