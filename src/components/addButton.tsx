type AddButtonProps = {
    onClick: () => void
}

export const AddButton = ({onClick}: AddButtonProps) => {
    return (
        <button onClick={onClick} className="bg-gradient-to-l from-primmary-500 to-primmary-100 hover:bg-blue-700 text-white font-bold rounded-full w-20 h-20">
            <span className="text-3xl">+</span>
        </button>
    );
}