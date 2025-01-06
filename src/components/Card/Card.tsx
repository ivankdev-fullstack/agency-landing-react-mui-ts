import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

//SVG ICONS AND IMAGES
import arrowRight from "../../assets/img/arrow-right.svg";

import styles from "./styles";

interface Props {
  title: string;
  imgSrc: string;
}

const Card = ({ title, imgSrc }: Props) => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component="img" src={imgSrc} />
        <Typography variant="h3">{title}</Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <Box component="img" src={arrowRight} sx={{ marginRight: "3px" }} />
            product manegment
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component="img" src={arrowRight} sx={{ marginRight: "3px" }} />
            mpv definition
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component="img" src={arrowRight} sx={{ marginRight: "3px" }} />
            product strategy
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btn}>
          Read More
          <Box component="img" src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
