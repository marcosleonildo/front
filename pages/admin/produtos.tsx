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
    const [modalNovoProdutoOpen, setModalNovoProdutoOpen] = React.useState(false);

    const mostrarModalProduto = () => {
        setModalProdutoOpen(true);
    }

    const fecharModalProduto = () => {
        setModalProdutoOpen(false);
    }


    const mostrarModalNovoProduto = () => {
        setModalNovoProdutoOpen(true);
    }

    const fecharModalNovoProduto = () => {
        setModalNovoProdutoOpen(false);
    }

    return (
        <>
            <Head>
                <title>Produtos - Kuenda Delivery</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Layout activo="produtos" titulo="Produtos" type="cliente-kuenda">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2">
                            <button onClick={mostrarModalNovoProduto} className="bg-green-600 text-white py-2 px-4 rounded-full">Adicionar Novo</button>
                        </div>
                        <hr />
                        <KuendaTable header={
                            <KuendaTableHeader>
                                <KuendaTableHeaderRow>
                                    <KuendaTableHeaderRowCell text="Nome" />
                                    <KuendaTableHeaderRowCell text="Preço" />
                                    <KuendaTableHeaderRowCell text="Total Comprado" />
                                    <KuendaTableHeaderRowCell text="Acções" />
                                </KuendaTableHeaderRow>
                            </KuendaTableHeader>
                        }>
                            <KuendaTableRow>
                                <KuendaTableCell text="Bolacha Maria" onLabel="Indisponível" />
                                <KuendaTableCell text={format('2,')(429600)} align="text-left" />
                                <KuendaTableCell text={23} align="text-left" />
                                <KuendaTableCell align="text-center">
                                    <div className="flex item-center justify-center">
                                        <button onClick={mostrarModalProduto} className="w-4 mr-2 transform btn-action-table" title="Ver mais">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        {/* <button className="w-4 mr-2 transform btn-action-table">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
											</svg>
										</button>
										<button className="w-4 mr-2 transform btn-action-table">
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
                visible={modalNovoProdutoOpen}
                onClose={fecharModalNovoProduto}
                height={320}
                closeOnEsc
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Novo Produto</div>
                    <div className="flex flex-col space-y-2">
                        <input placeholder="Nome" className="form-input" />
                        <input placeholder="Preço" className="form-input" />
                        <textarea placeholder="Descrição" className="form-textarea" />
                        <button className="rounded-full w-full py-2 bg-black">
                            <FontAwesomeIcon icon={faCamera} color="white" />
                        </button>
                        <button className="rounded-full w-full py-2 kuenda-bg">Guardar</button>
                    </div>
                </form>
            </Rodal>

            <Rodal
                visible={modalProdutoOpen}
                onClose={fecharModalProduto}
                height={320}
                closeOnEsc
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Produto</div>
                    <div className="flex flex-col space-y-2">
                        <input placeholder="Nome" className="form-input" />
                        <input placeholder="Preço" className="form-input" />
                        <textarea placeholder="Descrição" className="form-textarea" />
                        <button className="rounded-full w-full py-2 bg-black">
                            <FontAwesomeIcon icon={faCamera} color="white" />
                        </button>
                        <button className="rounded-full w-full py-2 kuenda-bg">Guardar</button>
                    </div>
                </form>
            </Rodal>
        </>
    )
}