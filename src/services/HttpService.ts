import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export class HttpService {
    // TODO constructor should pass in an API token to authenticate with

    private config: AxiosRequestConfig;

    constructor() {
        const port = window.location.port === '' ? '' : `:${window.location.port}`;
        this.config = {
            // TODO get this from config somehow
            baseURL: `${window.location.protocol}//${window.location.hostname}${port}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
    }


    protected get<T>(url: string): AxiosPromise<T> {
        return axios.get(url, this.config);
    }
}
