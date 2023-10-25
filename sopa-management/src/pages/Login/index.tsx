import { memo, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input, { InputTheme, InputType } from '../../components/common/Input';
import Button, { ButtonType } from '../../components/common/Button';
import Text, { SizeType } from '../../components/common/Text';
import { useFetchUser } from '../../hooks/useQuery';
import { Account } from '../../interfaces/account';
import './login.css';
import { setStorage } from '../../helpers/storage';
import { checkLogin } from '../../helpers/common';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { data } = useFetchUser();
  const { register, handleSubmit, control, formState: { errors } } = useForm<Account>();
  console.log('errors.email', errors.email);
  

  const onSubmit = async () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    console.log('isValidate', email, password);

    if (checkLogin(data, email, password)) {
      navigate('/');
      setStorage('token', {
        email,
        password
      })
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <Text text='Login' type={SizeType.extraMedium} />
      <div className='form-input'>
        <Controller
          name='email'
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          }}
          render={() => (
            <div className='form-email'>
              <Input
                label='Email'
                ref={(e) => {
                  register('email');
                  emailRef.current = e;
                }}
                type={
                  emailError ? InputType.error : (errors.email && errors.email.type === 'pattern') ? InputType.info : InputType.default
                }
                theme={
                  emailError ? InputTheme.error : (errors.email && errors.email.type === 'pattern') ? InputTheme.info : InputTheme.default
                }
              />
              {/* {emailError ? (
                <Input
                  label='Email'
                  type={InputType.error}
                  theme={InputTheme.error}
                />
              ) : (
                <Input
                  label='Email'
                  ref={(e) => {
                    register('email');
                    emailRef.current = e;
                  }}
                    type={true ? InputType.info : InputType.default}
                    theme={true ? InputTheme.info : InputTheme.default}
                />
              )} */}
            </div>
          )}
        />

        <Controller
          name='password'
          control={control}
          render={() => (
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
