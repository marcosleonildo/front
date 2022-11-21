import { ReactNode } from "react";

export default function SidebarItem({
    texto,
    svgPath,
    href,
    activo,
    path,
    svg,
    svgParam,
    pathParam,
    type
}: {
    texto: string,
    svgPath?: string,
    href: string,
    activo?: boolean,
    svg?: ReactNode,
    path?: ReactNode,
    svgParam?: { className: string, viewBox?: string },
    pathParam?: { d: string },
    type?: "cliente-kuenda" | "admin-kuenda"
}) {

    return (
        <li className="relative mx-3 my-2">
            {
                false && <span className={`absolute inset-y-0 left-0 w-1 ${type == "cliente-kuenda" ? "bg-black" : "kuenda-bg"}`} aria-hidden="true"></span>
            }
            <a
                className={`px-6 py-3 rounded-md inline-flex items-center w-full text-sm font-semibold 
                ${activo ?
                        (
                            !type || type == "cliente-kuenda" ?
                                "bg-black text-white hover:text-white" :
                                "kuenda-bg text-white hover:text-black"
                        ) :
                        (
                            !type || type == "cliente-kuenda" ?
                                "text-black hover:text-black hover:bg-black hover:bg-opacity-5" :
                                "bg-black text-white hover:bg-white hover:bg-opacity-5 hover:text-white"
                        )} 
                        transition-colors duration-150`} href={href}>
                {
                    !svg && (path || svgPath) && (
                        <svg className="w-5 h-5" aria-hidden="true" fill={activo && !type && type == "cliente-kuenda" ? "white" : activo && type == "admin-kuenda" ? "black" : "white"} viewBox="0 0 24 24">
                            {
                                (!path && svgPath) ? (
                                    <path
                                        d={svgPath}
                                    ></path>
                                ) : <>{path}</>
                            }
                        </svg>
                    )
                }
                {
                    svgParam && pathParam && (
                        <>
                            {/* <span>ABCD</span> */}
                            <svg className={svgParam.className ? svgParam.className : "w-5 h-5"} aria-hidden="true" viewBox={svgParam.viewBox ? svgParam.viewBox : "0 0 24 24"} fill={activo ? (!type || type == "cliente-kuenda" ? 'white' : 'black') : (type || type == "admin-kuenda" ? 'white' : 'black')}>
                                <path
                                    d={pathParam.d}
                                ></path>
                            </svg>
                        </>
                    )
                }
                <span className={`ml-4 ${activo ? (!type || type == "cliente-kuenda" ? 'text-white' : 'text-black') : (type || type == "admin-kuenda" ? 'text-white' : 'text-black')}`}>{texto}</span>
            </a>
        </li >
    );
}