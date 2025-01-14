import {ReactElement} from "react";
import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

type Thanks = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const Thanks = ({data}: Thanks) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
      <h3>{data.name} aqui está um resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>{data.comment}
      </p>
    </div>
  );
};

export default Thanks;
