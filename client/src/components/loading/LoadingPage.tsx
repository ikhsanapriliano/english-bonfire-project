import Loading from "assets/Loading.gif";

function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <img src={Loading} />
      <p>Keur Loading Heula</p>
    </div>
  );
}

export default LoadingPage;
