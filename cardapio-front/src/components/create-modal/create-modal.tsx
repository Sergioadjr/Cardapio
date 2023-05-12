import { useState } from "react";

interface CreateModalProps {
    label: string,
    value: string,
    updateValue(value: string | number): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label >{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}> </input>
        </>
    )
}


export function CreateModal() {
    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");
    
    return (

        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="titulo" value={ } updateValue />
                    <Input label="preco" value={ } updateValue />
                    <Input label="imagem" value={ } updateValue />
                </form>
            </div>
        </div>
    )
}