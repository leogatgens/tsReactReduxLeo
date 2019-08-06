import React from "react"; // we need this to make JSX compile
import {
  Typography,
  CardMedia,  
  CardContent,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { IPais } from "../../../redux/InterfaceModels";
import { GLOBALS } from "../../../globals/globals-variables";

import Card from "@material-ui/core/Card";
interface IProps {
  propiedades: IPais;
}

const useStyles = makeStyles(
  createStyles({
    card: {
      
    },
    media: {
      
    },
  }),
);
export const CountryImage: React.SFC<IProps> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      
        <CardMedia    className={classes.media}          
          component="img"
          alt="Contemplative Reptile"
          image={
            props.propiedades.flagUrl
              ? props.propiedades.flagUrl.replace("##CDN##", GLOBALS.rootImages)
              : `${GLOBALS.rootImages}/notfound.png`
          }
          title="Bandera Pais?"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pais
          </Typography>
        </CardContent>
      
    </Card>
  );
};
