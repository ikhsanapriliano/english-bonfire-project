import LinkedinHover from "assets/Sign-In-Large---Hover.png";
import LinkedinDefault from "assets/Sign-in-Large---Default.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [color, setColor] = useState<boolean>(true);

  return (
    <div className={`flex flex-col justify-center items-center mt-5 gap-2`}>
      <p className={`text-center`}>" Vision Without Execution Is Hallucination "</p>
      <Link to={`http://localhost:3000/auth/linkedin`}>
        <img
          className={`h-10`}
          onMouseEnter={() => {
            setColor(!color);
          }}
          onMouseLeave={() => {
            setColor(!color);
          }}
          src={color ? LinkedinDefault : LinkedinHover}
        />
      </Link>
    </div>
  );
}

export default Login;
