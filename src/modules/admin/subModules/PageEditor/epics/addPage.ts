import { IPage } from '@ecocms/common';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { fetch$, IAction, IResponse } from '../../../../../core';
import {
    addPage,
    IAdminPageEditorActionType,
    setAddPageError
} from '../actions';

export const addPageEpic: Epic = action$ =>
    action$.ofType(IAdminPageEditorActionType.BeginAddPage).pipe(
        switchMap((action: IAction<IAdminPageEditorActionType, IPage>) => {
            return fetch$({
                method: 'POST',
                url: '/admin/pages/add',
                body: action.payload
            }).pipe(
                switchMap((res: IResponse<IPage>) => of(addPage(res.body))),
                catchError(() => of(setAddPageError())),
            );
        }),
    );
