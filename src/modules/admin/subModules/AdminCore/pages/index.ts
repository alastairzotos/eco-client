// import loadable from '@loadable/component';

import { IPages } from '../../../../../core';

import AdminPage from './AdminPage/AdminPage';

export default {
    // '/admin/:tab': loadable(async () => import('./AdminPage')),
    '/admin/:tab': AdminPage
} as IPages;
