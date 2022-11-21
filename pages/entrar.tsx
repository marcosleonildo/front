import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function Login() {
    return (
        <>
            <Head>
                <title>Iniciar Sessão - Kuenda Delivery</title>
                <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></Script>
                <Script src="/assets/js/init-alpine.js"></Script>
            </Head>
            <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <div className="flex flex-col overflow-y-auto md:flex-row">
                        <div className="relative block bg-red-600 h-auto md:h-auto md:w-1/2 bg-cover" style={{ backgroundImage: 'url(/assets/img/login-office.jpeg)', backgroundPosition: 'right 45% bottom 15%' }}>
                            {/* <Image aria-hidden="true" className="flex-auto" src="/assets/img/login-office.jpeg" alt="Office" width="100%" height="100%" layout="fill" /> */}
                            {/* <Image aria-hidden="true" className="hidden object-cover w-full h-full" src="/assets/img/login-office-dark.jpeg" alt="Office dark" width="100%" height="100%" /> */}
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <div className="flex justify-center items-center mb-4">
                                    <img src="/assets/img/logo.png" className="w-52" />
                                </div>
                                <h1 className="mb-4 text-2xl text-center font-semibold text-gray-700 dark:text-gray-200">
                                    Iniciar Sessão
                                </h1>
                                <div className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="ex: carlosjose@exemplo.com"
                                    />
                                </div>
                                <div className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                    <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="***************" type="password" />
                                </div>
                                <div>
                                    {/* You should use a button here, as the anchor is only used for the example  */}
                                    <a className="kuenda-btn block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-orange" href="/admin">
                                        Entrar
                                    </a>
                                    <hr className="my-8" />
                                    <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                        {/* <svg className="w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg> */}
                                        <svg className="w-5 h-5 mr-2 pt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                        </svg>
                                        Iniciar Sessão com Google
                                    </button>
                                    {/* <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                            <svg className="w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                                            </svg>
                                            Twitter
                                        </button> */}
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="mt-4 py-1">
                                            <Link className="text-sm font-medium text-black dark:text-white-400 hover:underline" href="/recuperar-palavra-passe">
                                                Esqueceu a sua palavra-passe?
                                            </Link>
                                        </div>
                                        <div className="mt-1 py-1">
                                            <Link className="text-sm font-medium text-black dark:text-white-400 hover:underline" href="/cadastrar">
                                                Criar uma nova conta
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}