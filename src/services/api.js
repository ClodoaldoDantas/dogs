export const baseUrl = 'https://dogsapi.origamid.dev/json';

const api = {
  tokenPost(body) {
    return {
      url: `${baseUrl}/jwt-auth/v1/token`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    };
  },
  tokenValidatePost(token) {
    return {
      url: `${baseUrl}/jwt-auth/v1/token/validate`,
      options: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    };
  },
  userGet(token) {
    return {
      url: `${baseUrl}/api/user`,
      options: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    };
  },
  userPost(body) {
    return {
      url: `${baseUrl}/api/user`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    };
  },
  photoPost(formData, token) {
    return {
      url: `${baseUrl}/api/photo`,
      options: {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    };
  },
  photosGet({ page, total, user }) {
    return {
      url: `${baseUrl}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    };
  },
  photoGet(id) {
    return {
      url: `${baseUrl}/api/photo/${id}`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    };
  },
  photoDelete(id) {
    return {
      url: `${baseUrl}/api/photo/${id}`,
      options: {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    };
  },
  commentPost(id, body) {
    return {
      url: `${baseUrl}/api/comment/${id}`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      },
    };
  },
};

export default api;
