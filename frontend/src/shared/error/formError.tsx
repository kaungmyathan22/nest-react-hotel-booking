interface IFormErrorProps {
    message: string;
    onClick: React.MouseEventHandler<HTMLInputElement>;
}

interface IErrorMessageProps {
    message: string;
}

export default function FormError ({ message, onClick }: IFormErrorProps) {
    return (
        <div className="flex w-full font-bold bg-red-500 pl-2 px-4 justify-between items-center py-3 text-white">
            <small className="text-xs ">{message}</small>
            <small className="cursor-pointer" onClick={onClick}>x</small>
        </div>
    )
}

export const ErrorMessage = ({ message }: IErrorMessageProps) => (<small className="mb-3 ml-2 text-xs text-red-500">{message}</small>)
