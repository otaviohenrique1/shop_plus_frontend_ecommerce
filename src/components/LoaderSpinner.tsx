import styled from "styled-components";

export function SpinnerLoader() {
  return (
    <SpinnerLoaderStyled>
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    </SpinnerLoaderStyled>
  );
}

const SpinnerLoaderStyled = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Blue */
    border-radius: 50%;
    animation: spinner .75s linear infinite;
  }

  .spinner-container {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 350px;
  }
`;