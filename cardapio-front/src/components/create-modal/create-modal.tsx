import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css";

interface InputProps {
    label: string,
    value: string,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label >{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}> </input>
        </>
    )
}


export function CreateModal({closeModal}: ModalProps) {
    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");
    const {mutate, isSuccess, isLoading} = useFoodDataMutate();  

    const submit = () => {
        const foodData: FoodData = {
            titulo,
            preco,
            imagem
        }
        mutate (foodData)
    }


    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])


    return (

        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="titulo" value={titulo} updateValue={setTitulo}  />
                    <Input label="preco" value={preco.toString()} updateValue={setPreco}/>
                    <Input label="imagem" value={imagem} updateValue={setImagem} />
                </form>
                <button onClick={submit} className="btn">Postar
                {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>
        </div>
    )
}