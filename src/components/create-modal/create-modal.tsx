import { useEffect, useState } from 'react'
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate'
import { FoodData } from '../../interface/FoodData'
import "./create-modal.css"

interface InputProps {
    label: string,
    value: string|number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label >{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} required></input>
        </>
    )
}

const createModal = ( {closeModal}: ModalProps ) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess, isPending} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            image,
            price
        }
        mutate(foodData)
    }

    const veryInputs = () =>{
        if(title==""){
            alert("Adicione um titulo")
        }else if(price==0){
            alert("Adicione um preço")
        }else if(image==""){
            alert("Adicione uma imagem")
        }else{
            submit()
        }
    }

    useEffect( () => {
        if(!isSuccess) return
        closeModal()
    }, [isSuccess] )

  return (
    <div className='modal-overlay'>
        <div className='fade' onClick={closeModal}></div>
        <div className="modal-body">
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container">
                <Input label='title' value={title} updateValue={setTitle}/>
                <Input label='price' value={price} updateValue={setPrice}/>
                <Input label='image' value={image} updateValue={setImage}/>
            </form>
            <button onClick={veryInputs} className='btn-secondary'>
                {isPending ? 'Postando...' : 'Postar'}
            </button>
        </div>
    </div>
  )
}

export default createModal