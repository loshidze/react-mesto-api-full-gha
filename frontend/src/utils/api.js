class Api {
  constructor({url}) {
    this._url = url;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }


  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfileInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      }
    })
  }

  setProfileInfo(data) {
    return this._request(`${this._url}/users/me`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
  }

  getCards() {
    return this._request(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      }
    })
  }

  setCard(data) {
    return this._request(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  changeAvatar(data) {
    return this._request(`${this._url}/users/me/avatar`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
  }

  toggleLikeCard(id, isLiked) {
    if (isLiked) {
      return this.like(id);
    } else {
      return this.dislike(id);
    }
  }

  like(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'PUT'
    })
  }

  dislike(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'DELETE'
    })
  }

  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'DELETE'
    })
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    }
  })
    .then(this._checkResponse);
  }

  updateToken() {
    this.headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  }
}

// const api = new Api({
//   // url: 'https://api.belevkin.nomoredomains.monster',
//   url: 'http://localhost:3001',
//   headers: {
//     'Content-Type': 'application/json',
//     authorization: `Bearer ${localStorage.getItem('jwt')}`
//   }
// })

export {Api}
