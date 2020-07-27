import { IPages } from '~/core';

import AdminPage from './AdminPage/AdminPage';

export default {
    '/admin/:tab': AdminPage
} as IPages;
