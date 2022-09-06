import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { getBasketTotal } from "../context/reducer";
import accounting from "accounting";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "25vh",
        boxShadow: "1px 1px 3px #313843",
        margin: "5px",
        padding: "0"
    },
    
    button : {
        backgroundColor: "#D8EC8A",
        color: "#00382A",
        "&:hover" : {
        backgroundColor: "#00382A",
        color: "#D8EC8A"
        }
    },
    amount : {
        fontSize: "2rem",
        margin: "0.5rem",
        color: "#00382A"
    }


}))

const Total = () => {

    const [ {basket}, dispatch ] = useStateValue(); 

 

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h5>Total items : {basket?.length}</h5>
        <h3 className={classes.amount}>{accounting.formatMoney(getBasketTotal(basket), "$" )}</h3>
        <Link to={"/checkout"} style={{ textDecoration: "none"}}>
        <Button className={classes.button} variant="contained">Finalizar Compra</Button>
        </Link>
        </div>
    )
}

export default Total;