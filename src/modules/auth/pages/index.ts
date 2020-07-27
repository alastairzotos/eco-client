// import loadable from '@loadable/component';
import * as React from 'react';

import { IPages } from '../../../core';

import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

export default {
    // '/login': loadable(async () => import('./LoginPage')),
    // '/register': loadable(async () => import('./RegisterPage'))
    '/login': LoginPage,
    '/register': RegisterPage
} as IPages;
