export const BASE_URL = "https://auth.nomoreparties.co";
export let error;

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(error);
}

export const register = ({ password, email }) => {
  return fetch(BASE_URL + "/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  })
    .then((res) => {
      return res.status === 400
        ? (error = `Ошибка: некорректно заполнено одно из полей`) && res
        : (error = `Ошибка: ${res.status}`) && res;
    })
    .then(checkResponse);
};

export const authorize = ({ password, email }) => {
  return fetch(BASE_URL + "/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  })
    .then((res) => {
      return res.status === 400
        ? (error = `Ошибка: не передано одно из полей`) && res
        : res.status === 401
        ? (error = `Ошибка: пользователь с email не найден`) && res
        : (error = `Ошибка: ${res.status}`) && res;
    })
    .then(checkResponse);
};

export const content = (token) => {
  return fetch(BASE_URL + "/users/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.status === 400
        ? (error = `Ошибка: токен не передан или передан не в том формате`) &&
            res
        : res.status === 401
        ? (error = `Ошибка: переданный токен некорректен`) && res
        : (error = `Ошибка: ${res.status}`) && res;
    })
    .then(checkResponse);
};
