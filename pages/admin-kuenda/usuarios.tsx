import React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowCircleDown, faCamera } from "@fortawesome/free-solid-svg-icons";
import KuendaCard, { KuendaCardTotalItem } from "../../components/KuendaCard";
import KuendaTable, { KuendaTableCell, KuendaTableHeader, KuendaTableHeaderRow, KuendaTableHeaderRowCell, KuendaTableRow } from "../../components/KuendaTable";
import { format } from "d3-format";
import Head from "next/head";
import KuendaBtnGroup from "../../components/KuendaBtnGroup";
import "dayjs/locale/pt";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js'
import localeData from "dayjs/plugin/localeData";

import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import KuendaProduto from "../../components/KuendaProduto";

dayjs.extend(relativeTime);
dayjs.extend(localeData);

export default function Produtos() {
    const [modalProdutoOpen, setModalProdutoOpen] = React.useState(false);
    const [modalAddOpen, setModalAddOpen] = React.useState(false);
    const [modalEditOpen, setModalEditOpen] = React.useState(false);
    const [modalReadOpen, setModalReadOpen] = React.useState(false);

    const mostrarModalProduto = () => {
        setModalProdutoOpen(true);
    }

    const fecharModalProduto = () => {
        setModalProdutoOpen(false);
    }

    const abrirModalAdd = () => {
        setModalAddOpen(true);
    }

    const fecharModalAdd = () => {
        setModalAddOpen(false);
    }

    const abrirModalEdit = () => {
        setModalEditOpen(true);
    }

    const fecharModalEdit = () => {
        setModalEditOpen(false);
    }

    const abrirModalRead = () => {
        setModalReadOpen(true);
    }

    const fecharModalRead = () => {
        setModalReadOpen(false);
    }

    return (
        <>
            <Head>
                <title>Usuários - Kuenda Delivery</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Layout activo="usuarios" titulo="Usuários" type="admin-kuenda">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2">
                            <button onClick={abrirModalAdd} className="bg-green-600 text-white py-2 px-4 rounded-full">Adicionar</button>
                        </div>
                        <hr />
                        <KuendaTable header={
                            <KuendaTableHeader>
                                <KuendaTableHeaderRow>
                                    <KuendaTableHeaderRowCell text="Nome" />
                                    <KuendaTableHeaderRowCell text="Tipo" />
                                    <KuendaTableHeaderRowCell text="Última sessão" />
                                    <KuendaTableHeaderRowCell text="Acções" />
                                </KuendaTableHeaderRow>
                            </KuendaTableHeader>
                        }>
                            <KuendaTableRow>
                                <KuendaTableCell text="John Dave (eu)" />
                                <KuendaTableCell text="Superadmin" align="text-left" />
                                <KuendaTableCell text="24/04/2022" align="text-left" />
                                <KuendaTableCell align="text-center">
                                    <div className="flex item-center justify-center">
                                        <button onClick={abrirModalRead} className="w-4 mr-2 transform btn-action-table" title="Ver mais">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button onClick={abrirModalEdit} className="w-4 mr-2 transform btn-action-table">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                        {/* <button className="w-4 mr-2 transform btn-action-table">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</button> */}
                                    </div>
                                </KuendaTableCell>
                            </KuendaTableRow>
                        </KuendaTable>
                    </div>
                </Layout>
            </div>
            <Rodal
                visible={modalAddOpen}
                onClose={fecharModalAdd}
                height={560}
                closeOnEsc
                style={{ minHeight: 0, paddingBottom: 10 }}
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Adicionar Usuário</div>
                    <div className="flex flex-col space-y-2">
                        <form className="flex flex-col space-y-2 overflow-y-auto relative" style={{ height: '31em' }}>
                            <>
                                <div className="flex flex-col space-y-2 mt-2 mb-4 px-1" style={{
                                    minHeight: 0
                                }}>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Informações básicas</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Nome</span>
                                            <input
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                        <button className="border-2 border-black rounded-full w-full text-center py-2">
                                            <FontAwesomeIcon icon={faCamera} color="black" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Contacto</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                            <input
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Localização</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Digite a sua localização aqui</span>
                                            <input
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Segurança</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                            <input
                                                type="password"
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
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
                    </div>
                </form>
            </Rodal>

            <Rodal
                visible={modalReadOpen}
                onClose={fecharModalRead}
                height={560}
                closeOnEsc
                style={{ minHeight: 0, paddingBottom: 10 }}
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Usuário</div>
                    <div className="flex flex-col space-y-2">
                        <form className="flex flex-col space-y-2 overflow-y-auto relative" style={{ height: '31em' }}>
                            <>
                                <div className="flex flex-col space-y-2 mt-2 mb-4 px-1" style={{
                                    minHeight: 0
                                }}>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Informações básicas</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Nome</span>
                                            <input
                                                readOnly
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                        <button className="border-2 border-black rounded-full w-full text-center py-2">
                                            <FontAwesomeIcon icon={faCamera} color="black" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Contacto</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                            <input
                                                readOnly
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Localização</h3>
                                        <div>
                                            {/* <span className="text-gray-700 dark:text-gray-400">Digite a sua localização aqui</span> */}
                                            <input
                                                readOnly
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Segurança</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                            <input
                                                type="password"
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="block text-sm my-2">
                                        <span className="text-gray-700 dark:text-gray-400">Confirme a Palavra-passe</span>
                                        <input
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder=""
                                        />
                                    </div> */}
                                    <button className="rounded-full w-full py-2 kuenda-bg" onClick={fecharModalRead}>Fechar</button>
                                </div>
                            </>
                        </form>
                    </div>
                </form>
            </Rodal>

            <Rodal
                visible={modalEditOpen}
                onClose={fecharModalEdit}
                height={560}
                closeOnEsc
                style={{ minHeight: 0, paddingBottom: 10 }}
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Editar Usuário</div>
                    <div className="flex flex-col space-y-2">
                        <form className="flex flex-col space-y-2 overflow-y-auto relative" style={{ height: '31em' }}>
                            <>
                                <div className="flex flex-col space-y-2 mt-2 mb-4 px-1" style={{
                                    minHeight: 0
                                }}>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Informações básicas</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Nome</span>
                                            <input
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                        <button className="border-2 border-black rounded-full w-full text-center py-2">
                                            <FontAwesomeIcon icon={faCamera} color="black" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Contacto</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Telefone</span>
                                            <input
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Localização</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Digite a sua localização aqui</span>
                                            <input
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 text-sm my-2">
                                        <h3 className="font-bold">Segurança</h3>
                                        <div>
                                            <span className="text-gray-700 dark:text-gray-400">Palavra-passe</span>
                                            <input
                                                type="password"
                                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder=""
                                            />
                                        </div>
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
                    </div>
                </form>
            </Rodal>
        </>
    )
}