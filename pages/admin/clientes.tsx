import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import KuendaCard, { KuendaCardTotalItem } from "../../components/KuendaCard";
import KuendaTable, { KuendaTableCell, KuendaTableHeader, KuendaTableHeaderRow, KuendaTableHeaderRowCell, KuendaTableRow } from "../../components/KuendaTable";
import { format } from "d3-format";
import Head from "next/head";

export default function Clientes() {
    return (
        <>
            <Head>
                <title>Clientes - Kuenda Delivery</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Layout activo="clientes" titulo="Clientes" type="cliente-kuenda">
                    <div className="flex flex-col space-y-4">
                        <KuendaTable header={
                            <KuendaTableHeader>
                                <KuendaTableHeaderRow>
                                    <KuendaTableHeaderRowCell text="Nome" />
                                    <KuendaTableHeaderRowCell text="Última entrega" />
                                    <KuendaTableHeaderRowCell text="Total Comprado" />
                                    {/* <KuendaTableHeaderRowCell text="Facturação" align=s"text-left" /> */}
                                </KuendaTableHeaderRow>
                            </KuendaTableHeader>
                        }>
                            <KuendaTableRow>
                                <KuendaTableCell text="Cláudio Eliseu" />
                                <KuendaTableCell text={'24/04/2022'} />
                                <KuendaTableCell text={format('$2,')(450600)} align="text-left" />
                            </KuendaTableRow>
                        </KuendaTable>
                    </div>
                </Layout>
            </div>
        </>
    )
}