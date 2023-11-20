import { appUseSelector } from "src/hooks/hooks";
import { useState, useEffect } from "react";

type Total = {
  admin: number;
  member: number;
};

function User() {
  const [total, setTotal] = useState<Total>({
    admin: 0,
    member: 0,
  });

  const data = appUseSelector((state) => state.community.data);
  const { admin, member } = total;

  useEffect(() => {
    data.forEach((item) => {
      if (item.status === "admin") {
        setTotal((prev) => {
          return {
            ...prev,
            admin: prev.admin + 1,
          };
        });
      } else {
        setTotal((prev) => {
          return {
            ...prev,
            member: prev.member + 1,
          };
        });
      }
    });
  }, [data]);

  return (
    <section className={`flex items-center justify-center w-full mt-5 pb-10 text-3xl font-medium`}>
      <div className={`flex justify-center items-center flex-col px-5`}>
        <p>{admin}</p>
        <p>Admin</p>
      </div>
      <div className={`flex justify-center items-center flex-col px-5`}>
        <p>{member}</p>
        <p>Member</p>
      </div>
    </section>
  );
}

export default User;
