import { Container } from "./styles";

export function TransactionTable() {
    return (
        <>
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Web Site Development</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withDraw">-R$6.000,00</td>
                        <td>Casa</td>
                        <td>12/04/2022</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
        </>
    )
}