import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function NaverCallback() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchNaverUserData = async (accessToken: any) => {
      let response = await fetch(`/auth/naver/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ accessToken, vendor: 'naver' }),
      });
      return response.json();
    };
    const accessToken = location.hash.split('=')[1].split('&')[0];

    fetchNaverUserData(accessToken).then(({ isOurUser }) => {
      if (isOurUser) {
        history.replace('/');
      } else {
        history.replace('/register');
      }
      // console.log(document.cookie);
    });
  }, [history, location.hash]);
  return <div></div>;
}
export default NaverCallback;
