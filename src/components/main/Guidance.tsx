import Card from "./extra/Card";
import { flexItemsCol, flexItemsRow } from "src/shared/style";

function Guidance() {
  function howToJoin() {
    return (
      <ol className={`list-decimal px-10`}>
        <li>Register account.</li>
        <li>See available camps.</li>
        <li>Join available Beauvac.</li>
        <li>Create presentation materials.</li>
        <li>Join online meet.</li>
        <li>Light your bonfire!</li>
      </ol>
    );
  }

  function additionalInfo() {
    return (
      <ol className={`list-decimal px-10`}>
        <li>You can join camps no matter what level you are.</li>
        <li>To join beauvac, you need to finish some challanges.</li>
        <li>You can join all beauvacs in a camps.</li>
        <li>if you don't attend the meeting, then you will be passed over.</li>
        <li>You can still join the meeting as a spectator even you don't join beauvac.</li>
      </ol>
    );
  }

  return (
    <section className={`${flexItemsCol} items-center flex-col`}>
      <h2 className={`text-4xl mb-6`}>Guidance</h2>
      <Card
        title={"What is this?"}
        description="English Bonfire Project is an open community for everyone who wants to speak English in 10 minutes without any judgement from others via online meet. It's free as long as you know how to use presentation stuff such as powerpoint, canva, etc. The
        camps will be held 3 times a week on Monday, Wednesday, and Friday."
      />
      <Card title={"How to join?"} description={howToJoin} />
      <Card title={"Additional"} description={additionalInfo} />
    </section>
  );
}

export default Guidance;
