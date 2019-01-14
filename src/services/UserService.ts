import { User, UserWithToken, Context } from '../store/users/types';
import { HttpService } from './HttpService';

export class UserService extends HttpService {

    constructor(token: string) {
        super(token);
    }

    getContext(): Promise<UserWithToken> {
        return super.get<Context>('/api/core/context').
            then(response => {
                const user = response.data.user as User;
                const token = response.headers['lemon-authorization'];
                return { user, token };
            });
    }

}
