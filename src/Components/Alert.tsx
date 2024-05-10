import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface AlertAppProps {
  visible: boolean;
  textAlert: string;
  typeAlert: "error" | "warning" | "info" | "success";
  setVisible: (visible: boolean) => void;
}

const AlertApp: React.FC<AlertAppProps> = ({ visible, textAlert, typeAlert, setVisible }) => {
  return (
    <Collapse in={visible} className="m-3">
      <Alert
       severity={typeAlert}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setVisible(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {textAlert}
      </Alert>
    </Collapse>
  );
};

export default AlertApp;