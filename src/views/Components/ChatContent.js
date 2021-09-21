import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import NavPills from "components/NavPills/NavPills.js";

import useChat from "../../services/useChat";

import "./style/ChatContent.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/mainStyle.js";

const useStyles = makeStyles(styles);

const ChatContent = (props) => {

  const classes = useStyles();

  let path = window.location.pathname;
  let id = path.slice(21);
  const projectId =id;
 
  const { messages, sendMessage } = useChat({projectId: projectId, user: props.user});
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
      if (newMessage !== ""){ 
      let receiverFlag = null;
      if (props.user.roles[0].name == 'Admin') {
        receiverFlag = 1;
      }
      sendMessage(newMessage, receiverFlag);
      setNewMessage("");
      }
  };

  const handleKeypress = e => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {props.user.roles[0].name === 'Admin' && 
      <NavPills
        color="rose"
        tabs={[
          {
            tabButton: "Client",
            tabContent: (
              <div style={{ width: "100%" }}>
                <div className={classes.chatWindow}>
                  <List component="nav">
                    {messages.map((message, i) => (
                      <ListItem
                        key={i}
                        className={`message-item ${
                          message.ufrom==props.user.id ? "my-message" : "received-message"
                        }`}
                      >
                        <ListItemText primary={message.message} />
                      </ListItem>
                    ))}
                  </List>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    id="inputText"
                    label=""
                    multiline
                    variant="outlined"
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                    className="new-message-input-field"
                    onKeyPress={handleKeypress}
                  />
                  <button variant="contained" 
                  onClick={handleSendMessage}
                  className="send-message-button">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            )
          },
          {
            tabButton: "ChargeMan",
            tabContent: (
              <div style={{ width: "100%" }}>
                <div className={classes.chatWindow}>
                  <List component="nav">
                    {messages.map((message, i) => (
                      <ListItem
                        key={i}
                        className={`message-item ${
                          message.ufrom==props.user.id ? "my-message" : "received-message"
                        }`}
                      >
                        <ListItemText primary={message.message} />
                      </ListItem>
                    ))}
                  </List>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    id="inputText"
                    label=""
                    multiline
                    variant="outlined"
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                    className="new-message-input-field"
                    onKeyPress={handleKeypress}
                  />
                  <button variant="contained" onClick={handleSendMessage} className="send-message-button">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            )
          }
        ]}
      />
      }
      {props.user.roles[0].name !== 'Admin' && 
        <div style={{ width: "100%" }}>
          <div className={classes.chatWindow}>
            <List component="nav">
              {messages.map((message, i) => (
                <ListItem
                  key={i}
                  className={`message-item ${
                    message.ufrom==props.user.id ? "my-message" : "received-message"
                  }`}
                >
                  <ListItemText primary={message.message} />
                </ListItem>
              ))}
            </List>
          </div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              id="inputText"
              label=""
              multiline
              variant="outlined"
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..."
              className="new-message-input-field"
              onKeyPress={handleKeypress}
            />
            <button variant="contained" onClick={handleSendMessage} className="send-message-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatContent))