import { ReactNode } from "react";
import { format } from 'd3-format'

interface KuendaCardProps {
	title: string;
	svgIcon?: ReactNode;
	children: ReactNode;
	className?: string;
}

export function KuendaCardTotalItem(props: {
	total: number,
	legend?: string
}) {
	return (
		<div className="flex flex-col space-y-2 justify-center items-center py-4" title={`Total: ${format("")(props.total)}`}>
			<span className="text-black font-medium text-7xl">{format("~s")(props.total)}</span>
			{props.legend ? <span className="kuenda-text text-lg">{props.legend}</span> : <></>}
		</div>
	)
}

export default function KuendaCard(props: KuendaCardProps) {
	return (
		<div className={`container py-4 ${props.className ? props.className : ''}`}>
			<h3 className="block text-xl text-gray-700 font-semibold mb-3" />
			<div className="flex">
				<div className="flex-auto">
					<div className="rounded-lg p-6 bg-white shadow-lg">
						<div className="mb-2 pb-2">
							<div className="flex space-x-2">
								{
									props.svgIcon ? (
										<div className="flex justify-center items-center kuenda-bg rounded-md w-8 h-8">
											{props.svgIcon}
										</div>
									) : <></>
								}
								<h3 className="font-semibold text-lg text-gray-500">{props.title}</h3>
							</div>
							<p className="text-sm text-gray-800"></p>
						</div>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	)
}