import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { colors } from "../../utils/style/theme";
import { LoaderWrapper } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={colors.primary}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
