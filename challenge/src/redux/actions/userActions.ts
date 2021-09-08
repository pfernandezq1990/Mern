import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types';

export const loginUser = ( userData: any, history: any ) => (dispatch: any ) => {
    dispatch({ type: LOADING_UI })

    const token = 'login successfully';
    localStorage.setItem('token', token);
}