const LoadingButton = ({ textButton = "", loading = false, handleClick = () => {} }) => {
  return (
    <button
      type="button"
      className="btn w-50 btn-primary position-relative"
      onClick={handleClick}
      disabled={loading}
    >
      {loading && ( 
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      )}
      {!loading && textButton}
    </button>
  );
};

export default LoadingButton;
