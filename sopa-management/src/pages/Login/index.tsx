import { memo, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input, { InputTheme, InputType } from '../../components/common/Input';
import Button, { ButtonType } from '../../components/common/Button';
import Text, { SizeType } from '../../components/common/Text';
import { createMemoryHistory } from 'history';
import { useFetchUser } from '../../hooks/useQuery';
import { Account } from '../../interfaces/account';
import './login.css';
import { setStorage } from '../../helpers/storage';
import { checkLogin } from '../../helpers/common';

const Login: React.FC = () => {
  const history = createMemoryHistory();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { data } = useFetchUser();
  const { register, handleSubmit, control } = useForm<Account>();

  const onSubmit = async () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    if (checkLogin(data, email, password)) {
      history.push('/');
      setStorage('token', {
        email,
        password
      })
      console.log('Login successful!');
    } else {
      setEmailError(true);
      setPasswordError(true);
      console.log('Invalid email or password. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <Text text='Login' type={SizeType.extraMedium} />
      <div className='form-input'>
        <Controller
          name='email'
          control={control}
          render={({ fieldState: { error } }) => (
            <div className='form-email'>
              {emailError ? (
                <Input
                  label='Email'
                  type={emailError ? InputType.error : InputType.info}
                  theme={emailError ? InputTheme.error : InputTheme.info}
                />
              ) : (
                <Input
                  label='Email'
                  ref={(e) => {
                    register('email');
                    emailRef.current = e;
                  }}
                  type={InputType.default}
                />
              )}
            </div>
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ fieldState: { error } }) => (
            <div className='form-password'>
              {passwordError ? (
                <Input
                  label='Password'
                  type={passwordError ? InputType.error : InputType.info}
                  theme={passwordError ? InputTheme.error : InputTheme.info}
                />
              ) : (
                <Input
                  label='Password'
                  ref={(e) => {
                    register('password');
                    passwordRef.current = e;
                  }}
                  type={InputType.default}
                />
              )}
            </div>
          )}
        />
        <Button children='Login' type={ButtonType.tertiary} submit='submit' />
      </div>
    </form>
  );
};

export default memo(Login);
