import { Button, ButtonProps } from "@mui/material";
import { css, styled } from "@mui/system";

interface ButtonInterface extends ButtonProps {
  test: boolean;
}

export const AboutButton = styled(Button)<ButtonInterface>(
  ({ theme, test }) => ({
    backgroundColor: test ? "blue" : theme.palette.error.main,
  })
);
