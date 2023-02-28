import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";

const ListComponent = () => {
  return (
    <Container>
      <List sx={{ width: "10rem" }}>
        <ListSubheader>title of list</ListSubheader>
        <ListItem divider>
          <ListItemText>asdf</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>asdf</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>asdf</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="asdf" secondary="asdfsdafsdf" />
        </ListItem>
        <ListItemButton>
          <ListItemText>asdf</ListItemText>
        </ListItemButton>
      </List>
    </Container>
  );
};

export default ListComponent;
