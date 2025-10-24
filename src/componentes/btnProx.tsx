type Props = {
    texto: string;
    onClick: () => void;
}

export function BtnProx({texto, onClick}: Props) {
    return (
        <button onClick={onClick} className="bg-blue-600 p-4 rounded-lg font-semibold text-white mt-6 hover:bg-blue-500">{texto}</button>
    );
}