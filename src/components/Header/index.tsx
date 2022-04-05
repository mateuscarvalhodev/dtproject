import moneyImg from '../../assets/icons/logo.svg'
import { Container } from './styles';

export function Header () {
    return(
        <>        
            <Container>
            <img src= {moneyImg} alt="Money Project" />
            <button type="button">
                New Transaction
            </button>
            </Container>        
        </>
    )
}