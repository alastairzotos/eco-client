import { IFile, IFilesAndFolders } from '@ecocms/common';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ICallStatus } from '~/core';

import { IAdminFilesActionTypes } from '../actions';
import { IFilesViewStyle } from '../models';

export interface IAdminFilesState {
    uploadStatus: ICallStatus | null;
    getFilesFoldersStatus: ICallStatus | null;
    filesAndFolders: IFilesAndFolders;
    currentPath: string;
    filesViewStyle: IFilesViewStyle;
    previewId: string | null;
    fileUpdateStatus: ICallStatus | null;
}

const INITIAL_STATE: IAdminFilesState = {
    uploadStatus: null,
    getFilesFoldersStatus: null,
    filesAndFolders: {
        files: [],
        folders: []
    },
    currentPath: '/',
    filesViewStyle: 'list',
    previewId: null,
    fileUpdateStatus: null
};

export const filesReducer = createReducer<IAdminFilesState>(INITIAL_STATE, {
    [IAdminFilesActionTypes.BeginUploadFiles]: state => ({
        ...state,
        uploadStatus: 'fetching'
    }),
    [IAdminFilesActionTypes.SetFilesUploaded]: state => ({
        ...state,
        uploadStatus: 'success'
    }),
    [IAdminFilesActionTypes.SetFilesUploadError]: state => ({
        ...state,
        uploadStatus: 'error'
    }),

    [IAdminFilesActionTypes.BeginGetFilesAndFolders]: state => ({
        ...state,
        getFilesFoldersStatus: 'fetching'
    }),
    [IAdminFilesActionTypes.SetFilesAndFolders]: (state, action: PayloadAction<IFilesAndFolders>) => ({
        ...state,
        getFilesFoldersStatus: 'success',
        filesAndFolders: action.payload
    }),
    [IAdminFilesActionTypes.SetGetFilesAndFoldersError]: state => ({
        ...state,
        getFilesFoldersStatus: 'error'
    }),

    [IAdminFilesActionTypes.SetCurrentPath]: (state, action: PayloadAction<string>) => ({
        ...state,
        currentPath: action.payload
    }),

    [IAdminFilesActionTypes.SetFilesViewStyle]: (state, action: PayloadAction<IFilesViewStyle>) => ({
        ...state,
        filesViewStyle: action.payload
    }),

    [IAdminFilesActionTypes.PreviewFile]: (state, action: PayloadAction<IFile>) => ({
        ...state,
        previewId: action.payload && action.payload._id
    }),

    [IAdminFilesActionTypes.BeginUpdateFile]: state => ({
        ...state,
        fileUpdateStatus: 'fetching'
    }),
    [IAdminFilesActionTypes.SetFile]: (state, action: PayloadAction<IFile>) => ({
        ...state,
        fileUpdateStatus: 'success',
        filesAndFolders: {
            ...state.filesAndFolders,
            files: state.filesAndFolders.files
                .map(file =>
                    file._id === action.payload._id
                    ? action.payload
                    : file
                )
        }
    }),
    [IAdminFilesActionTypes.SetUpdateFileError]: state => ({
        ...state,
        fileUpdateStatus: 'error'
    })
});
