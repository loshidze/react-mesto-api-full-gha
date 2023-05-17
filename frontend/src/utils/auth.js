// class Auth {
//   constructor({url}) {
//     this._url = url;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   register (password, email) {
//     return fetch(`${this._url}/signup`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({password, email})
//     })
//     .then(this._checkResponse);
//   }

//   authorize(password, email) {
//     return fetch(`${this._url}/signin`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({password, email})
//     })
//     .then(this._checkResponse);
//   }

//   checkToken(token) {
//     return fetch(`${this._url}/users/me`, {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization" : `Bearer ${token}`
//       }
//     })
//     .then(this._checkResponse);
//   }
// }

// const auth = new Auth({
//   // url: 'https://api.belevkin.nomoredomains.monster',
//   url: 'http://localhost:3001',
// })

// export {auth}

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
