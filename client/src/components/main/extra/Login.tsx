import LinkedinBlue from "assets/Sign-in-Large---Active.png";
import LinkedinGreen from "assets/Sign-in-Large---Hover.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [color, setColor] = useState<boolean>(true);

  return (
    <div className={`flex flex-col justify-center items-center mt-5 gap-2`}>
      <p className={`text-center`}>" Vision Without Execution Is Hallucination "</p>
      <Link to={`http://localhost:3000/auth/linkedin`}>
        <img
          onMouseEnter={() => {
            setColor(!color);
          }}
          onMouseLeave={() => {
            setColor(!color);
          }}
          className={`hover:duration-300`}
          src={color ? LinkedinBlue : LinkedinGreen}
        />
      </Link>
    </div>
  );
}

export default Login;
