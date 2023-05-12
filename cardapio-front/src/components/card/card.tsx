import "./card.css"
interface CardProps {
    titulo: string,
    imagem: string,
    preco: number
}

export function Card({ titulo, imagem, preco }: CardProps) {
    return (
      <div className="card">
        <img src={imagem} alt={titulo} />
        <h2>{titulo}</h2>
        <p>
          <b>Valor:</b> {preco}
        </p>
      </div>
    );
  }