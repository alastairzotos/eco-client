// import loadable from '@loadable/component';
import * as React from 'react';

import { IPages } from '../../../core';

export default {
    // '/login': loadable(async () => import('./LoginPage')),
    // '/register': loadable(async () => import('./RegisterPage'))
    '/login': React.lazy(async () => import('./LoginPage/LoginPage')),
    '/register': React.lazy(async () => import('./RegisterPage/RegisterPage'))
} as IPages;
