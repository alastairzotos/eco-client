// import loadable from '@loadable/component';
import * as React from 'react';

import { IPages } from '../../../core';

export default {
    // '/': loadable(async () => import('./StaticPage')),
    // '*': loadable(async () => import('./StaticPage')),
    '/': React.lazy(async () => import('./StaticPage')),
    '*': React.lazy(async () => import('./StaticPage')),
} as IPages;
