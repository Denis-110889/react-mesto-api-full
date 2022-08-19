import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
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
    props.handleRegister({ password, email });
  };

  return (
    <div className=" sign sign-up">
      <Link to="sign-in" className="sign__nav-button">
        {" "}
        Войти
      </Link>
      <h3 className="sign__heading">Регистрация</h3>
      <form
        name="sign-up"
        className="form form__type_sign form__type_sign_up"
        onSubmit={handleSubmit}
      >
        <fieldset className="form__input-container">
          <input
            type="email"
            name="email"
            className="form__input-area
              form__input-area_sign 
              form__input-area_userEmail"
            id="userEmailReg"
            placeholder="Email"
            value={formParams.email}
            onChange={handleChange}
          />
          <span className="popup__error" id="error-userEmailReg"></span>

          <input
            type="password"
            name="password"
            className="form__input-area 
            form__input-area_sign 
            form__input-area_password"
            id="passwordReg"
            placeholder="Пароль"
            value={formParams.password}
            onChange={handleChange}
          />
          <span className="popup__error" id="error-passwordReg"></span>
        </fieldset>

        <fieldset
          className="form__handlers
          form__handlers_sign"
        >
          <button
            type="submit"
            name="sBtnSignUp"
            className="form__button form__button_sign"
          >
            Зарегистрироваться
          </button>
        </fieldset>

        <div className="form__signin">
          <p>Уже зарегистрированы?</p>
          <Link to="sign-in" className="form__login-link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
