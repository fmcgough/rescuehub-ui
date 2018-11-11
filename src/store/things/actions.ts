import { action } from 'typesafe-actions';
import { Thing, ThingActionTypes } from './types';

export const fetchRequest = () => action(ThingActionTypes.FETCH_REQUEST);

export const fetchSuccess = (things: Thing[]) => action(ThingActionTypes.FETCH_SUCCESS, things);
export const fetchError = (message: string) => action(ThingActionTypes.FETCH_ERROR, message);
