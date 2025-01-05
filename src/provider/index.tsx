import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

type Props = {
 children:ReactNode
}
export const AppProvider = ({children}: Props) => {
    return ( 
       <Router>{children}</Router>
    );
}