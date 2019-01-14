import { Thing } from '../store/things/types';
import { HttpService } from './HttpService';

export class ThingService extends HttpService {

    constructor(token: string) {
        super(token);
    }

    getThings(): Promise<Thing[]> {
        return super.get('/api/things').then(response => response.data as Thing[]);
    }
}
