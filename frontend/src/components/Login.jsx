import { useState } from "react";

function Login({ onLogin, loader }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmitForm(evt) {
        evt.preventDefault()
        onLogin({ password, email })
    }

    return (
        <section className='auth'>
            <h2 className='auth__title'>Вход</h2>
            <form 
                className='auth__form' 
                name='login' 
                onSubmit={handleSubmitForm}
            >
                <input
                    className="auth__input auth__input_email"
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    className="auth__input auth__input_password"
                    type="password"
                    placeholder='Пароль'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete='off'
                    required
                    minLength='4'
                />
                <button 
                    className="auth__submit link" 
                    type="submit">{loader ? "Вход..." : "Войти"}
                </button>
            </form>
        </section>
    )
}

export default Login;