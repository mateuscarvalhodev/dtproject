import moneyImg from '../../assets/icons/logo.svg'
import { Container, Content } from './styles';

export function Header () {
    return(
        <>        
            <Container>
                <Content>
            <img src= {moneyImg} alt="Money Project" />
            <button type="button">
                New Transaction
            </button>
            </Content>
            </Container>        
        </>
    )
}