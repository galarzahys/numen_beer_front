import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { makeStyles } from "@mui/styles";
import { Button, Tooltip } from '@mui/material';
import './ShopCard.css'
import { useStateValue } from '../../../context/StateProvider';
import { actionTypes } from '../../../context/reducer';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme)=>({
  root : {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "20vh",
      boxShadow: "1px 1px 3px #313843",
      marginTop: "70px"
  },
  
  card : {
      minHeight: "350px",
      maxHeight: "350px"
  },
  img_cont : {
    height: "150px"
  },
  img : {
    height: "150px"
  },

  headCard : {
    minHeight: "50px",
    maxHeight: "50px",
    alignContent: "center",
    alignItems: "center",
    padding: "0px"

}

}))

export default function ShopCard(props) {

  const classes = useStyles()

  const [ {basket}, dispatch ] = useStateValue(); 


  const [expanded, setExpanded] = React.useState(false);

  const { id, name, packaging, category, stock, price, image, description } = props;


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const AddToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        packaging,
        category,
        stock,
        price,
        description,
        image,
        quantity: 1
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardHeader
        action={
          <Typography /*className={classes.action}*/
          variant='h5'
          color='textSecondary'
          key={id}
          className={classes.headCard}
          >{accounting.formatMoney(price, "$")}</Typography>
        }
        title={name}
        subheader={packaging}
      />
      <div
        component="img"
        className="img_cont"
        alt={name}
      ><img src={'https://s3.sa-east-1.amazonaws.com/g4-numen-bucket/' + image} className="img_card" /></div>
      <CardActions disableSpacing>
      <Button color="secondary" onClick={AddToBasket}> Sumar al carrito! </Button>
       
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
                  <Tooltip title={expanded ? "Ocultar Descripción" : "Ver descripción"} sx={{ p: 0 }}>
          <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalles:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}



