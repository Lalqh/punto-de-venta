import { Button, CircularProgress } from "@mui/material";

const LoadingButton = ({
  textButton = "",
  loading = false,
  handleClick = () => {},
}) => {
  return (
    <Button
      className="w-25"
      variant="contained"
      onClick={handleClick}
      disabled={loading}
    >
      {loading && <CircularProgress size={24} />}
      {!loading && textButton}
    </Button>
  );
};

export default LoadingButton;
