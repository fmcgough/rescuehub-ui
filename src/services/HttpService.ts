import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export class HttpService {
    // TODO constructor should pass in an API token to authenticate with

    private config: AxiosRequestConfig;

    constructor(token: string) {
        const port = window.location.port === '' ? '' : `:${window.location.port}`;
        this.config = {
            baseURL: `${window.location.protocol}//${window.location.hostname}${port}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        };
    }


    protected get<T>(url: string): AxiosPromise<T> {
        return axios.get(url, this.config);
    }
}
