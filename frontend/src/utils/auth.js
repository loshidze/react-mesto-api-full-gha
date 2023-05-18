// const url = 'https://api.belevkin.nomoredomains.monster';
const url = 'http://localhost:3001';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options)
  .then(checkResponse)
}

export function register (password, email) {
  return request(`${url}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
}

export function authorize(password, email) {
  return request(`${url}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
}

export function checkToken(token) {
  return request(`${url}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
}
