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
};

export default api;
