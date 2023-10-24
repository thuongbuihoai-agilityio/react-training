import { memo, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input, { InputTheme, InputType } from '../../components/common/Input';
import Button, { ButtonType } from '../../components/common/Button';
import Text, { SizeType } from '../../components/common/Text';
import './login.css';
import { useMutation } from 'react-query';
import axios from 'axios';
import { ACCOUNT_URL } from '../../constants/url';
import { createMemoryHistory } from 'history';
import { setStorage } from '../../helpers/storage';

interface LoginProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = createMemoryHistory();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit, control } = useForm<LoginProps>();

  const loginMutation = useMutation((credentials: LoginProps) =>
    axios.post(ACCOUNT_URL, credentials)
  );

  const onSubmit = async () => {
    try {
      const email = emailRef.current?.value || '';
      const password = passwordRef.current?.value || '';
      const data = { email, password };
      const response = await loginMutation.mutateAsync(data);
      const token = response.data;
      console.log('token', token);

      setStorage('token', token);
      history.push('/');
      console.log('success');
    } catch (error: any) {
      // Handle error here
      console.log('catch');
      console.error('Login failed:', error.message);
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
              {error ? (
                <Input
                  label='Email'
                  type={error ? InputType.error : InputType.info}
                  theme={error ? InputTheme.error : InputTheme.info}
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
              {error ? (
                <Input
                  label='Password'
                  type={error ? InputType.error : InputType.info}
                  theme={error ? InputTheme.error : InputTheme.info}
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
