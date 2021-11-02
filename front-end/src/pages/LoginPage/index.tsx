import { useRef } from 'react';
import Modal from '../../components/Modal';
import NaverLogin from '../../components/naver';
import OauthLoginButton from '../../components/OauthLoginButton';
import { OAUTH_LIST, OAUTH_LIST_INDEX } from '../../constants';
import './style.scss';

function LoginPage() {
  const modalRef = useRef<any>();
  const button = [useRef(), useRef(), useRef()];

  return (
    <div className="login__root full__page--root">
      <div>
        <img src="assets/logo.png" alt="" />
      </div>
      <p className="login__title">SELECT Login Button</p>
      {OAUTH_LIST.map((name, idx) => (
        <OauthLoginButton
          key={name}
          name={name}
          handleClick={() => modalRef.current.open()}
          button={button[idx]}
        >
          {name}
        </OauthLoginButton>
      ))}
      <p className="login__title">
        (C) Attendance starts from the first number
      </p>
      <Modal ref={modalRef}>hello</Modal>
      <NaverLogin button={button[OAUTH_LIST_INDEX['naver']]} />
    </div>
  );
}

export default LoginPage;
