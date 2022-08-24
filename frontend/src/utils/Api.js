export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    _fetch({ path, method, body = null, token }) {
        const url = this._baseUrl + path
        return fetch(url, {
            method,
            headers: {
                ...this._headers,
                authorization: 'Bearer ' + token
            },
            body
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`${res.status}`)
            })
    }

    _likeCard(cardId, method, token) {
        return this._fetch({ path: `cards/${cardId}/likes`, method, token })
    }

    getUserInfo(token) {
        return this._fetch({ path: 'users/me', method: 'GET', token })
    }

    getInitialCards(token) {
        return this._fetch({ path: 'cards', method: 'GET', token })
    }

    editUserInfo({ name, about }, token) {
        const body = JSON.stringify({ name, about })

        return this._fetch({ path: 'users/me', method: 'PATCH', body, token })
    }

    addCard({ name, link }, token) {
        const body = JSON.stringify({ name, link })
        return this._fetch({ path: 'cards', method: 'POST', body, token })
    }

    deleteCard(cardId, token) {
        return this._fetch({ path: `cards/${cardId}`, method: 'DELETE', token })
    }

    editUserAvatar({ avatar }, token) {
        const body = JSON.stringify({ avatar })
        return this._fetch({ path: 'users/me/avatar', method: 'PATCH', body, token })
    }

    changeLikeCardStatus(cardId, isLiked, token) {
        return isLiked ?
            this._likeCard(cardId, 'PUT', token) :
            this._likeCard(cardId, 'DELETE', token)
    }
}

// вынесем в отдельный файл

/* export const optionsApi = {
    //baseUrl: 'https://api.tavozhnyanskii.denis.nomoredomains.sbs/',
    baseUrl: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
    },
} */
