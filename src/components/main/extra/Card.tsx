import { flexItemsCol } from "src/shared/style";

interface card {
  title: string;
  description: string | (() => React.ReactElement);
}

function Card(props: card) {
  return (
    <div className={`${flexItemsCol} flex-col justify-start py-10 w-full`}>
      <div className={`text-4xl`}>{props.title}</div>
      <div className={`py-5 text-2xl text-justify`}>{typeof props.description === "string" ? props.description : props.description()}</div>
    </div>
  );
}

export default Card;
