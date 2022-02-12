import React from 'react'
import { updateMethodSignature } from 'typescript'
import { threadId } from 'worker_threads'

interface Props{
    border: string;
    color: string;
    childern?: React.ReactNode;
    height:string
    onClick: () => void;
    width: string;
}

const Button: React.FC<Props> = ({
    border,
    color,
    childern,
    height,
    onClick,
    width,
}) =>{
    return (
        <button
        onClick={onClick}
        style={{
            backgroundColor: color,
            border,
            height,
            width
        }}
    >
    {childern}
    </button>
    );
}

export default Button;