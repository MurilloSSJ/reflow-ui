type GradientButtonProps = {
    label: string
}

export const GradientButton = ({ label }: GradientButtonProps) => {
    return (
        <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded px-5 py-2 focus:outline-none hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 ease-in-out font-bold"
        >
            {label}
        </button>
    );
}