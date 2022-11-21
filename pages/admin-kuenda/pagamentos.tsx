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
    const [modalAddPagamentoOpen, setModalAddPagamentoOpen] = React.useState(false);
    const [modalAltPrecoPagamentoOpen, setModalAltPrecoPagamentoOpen] = React.useState(false);

    const mostrarModalAltPrecoPagamentoOpen = () => {
        setModalAltPrecoPagamentoOpen(true);
    }

    const fecharModalAltPrecoPagamentoOpen = () => {
        setModalAltPrecoPagamentoOpen(false);
    }


    const mostrarModalProduto = () => {
        setModalProdutoOpen(true);
    }

    const fecharModalProduto = () => {
        setModalProdutoOpen(false);
    }

    const abrirModalAddPagamento = () => {
        setModalAddPagamentoOpen(true);
    }

    const fecharModalAddPagamento = () => {
        setModalAddPagamentoOpen(false);
    }

    return (
        <>
            <Head>
                <title>Pagamentos - Kuenda Delivery</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Layout activo="pagamentos" titulo="Pagamentos">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-2">
                            <button onClick={abrirModalAddPagamento} className="bg-green-600 text-white py-2 px-4 rounded-full">Realizar Pagamento</button>
                            <div className="flex-1" />
                            <button onClick={mostrarModalAltPrecoPagamentoOpen} className="bg-black text-white py-2 px-4 rounded-full">Redefinir Preço da Mensalidade</button>
                        </div>
                        <hr />
                        <KuendaTable header={
                            <KuendaTableHeader>
                                <KuendaTableHeaderRow>
                                    <KuendaTableHeaderRowCell text="Nome" />
                                    <KuendaTableHeaderRowCell text="Último pagamento" />
                                    <KuendaTableHeaderRowCell text="Valor do Pagamento" />
                                    <KuendaTableHeaderRowCell text="Acções" />
                                </KuendaTableHeaderRow>
                            </KuendaTableHeader>
                        }>
                            <KuendaTableRow>
                                <KuendaTableCell text="Pizaria" onLabel="Indisponível" />
                                <KuendaTableCell text="24/04/2022 (Maio)" />
                                <KuendaTableCell text={format('2,')(13600)} align="text-left" />
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
                visible={modalAddPagamentoOpen}
                onClose={fecharModalAddPagamento}
                height={260}
                closeOnEsc
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Adicionar Pagamento</div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            <select className="form-select flex-1">
                                <option>Nenhuma</option>
                            </select>
                            <select className="form-select">
                                <option>2022</option>
                            </select>
                        </div>
                        <input placeholder="Referência" type="number" className="form-input" />
                        <label htmlFor="" className="text-sm">Após realizar o  pagamento, feche este modal e recarregue a página.</label>
                        {/* <button className="rounded-full w-full py-2 bg-black">
                            Fechar
                        </button> */}
                        <button className="rounded-full w-full py-2 kuenda-bg">Guardar</button>
                    </div>
                </form>
            </Rodal>

            <Rodal
                visible={modalAltPrecoPagamentoOpen}
                onClose={fecharModalAltPrecoPagamentoOpen}
                height={290}
                closeOnEsc
            >
                <form className="flex flex-col space-y-2">
                    <div className="font-bold text-lg -my-1">Alterar Preços de Pagamentos</div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex">
                            <select className="form-select flex-1">
                                <option>Mensalidade</option>
                            </select>
                        </div>
                        <div className="flex">
                            <select className="form-select flex-1">
                                <option>Valor por entrega de produto</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="" className="text-sm text-gray-500">Última vez alterado por <b>Carlos José</b></label>
                            <label htmlFor="" className="text-sm text-black font-bold">Mensalidade: 8.500,00</label>
                            <label htmlFor="" className="text-sm text-black font-bold">Valor de Entrega por produto: 500,00</label>
                        </div>
                        {/* <button className="rounded-full w-full py-2 bg-black">
                            Fechar
                        </button> */}
                        <button className="rounded-full w-full py-2 kuenda-bg">Guardar</button>
                    </div>
                </form>
            </Rodal>
        </>
    )
}