import styled from "styled-components";
import { Button } from "@mui/material";

const StyledButtonAdd = styled(Button)`
  color: green;
  border-color: green;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;

  &&:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #00c853 30%, #b2ff59 90%);
    color: white;
    border-color: white;
  }
`;

/*
const StyledButtonDelete = styled(Button)`
  color: red;
  border-color: red;
  transition: all 0.3s ease-in-out;

  &&:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #d50000 30%, #ff1744 90%);
    color: white;
  }
`;
*/

interface NormalButtonProps {
  text: string;
  onClick?: () => void;
}

const NormalButton = ({ text, onClick }: NormalButtonProps) => {
  return (
    <div>
      <StyledButtonAdd onClick={onClick} variant="outlined">
        {text}
      </StyledButtonAdd>
    </div>
  );
};

export default NormalButton;
