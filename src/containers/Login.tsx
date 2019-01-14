import * as React from 'react';
import { Link } from 'react-router-dom';

interface LoginButtonProps {
    link: string;
    name: string;
    iconClass: string;
}

const LoginButton: React.SFC<LoginButtonProps> = (props: LoginButtonProps) => (
    <form action={props.link} method='POST'>
        <input type='hidden' name='scope' value='public_profile' />
        <button type='submit' className='btn btn-icon btn-neutral'>
            <span className='btn-inner--icon'>
                <i className={`fa ${props.iconClass}`} />
            </span>
            <span className='btn-inner--text'>{props.name}</span>
        </button>
    </form>
);

export const Login: React.SFC<{}> = (props: {}) => {

    return (
    <section className='section section-lg'>
        <div className='container pt-lg-md'>
            <div className='row justify-content-center'>
                <div className='col-lg-5'>
                    <div className='card bg-secondary shadow border-0'>
                        <div className='card-body bg-white px-lg-5 py-lg-5'>
                            <div className='text-center text-muted mb-4'>
                                <small>Sign in with</small>
                            </div>
                            <div className='btn-wrapper text-center'>
                                <LoginButton
                                    link={`/api/signin/facebook`}
                                    name='Facebook'
                                    iconClass='fa-facebook-official' />
                                <LoginButton link='#'
                                    name='Google'
                                    iconClass='fa-google' />
                            </div>
                        </div>
                    </div>
                    <div className='row-mt-3'>
                        <div className='col-6'>
                            <Link to='#' className='text-light'>
                                <small>Forgot password?</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};
