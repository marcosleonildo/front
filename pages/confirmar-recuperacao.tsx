import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function ConfirmarRecuperacao() {
    return (
        <>
            <Head>
                <title>Confirmar Recuperação - Kuenda Delivery</title>
                <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></Script>
                <Script src="/assets/js/init-alpine.js"></Script>
            </Head>
            <>
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
                                        Confirmar Recuperacao
                                    </h1>
                                    <div className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Código de Confirmação</span>
                                        <input
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        {/* You should use a button here, as the anchor is only used for the example  */}
                                        <a className="kuenda-btn block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-orange" href="../index.html">
                                            Continuar
                                        </a>
                                        <hr className="my-8" />
                                        {/* <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                            <svg className="w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                                            </svg>
                                            Twitter
                                        </button> */}
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="mt-4 py-1">
                                                <Link className="text-sm font-medium text-black dark:text-white-400 hover:underline" href="/entrar">
                                                    Iniciar sessão
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
        </ >
    )
}