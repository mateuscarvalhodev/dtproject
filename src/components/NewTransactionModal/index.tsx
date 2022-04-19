import { FormEvent, useState } from 'react';

import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from './../../assets/icons/income.svg';
import outcomeImg from './../../assets/icons/outcome.svg';
import closeImg from './../../assets/icons/close.svg';
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,
            value,
            category, 
            type
        })
    }
    
    return(
        <>
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay" 
            className="react-modal-content" 
            >

        <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="closeModal" />
        </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Register Transaction</h2>
                <input 
                placeholder="Title"
                value = {title}
                onChange = {event => setTitle(event.target.value)}
                />

                <input
                type="number" 
                placeholder="Value"
                value = {value}
                onChange = {event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type="button" 
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor='green'
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Incomes</span>

                    </RadioBox>
                    <RadioBox
                    type="button" 
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                >
                    <img src={outcomeImg} alt="outcome" />
                    <span>Outcomes</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input
                type="text" 
                placeholder="Category"
                value = {category}
                onChange = {event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Register
                </button>
            </Container>
        </Modal>  
        </>
    )
}