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
