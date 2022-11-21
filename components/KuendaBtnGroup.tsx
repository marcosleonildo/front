import { MouseEventHandler, useState } from "react"

export function KuendaBtn({
    text,
    selected,
    onClick,
}: {
    text: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    selected?: boolean
}) {
    return (
        <button onClick={onClick} className={`border-none rounded-full text-black px-4 py-2 text-base font-medium ${selected ? 'kuenda-bg' : 'bg-gray-200'}`}>{text}</button>
    )
};

export default function KuendaBtnGroup({
    buttons
}: {
    buttons: {
        text: string,
        onClick?: () => void
    }[],
}) {
    const [selectedButtonIdx, setSelectedButtonIdx] = useState<number>(0);
    const onSelectButton = (idx: number, onClick?: () => void) => {
        setSelectedButtonIdx(idx);
        if (onClick) onClick();
    }

    return (
        <div className="space-x-4">
            {
                buttons && buttons.map((btn, idx) => (
                    <KuendaBtn text={btn.text} onClick={() => onSelectButton(idx, btn.onClick)} selected={idx == selectedButtonIdx} />
                ))
            }
        </div>
    )
}