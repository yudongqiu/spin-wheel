import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {
  Avatar,
  Backdrop,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Wheel from './Wheel';



class SpinWheel extends React.Component{
  constructor(props) {
    super(props);
    let params = queryString.parse(props.location.search);
    let members = {};
    if (params.u) {
      for (let name of params.u.split(',')) {
        members[name] = true;
      }
    }
    if (params.spinDuration) {
      this.spinDuration = parseInt(params.spinDuration);
    }
    this.state = {
      members,
      newName: '',
      backDropOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.onWheelSelect = this.onWheelSelect.bind(this);
    this.openBackdrop = this.openBackdrop.bind(this);
    this.closeBackdrop = this.closeBackdrop.bind(this);

  }

  // wheel spin duration default 10s
  spinDuration = 10;
  
  handleToggle(name) {
    const { members } = this.state;
    members[name] = !(members[name]);
    this.setState({ members });
  };

  handleAdd() {
    const { members, newName } = this.state;
    if (newName) {
      members[newName] = true;
      this.setState({
        members,
        newName: ''
      });
    }
  }

  handleDelete(name) {
    const { members } = this.state;
    delete members[name];
    this.setState({ members });
  }

  handleTextChange(event) {
    this.setState({newName: event.target.value})
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.handleAdd();
    }
  }

  onWheelSelect(selectedItem, spinDuration) {
    clearTimeout(this.timeoutId);
    this.setState({ winner: selectedItem });
    this.timeoutId = setTimeout(this.openBackdrop, (spinDuration + 1) * 1000);
  }

  openBackdrop() {
    this.setState({ backDropOpen: true });
  }

  closeBackdrop() {
    this.setState({ backDropOpen: false });
  }
  
  render() {
    const { members, newName, backDropOpen, winner } = this.state;
    let disableAddButton = false;
    let inputError = undefined;
    if (!newName) {
      disableAddButton = true;
    } else if (members[newName] !== undefined) {
      disableAddButton = true;
      inputError = 'Already exist';
    }
    const backDrop = winner ? 
      <Backdrop
        style={{zIndex: 2, color: '#ffffff'}}
        open={backDropOpen}
        onClick={this.closeBackdrop}
      >
      <div>
        <Avatar src={`https://cinco.linkedin.biz/api/raw/picture/${winner}`}
          style={{width: 400, height:400, left: 'calc(50% - 200px)'}}
        >
          {winner?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h1" component="h2" style={{marginTop: 100}}>
          Congratulations, {winner}!
        </Typography>
      </div>
    </Backdrop> : <div></div>;

    return (
      <div style={{padding: '50px'}}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={10}
          >
            {/* member selector */}
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <List component="nav">
                    {Object.keys(members).map(name => (
                      <ListItem button key={name} onClick={() => this.handleToggle(name)}>
                        <ListItemAvatar>
                          <Avatar src={`https://cinco.linkedin.biz/api/raw/picture/${name}`}>
                            {name.charAt(0).toUpperCase()}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={name} />
                        <ListItemSecondaryAction>
                          <Switch
                            edge="end"
                            checked={members[name]}
                            onChange={() => this.handleToggle(name)}
                          />
                          <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(name)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>{newName.charAt(0).toUpperCase()}</Avatar>
                      </ListItemAvatar>
                      <TextField id="standard-basic"
                        placeholder="Add more"
                        onChange={this.handleTextChange}
                        value={newName}
                        onKeyPress={this.handleKeyPress}
                        error={inputError !== undefined}
                        helperText={inputError}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"
                          onClick={() => this.handleAdd()}
                          disabled={disableAddButton}
                        >
                          <AddIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            {/* spin wheel */}
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <Wheel
                items={Object.keys(members).filter(name => members[name])}
                spinDuration={this.spinDuration}
                onSelectItem={this.onWheelSelect}
              />
              {backDrop}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withRouter(SpinWheel);