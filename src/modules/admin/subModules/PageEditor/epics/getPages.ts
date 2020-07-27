import { IPage } from '@ecocms/common';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { fetch$, IResponse } from '~/core';

import {
    IAdminPageEditorActionType,
    setGetPagesError,
    setPages
} from '../actions';

export const getPagesEpic: Epic = action$ =>
    action$.ofType(IAdminPageEditorActionType.BeginGetPages).pipe(
        switchMap(() => {
            return fetch$({
                method: 'GET',
                url: '/admin/pages/get'
            }).pipe(
                switchMap((res: IResponse<IPage[]>) => of(setPages(res.body))),
                catchError(() => of(setGetPagesError())),
            );
        }),
    );
