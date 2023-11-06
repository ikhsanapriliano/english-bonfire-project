import { flexItemsCol, flexItemsRow } from "src/shared/style";
import Card from "./extra/Card";

function Guidance() {
  function howToJoin() {
    return (
      <ol className={`list-decimal pl-10 pr-16`}>
        <li>Register account.</li>
        <li>See available camp.</li>
        <li>Join available Beauvacs.</li>
        <li>Create presentation materials based on theme.</li>
        <li>Join online meet.</li>
        <li>Light your bonfire!</li>
      </ol>
    );
  }

  function additionalInfo() {
    return (
      <ol className={`list-decimal pl-10`}>
        <li>You can join camps no matter what level you are.</li>
        <li>To join beauvac, you need to finish some challanges.</li>
        <li>You can join all beauvacs in a camp.</li>
        <li>if you don't attend the meeting, then you will be passed over.</li>
        <li>You can still join the meeting as a spectator even you don't join beauvac.</li>
      </ol>
    );
  }

  return (
    <section>
      <div className={`${flexItemsRow} justify-center p-16`}>
        <div className={`w-1200 ${flexItemsCol} items-center flex-col `}>
          <Card
            title={"What is this?"}
            description="English Bonfire Project is an open community for everyone who wants to speak English in 10 minutes without any judgement from others via online meet. It's free as long as you know how to use presentation stuff such as powerpoint, canva, etc. The
        camps will be held 3 times a week on Monday, Wednesday, and Friday."
          />
          <div className={`flex items-baseline`}>
            <Card title={"How to join?"} description={howToJoin} />
            <Card title={"Additional"} description={additionalInfo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guidance;
