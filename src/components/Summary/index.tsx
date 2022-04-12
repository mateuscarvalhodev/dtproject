import incomeImg from '../../assets/icons/income.svg';
import outcomeImg from '../../assets/icons/outcome.svg';
import totalImg from '../../assets/icons/total.svg';
import { Container } from './styles';

export function Summary() {
    return(
        <>
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="outcomes" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
        </>
    )
}