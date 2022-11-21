import { format } from "d3-format";

export default function KuendaProduto(props: {
    nome: string,
    cliente_kuenda: string,
    preco: number
}) {
    return (
        <div className="flex space-x-2 border-2 rounded border-dashed px-2 py-2 h-20 w-full kuenda-border">
            <div className="h-full bg-gray-100 rounded-full" style={{ width: "60px" }}></div>
            <div className="flex flex-col justify-center space-y-0">
                <div className="leading-4 font-medium">{props.nome}</div>
                <div className="leading-4 text-sm font-medium kuenda-text">{props.cliente_kuenda}</div>
                <div>
                    <span className="leading-4 text-xs font-bold text-black kuenda-bg rounded-full px-2">{format(",")(props.preco)} AKZ</span>
                </div>
            </div>
        </div>
    );
}