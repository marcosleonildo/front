
import React from 'react';
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import KuendaCard, { KuendaCardTotalItem } from "../../components/KuendaCard";
import KuendaTable, { KuendaTableCell, KuendaTableHeader, KuendaTableHeaderRow, KuendaTableHeaderRowCell, KuendaTableRow } from "../../components/KuendaTable";
import { format } from "d3-format";
import Head from "next/head";
import Link from "next/link";
import Rodal from "rodal";
import 'rodal/lib/rodal.css';

export default function Clientes() {
    const [modalAdClienteOpen, setModalAdClienteOpen] = React.useState(false);
    const [modalVerClienteOpen, setModalVerClienteOpen] = React.useState(false);
    const [modalEditarClienteOpen, setModalEditarClienteOpen] = React.useState(false);

    const mostrarModalAdCliente = () => {
        setModalAdClienteOpen(true);
    }

    const fecharModalAdCliente = () => {
        setModalAdClienteOpen(false);
    }

    const mostrarModalVerCliente = () => {
        setModalVerClienteOpen(true);
    }

    const fecharModalVerCliente = () => {
        setModalVerClienteOpen(false);
    }

    const mostrarModalEditarCliente = () => {
        setModalEditarClienteOpen(true);
    }

    const fecharModalEditarCliente = () => {
        setModalEditarClienteOpen(false);
    }

    return (
        <>
            <Head>
                <title>Estafetas - Kuenda Delivery</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Layout activo="estafetas" titulo="Estafetas" type="admin-kuenda">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2">
                            <button onClick={mostrarModalAdCliente} className="bg-green-600 text-white py-2 px-5 rounded-full">Adicionar</button>
                            <button onClick={mostrarModalAdCliente} className="bg-gray-200 text-black py-2 px-5 rounded-full">Ver Pendentes</button>
                        </div>
                        <hr />
                        <KuendaTable header={
                            <KuendaTableHeader>
                                <KuendaTableHeaderRow>
                                    <KuendaTableHeaderRowCell text="Nome" />
                                    <KuendaTableHeaderRowCell text="Última entrega" />
                                    <KuendaTableHeaderRowCell text="Total de Entregas" />
                                    <KuendaTableHeaderRowCell text="Lojas mais freq." align="text-left" />
                                    <KuendaTableHeaderRowCell text="Acção" align="text-left" />
                                </KuendaTableHeaderRow>
                            </KuendaTableHeader>
                        }>
                            <KuendaTableRow>
                                <KuendaTableCell text="John Doe" />
                                <KuendaTableCell text={'24/04/2022'} />
                                <KuendaTableCell text={23} align="text-left" />
                                <KuendaTableCell text="Pizzaria" />
                                <KuendaTableCell>
                                    <div className="flex item-center justify-center">
                                        <button onClick={mostrarModalVerCliente} className="w-4 mr-2 transform btn-action-table" title="Ver mais">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <button onClick={mostrarModalEditarCliente} className="w-4 mr-2 transform btn-action-table" title="Ver mais">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* <div className="flex item-center justify-center">
										<button className="w-4 mr-2 transform btn-action-table" title="Ver mais">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</button>
									</div> */}
                                </KuendaTableCell>
                            </KuendaTableRow>
                        </KuendaTable>
                    </div>
                </Layout>
            </div>
            <Rodal
                visible={modalAdClienteOpen}
                onClose={fecharModalAdCliente}
                height={560}
                closeOnEsc
                style={{ minHeight: 0, paddingBottom: 10 }}
            >
                <div className="font-bold text-lg">Adicionar Cliente</div>
                <form className="flex flex-col space-y-2 overflow-y-auto min-h-0 relative" style={{ height: '93%' }}>
                    <>
                        <div className="flex flex-col space-y-2mt-2 mb-4 px-1" style={{
                            minHeight: 0
                        }}>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Nome da empresa</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Nome do responsável</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">NIF</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <br />
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">E-mail</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Endereço</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <br />
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Confirme a Palavra-passe</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <button className="rounded-full w-full py-2 kuenda-bg">Criar Conta</button>
                        </div>
                    </>
                </form>
            </Rodal>

            <Rodal
                visible={modalVerClienteOpen}
                onClose={fecharModalVerCliente}
                height={560}
                closeOnEsc
                style={{ minHeight: 0, paddingBottom: 10 }}
            >
                <div className="font-bold text-lg">Ver Cliente</div>
                <form className="flex flex-col space-y-2 overflow-y-auto min-h-0 relative" style={{ height: '93%' }}>
                    <>
                        <div className="flex flex-col space-y-2mt-2 mb-4 px-1" style={{
                            minHeight: 0
                        }}>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Nome da empresa</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Nome do responsável</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">NIF</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <br />
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">E-mail</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Endereço</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <br />
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Confirme a Palavra-passe</span>
                                <input
                                    readOnly
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <button className="rounded-full w-full py-2 kuenda-bg">Fechar</button>
                        </div>
                    </>
                </form>
            </Rodal>

            <Rodal
                visible={modalEditarClienteOpen}
                onClose={fecharModalEditarCliente}
                height={560}
                closeOnEsc
                style={{ minHeight: 0, paddingBottom: 10 }}
            >
                <div className="font-bold text-lg">Editar Cliente</div>
                <form className="flex flex-col space-y-2 overflow-y-auto min-h-0 relative" style={{ height: '93%' }}>
                    <>
                        <div className="flex flex-col space-y-2mt-2 mb-4 px-1" style={{
                            minHeight: 0
                        }}>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Nome da empresa</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Nome do responsável</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">NIF</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <br />
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">E-mail</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Endereço</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <br />
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <div className="block text-sm my-2">
                                <span className="text-gray-700 dark:text-gray-400">Confirme a Palavra-passe</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder=""
                                />
                            </div>
                            <button className="rounded-full w-full py-2 kuenda-bg">Guardar Alterações</button>
                        </div>
                    </>
                </form>
            </Rodal>
        </>
    )
}