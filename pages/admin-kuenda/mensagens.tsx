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

export default function Mensagens() {

    return (
        <>
            <Head>
                <title>Pagamentos - Kuenda Delivery</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Layout activo="mensagens" titulo="Mensagens" type="admin-kuenda">
                    <div className="flex flex-col space-y-4">

                    </div>
                </Layout>
            </div>
        </>
    )
}