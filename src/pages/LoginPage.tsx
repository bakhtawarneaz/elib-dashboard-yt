import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/http/api';
//import useTokenStore from '@/store';
//import { useMutation } from '@tanstack/react-query';
import { LoaderCircle } from 'lucide-react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
   // const setToken = useTokenStore((state) => state.setToken);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // const mutation = useMutation({
    //     mutationFn: login,
    //     onSuccess: (response) => {
    //         setToken(response.data.accessToken);
    //         navigate('/dashboard/home');
    //     },
    // });

    // const handleLoginSubmit = () => {
    //     const email = emailRef.current?.value;
    //     const password = passwordRef.current?.value;
    //     console.log('data', { email, password });

    //     if (!email || !password) {
    //         return alert('Please enter email and password');
    //     }

    //     mutation.mutate({ email, password });
    // };
    return (
        <section className="h-screen login-wrap py-10">
            <div className='header-logo-wrap'>
                <img src={"/src/assets/logo.png"} />
            </div>
           <div className='login-inner-wrap flex justify-center items-center'> 
                <Card className="w-full max-w-sm remove-style">
                    <CardHeader>
                        <div className='flex justify-center text-center mb-3'>
                            <img src={"/src/assets/fav.png"} />
                        </div>
                        <CardTitle className="text-2xl text-center">Log in to your account</CardTitle>
                        <CardDescription className='text-center'>
                        Welcome back! Please enter your details. <br />
                            {/* {mutation.isError && (
                                <span className="text-red-500 text-sm">{'Something went wrong'}</span>
                            )} */}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                ref={emailRef}
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input ref={passwordRef} id="password" placeholder="**********" type="password" required />
                        </div>
                        <div className='forgot-password text-right'>
                            <Link to={'/auth/login'}>forgot password</Link>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="w-full">
                            {/* <Button
                                onClick={handleLoginSubmit}
                                className="w-full"
                                disabled={mutation.isPending}>
                                {mutation.isPending && <LoaderCircle className="animate-spin" />}

                                <span className="ml-2">Sign in</span>
                            </Button> */}
                            <Button
                                //onClick={handleLoginSubmit}
                                className="w-full login-btn-1">

                                <Link to={'/dashboard/home'} className="underline">Sign in</Link>
                            </Button>

                            {/* <Link to={'/dashboard/home'} className="login-btn-1">Sign in</Link> */}

                            <Button className="w-full mt-3 login-btn-2">
                                <span className="ml-2">Sign in with SSO</span>
                            </Button>

                            {/* <div className="mt-4 text-center text-sm">
                                Don't have an account?{' '}
                                <Link to={'/auth/register'} className="underline">
                                    Sign up
                                </Link>
                            </div> */}
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};

export default LoginPage;
