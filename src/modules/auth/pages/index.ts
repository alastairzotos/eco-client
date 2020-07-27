import { IPages } from '~/core';

import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

export default {
    '/login': LoginPage,
    '/register': RegisterPage
} as IPages;
