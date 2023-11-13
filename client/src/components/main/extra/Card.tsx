import { flexItemsCol } from "src/shared/style";

interface card {
  title: string;
  description: string | (() => React.ReactElement);
}

function Card(props: card) {
  return (
    <div className={`${flexItemsCol} flex-col justify-start py-10 md:w-full`}>
      <div className={`md:text-4xl`}>{props.title}</div>
      <div className={`py-5 md:text-2xl md:text-justify`}>{typeof props.description === "string" ? props.description : props.description()}</div>
    </div>
  );
}

export default Card;
