import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function Auth() {
  const [username, setUsername] = React.useState(localStorage.getItem('username'));
  const [isUsernameEdit, setUsernameEdit] = React.useState(false);
  const [isAuth, setAuth] = React.useState(localStorage.getItem('isAuth') === 'true');
  const [isVisiblePopUp, setVisiblePopUp] = React.useState(false);
  const checkboxEl = React.useRef(null);
  const loginEl = React.useRef(null);
  const passEl = React.useRef(null);
  const popUpStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: '20%',
      left: '38.5%',
      right: '38.5%',
      bottom: '20%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '8px',
      outline: 'none',
      padding: '20px',
    },
  };

  const changeName = () => {
    if (!username.trim()) {
      setUsername(localStorage.getItem('username'));
    } else {
      const trimmedUsername = username.trim();
      setUsername(trimmedUsername);
      localStorage.setItem('username', trimmedUsername);
    }

    setUsernameEdit(false);
  };

  const editUsername = () => {
    setUsernameEdit(true);
  };

  const toggleVisiblePopUp = () => {
    setVisiblePopUp(!isVisiblePopUp);
  };

  const logIn = () => {
    if (loginEl.current.value.trim() && passEl.current.value.trim()) {
      setAuth(true);
      setVisiblePopUp(!isVisiblePopUp);
      if (checkboxEl.current.checked) {
        localStorage.setItem('isAuth', 'true');
      }
    }
  };

  const logOut = () => {
    setAuth(false);
    localStorage.setItem('isAuth', 'false');
  };

  return (
    <div>
      {!isAuth && (
        <button className="auth-button" onClick={toggleVisiblePopUp}>
          <span className="auth-button__text">Войти</span>
        </button>
      )}
      {isAuth && (
        <div>
          {!isUsernameEdit && (
            <span className="username" onClick={editUsername}>
              {username || 'Константин К.'}
            </span>
          )}
          {isUsernameEdit && (
            <input
              pattern=" *[а-яА-ЯёЁa-zA-Z0-9]+[а-яА-ЯёЁa-zA-Z0-9 ]*"
              required
              className="username-input"
              type="text"
              value={username}
              maxLength="15"
              onChange={(event) => setUsername(event.target.value)}
              onBlur={changeName}
            />
          )}
          <button className="unauth-button" onClick={logOut}>
            <span className="unauth-button__text">Выйти</span>
          </button>
        </div>
      )}
      <form>
        <Modal isOpen={isVisiblePopUp} onRequestClose={toggleVisiblePopUp} style={popUpStyle}>
          <h2 className="pop-up__name">Вход</h2>
          <input
            ref={loginEl}
            className="pop-up__text-login"
            type="text"
            placeholder="Логин"
            maxLength="15"
            pattern=" *[а-яА-ЯёЁa-zA-Z0-9]+[а-яА-ЯёЁa-zA-Z0-9 ]*"
            required
          />
          <input
            ref={passEl}
            className="pop-up__text-passwd"
            type="password"
            placeholder="Пароль"
            maxLength="15"
            pattern=" *[а-яА-ЯёЁa-zA-Z0-9]+[а-яА-ЯёЁa-zA-Z0-9 ]*"
            required
          />
          <label className="pop-up__checkbox-label">
            <input ref={checkboxEl} className="pop-up__checkbox-input" type="checkbox"></input>
            <span className="pop-up__checkbox-custom pop-up__rectangular"></span>
            Запомнить
          </label>
          <button className="auth-button" onClick={logIn}>
            <span className="auth-button__text">Войти</span>
          </button>
        </Modal>
      </form>
    </div>
  );
}

export default Auth;
