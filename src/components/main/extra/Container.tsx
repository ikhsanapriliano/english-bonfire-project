import { flexItemsCol, flexItemsRow } from "src/shared/style";

function Container() {
  return (
    <div className={`${flexItemsRow} justify-center p-16`}>
      <div className={`w-1200 ${flexItemsCol} items-center flex-col `}></div>
    </div>
  );
}
