import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/Routekey';
const useLogin = () => {
  const Navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [passwork, setPasswork] = useState('');
  const onChangeUserName = (value: string) => {
    setUserName(value);
  };

  const onChangePasswork = (value: string) => {
    setPasswork(value);
  };

  const onSubmit = () => {
    Navigation.navigate(SCREEN.BOTTOM_TAB);
  };

  return {userName, onChangeUserName, passwork, onChangePasswork, onSubmit};
};
export default useLogin;

//()=>(Navigation.navigate(SCREEN.HOME_SCREEN))
