import Button, { ButtonProps } from "@material-ui/core/Button";
import * as React from "react";

interface OwnProps {
    buttonText:string;
}
//type Props = OwnProps & ButtonProps;

const MyButton: React.FC<OwnProps> = ({buttonText}) => {
    return (<Button >{buttonText}</Button>);
};

export default MyButton;
