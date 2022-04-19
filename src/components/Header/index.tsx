import moneyImg from '../../assets/icons/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {
    

    return(
        <>        
            <Container>
            <Content>
            <img src= {moneyImg} alt="Money Project" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                New Transaction
            </button>
            
            </Content>
            </Container>        
        </>
    )
}