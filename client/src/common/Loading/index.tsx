import React from "react";
import LoadingGif from '../../assets/images/global-loading.gif';

interface Props {
  isOpenLoading: Boolean;
}
const defaultProps: Props = {
  isOpenLoading: false,
};

function Loading(props: Props) {
  const { isOpenLoading } = props;
  return isOpenLoading ? (
    <div className="loading-wrapper">
      <div className="loading-box">
        <img className="loading__image" src={LoadingGif} alt="" />
      </div>
    </div>
  ) : null;
}

Loading.defaultProps = defaultProps;
export default Loading;
