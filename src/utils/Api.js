class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkAnswer(res) {
    if (res.status === 200) {
      return res.json();
    }

    return Promise.reject(`ALLARM: ${res.status}`);
  }

  getAllCArds() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkAnswer(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkAnswer(res));
  }

  updateProfile({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then((res) => this._checkAnswer(res));
  }

  updateAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then((res) => this._checkAnswer(res));
  }

  addLikeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkAnswer(res));
  }

  removeLikeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkAnswer(res));
  }

  addCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => this._checkAnswer(res));
  }

  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkAnswer(res));
  }
}

const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    "Content-Type": "application/json",
    authorization: "2dd28070-16ec-4860-ac4e-57aea977096f",
  },
};
const api = new Api(options);
export default api;
