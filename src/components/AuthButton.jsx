import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function AuthButton() {
  const [username, setUsername] = React.useState(localStorage.getItem('username'));
  const [isUsernameEdit, setUsernameEdit] = React.useState(false);
  const [isAuth, setAuth] = React.useState(false);
  const [isVisiblePopUp, setVisiblePopUp] = React.useState(false);

  const changeName = () => {
    setUsername(username);
    setUsernameEdit(false);
    localStorage.setItem('username', username);
  };

  const editUsername = () => {
    setUsernameEdit(true);
  };

  const toggleVisiblePopUp = () => {
    setVisiblePopUp(!isVisiblePopUp);
  };

  const logIn = () => {
    setAuth(true);
    setVisiblePopUp(!isVisiblePopUp);
  };

  const logOut = () => {
    setAuth(false);
  };

  return (
    <div className="sort">
      {!isAuth && (
        <button className="auth-button" onClick={toggleVisiblePopUp}>
          <span>Войти</span>
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
              className="username-input"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              onBlur={changeName}
            />
          )}
          <button className="unauth-button" onClick={logOut}>
            <span>Выйти</span>
          </button>
        </div>
      )}
      <Modal
        isOpen={isVisiblePopUp}
        onRequestClose={toggleVisiblePopUp}
        style={{
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
            left: '38%',
            right: '38%',
            bottom: '20%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '8px',
            outline: 'none',
            padding: '20px',
          },
        }}>
        <h2 className="pop-up__name">Вход</h2>
        <input className="pop-up__text-login" type="text" placeholder="Логин" />
        <input className="pop-up__text-passwd" type="text" placeholder="Пароль" />
        <label className="pop-up__checkbox-label">
          <input type="checkbox"></input>
          <span className="pop-up__checkbox-custom pop-up__rectangular"></span>
          Запомнить
        </label>
        <button className="auth-button" onClick={logIn}>
          <span>Войти</span>
        </button>
      </Modal>
    </div>
  );
}

export default AuthButton;
