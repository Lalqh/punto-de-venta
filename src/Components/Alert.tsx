const Alert = ({ textAlert = "", typeAlert = "" }) => {
  return (
    <div className={typeAlert} role="alert">
      {textAlert}
    </div>
  );
};

export default Alert;
