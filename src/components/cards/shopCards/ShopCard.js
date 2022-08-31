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
import { Tooltip } from '@mui/material';


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
      marginTop: "50px"
  },
  
  card : {
      minHeight: "400px"
  },
  img : {
    height: "100%"
  },

  headCard : {
    minHeight: "100px",
    maxHeight: "100px"
}, 
content : {
  minHeight: "80px",
  maxHeight: "80px"
}

}))

export default function ShopCard(props) {

  const classes = useStyles()


  const [expanded, setExpanded] = React.useState(false);

  const { id, name, price, short_data, quantity, image, description } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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
        subheader={short_data}
      />
      <CardMedia
        component="img"
        className={classes.img}
        image={`./images/products/${image}.png`}
        alt={name}
      />
      <CardActions disableSpacing>
      <Tooltip title="Add to basket" sx={{ p: 0 }}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        </Tooltip>
        
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



