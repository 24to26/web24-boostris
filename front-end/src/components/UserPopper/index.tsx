import React, { useEffect, useRef, useState } from 'react';
import Popper from '../../components/Popper';
import ProfileModal from '../ProfileModal';

export default function UserPopper({
  resetActivatedUser,
  profileState,
}: {
  resetActivatedUser: () => void;
  profileState: { x: number | null; y: number | null; nickname: string | null };
}) {
  const popperRef = useRef<any>();
  const [modal, setModal] = useState(false);
  const [popper, setPopper] = useState(true);

  const toggleModal = () => {
    if (modal) resetActivatedUser();
    setModal(!modal);
  };

  useEffect(() => {
    popperRef.current.setPosition(profileState.x, profileState.y);
    popperRef.current.open();
  }, [profileState]);

  const resetActivatedPopper = () => {
    popperRef.current.close();
    resetActivatedUser();
  };

  const clickProfile = () => {
    popperRef.current.close();
    toggleModal();
  };

  return (
    <>
      <div className="popper__overlay" onClick={resetActivatedPopper}>
        <Popper ref={popperRef}>
          <div className="popper__item" onClick={clickProfile}>
            프로필
          </div>
          <div className="popper__item">친구 추가</div>
        </Popper>
      </div>
      {modal && <ProfileModal nickname={profileState.nickname} toggleModal={toggleModal} />}
    </>
  );
}
