import { flexItemsRow, flexItemsCol } from "src/shared/style";

function User() {
  return (
    <section className={`${flexItemsRow} justify-center w-full mt-5 pb-10 text-3xl font-medium`}>
      <div className={`${flexItemsCol} items-center flex-col px-5`}>
        <p>0</p>
        <p>Admin</p>
      </div>
      <div className={`${flexItemsCol} items-center flex-col px-5`}>
        <p>0</p>
        <p>Member</p>
      </div>
    </section>
  );
}

export default User;
