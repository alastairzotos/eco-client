// import loadable from '@loadable/component';
import * as React from 'react';

import { IPages } from '../../../../../core';

export default {
    // '/admin/:tab': loadable(async () => import('./AdminPage')),
    '/admin/:tab': React.lazy(() => import('./AdminPage/AdminPage')),
} as IPages;
