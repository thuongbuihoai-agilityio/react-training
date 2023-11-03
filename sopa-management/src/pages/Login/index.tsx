import {
  memo,
  useEffect,
  useRef
} from 'react';
import {
  useForm,
  Controller
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Components
import Input from '@components/common/Input';
import Button,
{
  ButtonType
} from '@components/common/Button';
import Text,
{
  SizeType
} from '@components/common/Text';

// Hooks
import { useFetchUser } from '@hooks/useQuery';

// Interfaces
import { Account } from '@interfaces/account';

// Helpers
import { setStorage } from '@helpers/storage';
import { VALIDATE } from '@helpers/validate';

// Stores
import { useAccountStore } from '@stores/login';

// Constants
import { STORAGE_KEY } from '@constants/common';
import { CONFIRM_MESSAGE, ERROR_MESSAGES } from '@constants/validate';

// Styles
import './login.css';
import {
  CheckType,
  checkAccount,
  checkValidationStyles
} from '@helpers/login';

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { data } = useFetchUser();
  const {
    isIncorrectEmail,
    isIncorrectPassword,
    setIsIncorrectEmail,
    setIsIncorrectPassword,
  } = useAccountStore();

  const resetErrors = () => {
    setIsIncorrectEmail(false);
    setIsIncorrectPassword(false);
  };

  useEffect(() => {
    resetErrors();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<Account>();

  const {
    style: styleEmail,
    theme: themeEmail
  } = checkValidationStyles(isIncorrectEmail, errors.email, isDirty);

  const {
    style: stylePassword,
    theme: themePassword
  } = checkValidationStyles(isIncorrectPassword, errors.password, isDirty);

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const checkCorrectEmail = checkAccount(data, email, '', CheckType.email);
    const checkCorrectPassword = checkAccount(data, '', password, CheckType.password);

    if (checkAccount(data, email, password, CheckType.login)) {
      navigate('/');
      setStorage(STORAGE_KEY.TOKEN, {
        email,
        password
      });

      toast.success(CONFIRM_MESSAGE.LOGIN_SUCCESS);
      setIsIncorrectEmail(!!checkCorrectEmail);
      setIsIncorrectPassword(!!checkCorrectPassword)
    } else {
      setIsIncorrectEmail(!checkCorrectEmail);
      setIsIncorrectPassword(!checkCorrectPassword)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form' data-testid='login'>
      <Text text='Login' type={SizeType.extraMedium} />
      <div className='form-input'>
        <Controller
          name='email'
          control={control}
          rules={VALIDATE.email}
          render={({ field }) => (
            <div className='form-email'>
              <Input
                {...field}
                id='email'
                label='Email'
                htmlFor='email'
                ref={(e) => {
                  register('email');
                  emailRef.current = e;
                }}
                style={styleEmail}
                theme={themeEmail}
                onBlur={resetErrors}
              />
              {errors?.email && <Text text={(errors.email.message)} className='form-error' />}
              {isIncorrectEmail && <Text text={ERROR_MESSAGES.EMAIL_NOT_EXIST} className='form-error' />}
            </div>
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={VALIDATE.password}
          render={({ field }) => (
            <div className='form-password'>
              <Input
                {...field}
                id='password'
                label='Password'
                htmlFor='password'
                type='password'
                ref={(e) => {
                  register('password');
                  passwordRef.current = e;
                }}
                style={stylePassword}
                theme={themePassword}
                onBlur={resetErrors}
              />
              {errors?.password && <Text text={(errors.password.message)} className='form-error' />}
              {isIncorrectPassword && <Text text={ERROR_MESSAGES.PASSWORD_INCORRECT} className='form-error' />}
            </div>
          )}
        />
        <Button
          ariaLabel='Login'
          children='Login'
          type={ButtonType.tertiary}
          submit='submit'
        />
      </div>
    </form>
  );
};

export default memo(Login);
