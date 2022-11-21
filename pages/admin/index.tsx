import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

import { useCallback, useEffect, useState } from 'react'
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import KuendaCard, { KuendaCardTotalItem } from "../../components/KuendaCard";
import KuendaTable, { KuendaTableCell, KuendaTableHeader, KuendaTableHeaderRow, KuendaTableHeaderRowCell, KuendaTableRow } from "../../components/KuendaTable";
import { format } from "d3-format";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin - Kuenda Delivery</title>
      </Head>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Layout activo="painel-de-controle" titulo="Painel de Controle" type="cliente-kuenda">
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-lg font-light kuenda-text-dark leading-tight">Seja bem-vindo de volta, </h3>
              <h1 className="text-2xl font-bold">Carlos José!</h1>
            </div>
            <div className="flex space-x-8">
              <div className="kuenda-bg flex-auto h-60 rounded-lg flex px-12 py-5">
                <div className="flex flex-col space-y-4 justify-center">
                  <h1 className="text-2xl font-medium">Conheça as Últimas Novidades</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nihil alias aut, cum obcaecati, pariatur incidunt id facere iusto suscipit voluptatum assumenda dolor! Consectetur ea earum dolor rerum nesciunt cum.
                  </p>
                  <a href="javascript:void(0);" className="bg-black text-white px- py-3 inline-flex rounded-lg justify-center items-center w-44 text-sm font-medium">Acção</a>
                </div>
                <div style={{ width: "60%" }} className="flex justify-center items-center">
                  <Image src={"/assets/img/megafone.png"} alt="banner-icon" width={130} height={140} />
                </div>
              </div>
              <div className="bg-black rounded-lg flex flex-col justify-center items-center" style={{ minWidth: '300px' }}>
                <span className="text-white font-medium text-7xl">420</span>
                <span className="kuenda-text text-lg">Total de Visitas</span>
              </div>
            </div>
            <div>
              <KuendaCard
                title="Visitantes da Página"
                svgIcon={
                  <div className="flex justify-center items-center kuenda-bg rounded-md w-8 h-8">
                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                      <g transform="matrix(0.074961,0,0,0.074961,-12.4884,-12.4883)">
                        <path d="M423.378,296.525C422.828,295.748 367.551,218.859 299.998,218.859C232.447,218.859 177.17,295.748 176.612,296.537C175.156,298.608 175.156,301.39 176.62,303.472C177.17,304.25 232.448,381.14 299.998,381.14C367.551,381.14 422.828,304.25 423.382,303.468C424.848,301.394 424.848,298.605 423.378,296.525Z" style={{ fill: 'white', fillRule: 'nonzero' }} />
                      </g>
                      <g transform="matrix(0.074961,0,0,0.074961,-12.4884,-12.4883)">
                        <path d="M360.072,300.001C360.072,266.823 333.176,239.927 300,239.927C266.822,239.927 239.927,266.823 239.927,300.001C239.927,333.176 266.822,360.074 300,360.074C333.177,360.074 360.072,333.176 360.072,300.001Z" style={{ fill: 'rgb(94,59,0)', fillRule: 'nonzero' }} />
                      </g>
                      <g transform="matrix(0.074961,0,0,0.074961,-12.4884,-12.4883)">
                        <circle cx={300} cy="300.001" r="26.117" style={{ fill: 'rgb(40,17,0)' }} />
                      </g>
                      <g transform="matrix(0.074961,0,0,0.074961,-12.4884,-12.4883)">
                        <circle cx="330.125" cy="264.439" r="13.829" style={{ fill: 'white' }} />
                      </g>
                    </svg>
                  </div>
                }
              >
                <div className="flex">
                  <div className="flex pl-2 pr-8">
                    <div className="flex flex-col">
                      <div className="flex flex-col space-y-4" style={{ width: 150 }}>
                        <div className="flex flex-col justify-center items-center">
                          <span className="text-black text-8xl">420</span>
                          <div className="">Visitas por Semana</div>
                        </div>
                        <div className="border-b border-gray-300" />
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <svg width="100%" height="100%" viewBox="0 0 111 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                              <g transform="matrix(1.12569,0,0,1.53986,-3038.01,-7476.19)">
                                <path d="M2699.24,4864.68C2699.24,4864.68 2705.44,4868.4 2708.08,4869.98C2709.05,4870.56 2710.26,4870.87 2711.5,4870.87L2711.5,4870.87C2712.09,4870.87 2712.65,4871.07 2713.02,4871.4L2719.78,4877.49C2720.56,4878.19 2721.74,4878.58 2722.97,4878.54C2724.2,4878.5 2725.34,4878.03 2726.02,4877.29L2735.3,4867.23C2735.51,4867.01 2735.86,4866.87 2736.23,4866.87L2736.7,4866.87C2738.51,4866.87 2740.22,4866.3 2741.41,4865.31L2747.79,4859.93C2748.3,4859.5 2749.17,4859.42 2749.8,4859.75C2752.18,4860.99 2756.07,4863.02 2758.05,4864.06C2759.07,4864.59 2760.29,4864.87 2761.54,4864.87L2762.34,4864.87C2763.18,4864.87 2764,4865.06 2764.69,4865.41C2765.95,4866.03 2767.82,4866.97 2769.25,4867.68C2770.94,4868.53 2773.24,4868.24 2774.45,4867.03L2783.16,4858.32C2783.78,4857.7 2784.98,4857.55 2785.85,4857.98C2785.85,4857.98 2795.33,4862.72 2795.33,4862.72C2795.87,4862.99 2796.61,4862.89 2796.99,4862.49C2797.36,4862.1 2797.22,4861.55 2796.68,4861.28C2796.68,4861.28 2790.72,4858.3 2787.2,4856.54C2785.26,4855.57 2782.62,4855.9 2781.23,4857.29L2772.52,4866C2772.07,4866.45 2771.22,4866.55 2770.6,4866.24C2769.16,4865.52 2767.3,4864.59 2766.04,4863.96C2764.95,4863.42 2763.66,4863.13 2762.34,4863.13L2761.54,4863.13C2760.79,4863.13 2760.05,4862.95 2759.44,4862.64C2757.45,4861.6 2753.57,4859.57 2751.19,4858.33C2749.56,4857.48 2747.3,4857.67 2745.99,4858.78C2745.99,4858.78 2739.6,4864.16 2739.6,4864.16C2738.87,4864.77 2737.82,4865.13 2736.7,4865.13C2736.7,4865.13 2736.23,4865.13 2736.23,4865.13C2735.06,4865.13 2733.97,4865.55 2733.32,4866.25C2733.32,4866.25 2724.04,4876.31 2724.04,4876.31C2723.78,4876.6 2723.34,4876.78 2722.87,4876.79C2722.39,4876.81 2721.93,4876.66 2721.64,4876.39C2719.49,4874.46 2716.41,4871.68 2714.87,4870.3C2714.05,4869.56 2712.81,4869.13 2711.5,4869.13C2711.5,4869.13 2711.5,4869.13 2711.5,4869.13C2710.81,4869.13 2710.13,4868.95 2709.6,4868.63C2709.6,4868.63 2700.76,4863.32 2700.76,4863.32C2700.25,4863.02 2699.49,4863.07 2699.08,4863.45C2698.66,4863.82 2698.73,4864.37 2699.24,4864.68Z" style={{ fill: 'rgb(228,125,0)' }} />
                              </g>
                            </svg>
                            <div className="flex items-center space-x-1 kuenda-text-dark">
                              <span>
                                <FontAwesomeIcon icon={faArrowCircleDown} className="" />
                              </span>
                              <span className="font-bold">6%</span>
                            </div>
                          </div>
                          <div className="text-gray-600 leading-5">Comparação com as semanas passadas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kuenda-bg flex-auto rounded-2xl px-8 py-5 text-white">

                  </div>
                </div>
              </KuendaCard>
            </div>
            <div className="flex space-x-5">
              <KuendaCard
                title="Cliques"
                svgIcon={
                  <svg width="50%" height="50%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                    <path d="M18.77,10.594c0.436,0.826 0.663,1.746 0.663,2.68c-0,2.132 -1.187,4.097 -3.074,5.089l-1.847,0.973l-0.454,0.239c-0.845,0.445 -1.851,0.472 -2.719,0.073l-7.212,-3.082l0.679,-2.015l4.289,0.829l-2.221,-4.221l-3.576,-6.796l1.742,-0.916l3.576,6.797l0.861,-0.452l-1.577,-2.998l1.741,-0.916l1.577,2.998l0.861,-0.453l-1.218,-2.314l1.742,-0.916l1.218,2.313l0.861,-0.456l-0.836,-1.593l1.742,-0.914l0.836,1.593l2.346,4.459l0,-0.001Zm-16.658,-5.313c-0.486,-0.486 -0.759,-1.146 -0.759,-1.832c0,-1.42 1.168,-2.589 2.587,-2.592c1.423,0.002 2.592,1.173 2.592,2.595c-0,0.295 -0.05,0.588 -0.149,0.866l0.457,0.864c0.312,-0.523 0.477,-1.122 0.477,-1.731c0,-1.852 -1.521,-3.377 -3.373,-3.38c-1.853,0 -3.377,1.525 -3.377,3.377c0,1.761 1.377,3.242 3.134,3.369l-0.46,-0.874c-0.427,-0.12 -0.816,-0.348 -1.129,-0.662Z" style={{ fill: '#fff', fillRule: 'nonzero' }} />
                  </svg>
                }
              >
                <KuendaCardTotalItem total={5200} legend="Total de Cliques em Produtos" />
              </KuendaCard>

              <KuendaCard
                title="Vendas"
                svgIcon={
                  <svg width="50%" height="50%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                    <path d="M14.691,7.709l0,-2.4c0,-1.147 -0.804,-2.181 -2.264,-2.911c-1.288,-0.644 -2.983,-0.999 -4.773,-0.999c-1.79,0 -3.485,0.355 -4.773,0.999c-1.46,0.73 -2.264,1.764 -2.264,2.911l-0,9.382c-0,1.147 0.804,2.181 2.264,2.911c1.288,0.644 2.983,0.999 4.773,0.999c1.364,-0 2.663,-0.204 3.786,-0.589c0.743,0.376 1.581,0.589 2.469,0.589c3.018,-0 5.474,-2.456 5.474,-5.474c-0,-2.753 -2.043,-5.037 -4.692,-5.418Zm-12.51,3.231c0.213,0.144 0.447,0.28 0.7,0.407c1.288,0.644 2.983,0.999 4.773,0.999c0.282,-0 0.563,-0.01 0.841,-0.027c-0.039,0.264 -0.06,0.533 -0.06,0.808c0,0.255 0.018,0.507 0.052,0.753c-0.275,0.019 -0.553,0.029 -0.833,0.029c-3.132,0 -5.473,-1.238 -5.473,-2.345l-0,-0.624Zm6.821,-0.236c-0.439,0.051 -0.891,0.078 -1.348,0.078c-3.132,-0 -5.473,-1.239 -5.473,-2.346l-0,-0.624c0.213,0.145 0.447,0.281 0.7,0.408c1.288,0.644 2.983,0.998 4.773,0.998c0.963,0 1.898,-0.103 2.757,-0.298c-0.585,0.487 -1.068,1.095 -1.409,1.784Zm-1.348,-7.741c3.132,0 5.473,1.239 5.473,2.346c0,1.107 -2.341,2.345 -5.473,2.345c-3.132,0 -5.473,-1.238 -5.473,-2.345c-0,-1.107 2.341,-2.346 5.473,-2.346Zm-5.473,11.728l-0,-0.623c0.213,0.144 0.447,0.28 0.7,0.407c1.288,0.644 2.983,0.998 4.773,0.998c0.432,0 0.86,-0.021 1.281,-0.062c0.239,0.517 0.556,0.992 0.936,1.407c-0.697,0.143 -1.452,0.219 -2.217,0.219c-3.132,-0 -5.473,-1.239 -5.473,-2.346Zm11.728,2.346c-2.156,-0 -3.91,-1.754 -3.91,-3.91c0,-2.15 1.744,-3.9 3.892,-3.91c0.006,0.001 0.012,0.001 0.018,0.001c0.006,0 0.012,-0 0.018,-0.001c2.148,0.01 3.892,1.76 3.892,3.91c0,2.156 -1.754,3.91 -3.91,3.91Z" style={{ fill: '#fff', fillRule: 'nonzero' }} />
                  </svg>
                }
              >
                <KuendaCardTotalItem total={325000} legend="Total de Ganho em Vendas" />
              </KuendaCard>

              <KuendaCard
                title="Itens"
                svgIcon={
                  <svg width="50%" height="50%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                    <g>
                      <path d="M19.421,5.718c0,-0.325 -0.183,-0.621 -0.473,-0.766l-8.565,-4.283c-0.241,-0.12 -0.525,-0.12 -0.766,0l-8.565,4.283c-0.29,0.145 -0.473,0.441 -0.473,0.766l-0,8.564c-0,0.325 0.183,0.621 0.473,0.766l8.565,4.283c0.241,0.12 0.525,0.12 0.766,-0l8.565,-4.283c0.29,-0.145 0.473,-0.441 0.473,-0.766l0,-8.564Zm-1.713,0.529l0,7.506c0,0 -7.708,3.854 -7.708,3.854c-0,0 -7.708,-3.854 -7.708,-3.854c-0,0 -0,-7.506 -0,-7.506c-0,-0 7.708,-3.854 7.708,-3.854l7.708,3.854Z" style={{ fill: '#fff' }} /><path d="M1.052,6.484l8.565,4.282c0.423,0.211 0.938,0.04 1.149,-0.383c0.211,-0.423 0.04,-0.938 -0.383,-1.149l-8.565,-4.282c-0.423,-0.212 -0.938,-0.04 -1.149,0.383c-0.211,0.422 -0.04,0.937 0.383,1.149Z" style={{ fill: '#fff' }} /><path d="M10.856,18.565l0,-8.565c0,-0.473 -0.383,-0.856 -0.856,-0.856c-0.473,-0 -0.856,0.383 -0.856,0.856l-0,8.565c-0,0.473 0.383,0.856 0.856,0.856c0.473,0 0.856,-0.383 0.856,-0.856Z" style={{ fill: '#fff' }} /><path d="M18.182,4.952l-8.565,4.282c-0.423,0.211 -0.594,0.726 -0.383,1.149c0.211,0.423 0.726,0.594 1.149,0.383l8.565,-4.282c0.423,-0.212 0.594,-0.727 0.383,-1.149c-0.211,-0.423 -0.726,-0.595 -1.149,-0.383Z" style={{ fill: '#fff' }} /><path d="M13.899,2.81l-8.564,4.283c-0.423,0.211 -0.595,0.726 -0.383,1.149c0.211,0.423 0.726,0.594 1.149,0.383l8.564,-4.283c0.423,-0.211 0.595,-0.726 0.383,-1.149c-0.211,-0.422 -0.726,-0.594 -1.149,-0.383Z" style={{ fill: '#fff' }} />
                    </g>
                  </svg>
                }
              >
                <KuendaCardTotalItem total={12} legend="Itens/Produtos Registados" />
              </KuendaCard>
            </div>

            <KuendaCard title="Últimas Encomendas">
              <KuendaTable header={
                <KuendaTableHeader>
                  <KuendaTableHeaderRow>
                    <KuendaTableHeaderRowCell text="Item" align="text-left" />
                    <KuendaTableHeaderRowCell text="Total Comprado" />
                    <KuendaTableHeaderRowCell text="Total Facturado" />
                    <KuendaTableHeaderRowCell text="Data" />
                  </KuendaTableHeaderRow>
                </KuendaTableHeader>
              }>
                <KuendaTableRow>
                  <KuendaTableCell text="Bolacha Maria" align="text-right" />
                  <KuendaTableCell text={format(',')(1432)} align="text-center" />
                  <KuendaTableCell text={format('$2,')(429600)} align="text-center" />
                  <KuendaTableCell text={'24/04/2022'} />
                </KuendaTableRow>
              </KuendaTable>
            </KuendaCard>

            <KuendaCard title="Itens Mais Comprados">
              <KuendaTable header={
                <KuendaTableHeader>
                  <KuendaTableHeaderRow>
                    <KuendaTableHeaderRowCell text="#" />
                    <KuendaTableHeaderRowCell text="Item" align="text-left" />
                    <KuendaTableHeaderRowCell text="Total Comprado" />
                    <KuendaTableHeaderRowCell text="Total Facturado" />
                  </KuendaTableHeaderRow>
                </KuendaTableHeader>
              }>
                <KuendaTableRow>
                  <KuendaTableCell text={1} />
                  <KuendaTableCell text="Bolacha Maria" align="text-right" />
                  <KuendaTableCell text={format(',')(1432)} align="text-center" />
                  <KuendaTableCell text={format('$2,')(429600)} align="text-center" />
                </KuendaTableRow>
              </KuendaTable>
            </KuendaCard>

            <KuendaCard title="Histórico de Estafetas">
              <KuendaTable header={
                <KuendaTableHeader>
                  <KuendaTableHeaderRow>
                    <KuendaTableHeaderRowCell text="Nome" />
                    <KuendaTableHeaderRowCell text="Última Vez" />
                    <KuendaTableHeaderRowCell text="Total de Entregas" />
                  </KuendaTableHeaderRow>
                </KuendaTableHeader>
              }>
                <KuendaTableRow>
                  <KuendaTableCell text="Cláudio Eliseu" />
                  <KuendaTableCell text={'24/04/2022'} />
                  <KuendaTableCell text={8} />
                </KuendaTableRow>
              </KuendaTable>
            </KuendaCard>
          </div>
        </Layout>
      </div>
    </>
  )
}