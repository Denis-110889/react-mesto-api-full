import React from "react";
import { Link } from "react-router-dom";

function Login({handleLogin}) {
  const [formParams, setFormParams] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { password, email } = formParams;
    handleLogin({ password, email });
  };

  return (
    <div className=" sign sign-in">
      <Link to="sign-up" className="sign__nav-button">
        Регистрация
      </Link>
      <h3 className="sign__heading">Вход</h3>
      <form
        name="sign-in"
        className="form form__type_sign form__type_sign_in"
        onSubmit={handleSubmit}
    
      >
        <fieldset className="form__input-container">
          <input
            type="email"
            name="email"
            className="form__input-area form__input-area_sign form__input-area_userEmail"
            id="userEmailLog"
            placeholder="Email"
            value={formParams.email}
            onChange={handleChange}
          />
          <span className="popup__error" id="error-userEmailLog"></span>

          <input
            type="password"
            name="password"
            className="form__input-area form__input-area_sign  form__input-area_password"
            id="passwordLog"
            placeholder="Пароль"
            value={formParams.password}
            onChange={handleChange}
          />
          <span className="popup__error" id="error-passwordLog"></span>
        </fieldset>

        <fieldset className="form__handlers form__handlers_sign">
          <button
            type="submit"
            name="sBtnSignIn"
            className="form__button form__button_sign"
          >
            Войти
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
