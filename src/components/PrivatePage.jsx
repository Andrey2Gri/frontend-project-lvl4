import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import { fetchData } from '../slices/dataSlice.js';
import ChatSidebar from './ChatSidebar.jsx';
import ChatBox from './ChatBox.jsx';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }
  return {};
};

const PrivatePage = () => {
  const dispatch = useDispatch();
  const header = getAuthHeader();
  const { channelsInfo, messagesInfo } = useSelector((state) => state.data);
  console.log('channelsInfo:', channelsInfo);

  useEffect(() => {
    dispatch(fetchData(header));
  }, [dispatch]);

  if (!channelsInfo.channels) {
    return null;
  }
  const fakeMessages = [
    {
      body: 'Hello I\'m Admin', channelId: 1, username: 'admin', id: 4,
    },
    {
      body: 'Hello I\'m Milena', channelId: 1, username: 'Milena', id: 3,
    },
    {
      body: 'Hello I\'m Nika', channelId: 1, username: 'Nika', id: 2,
    },
  ];
  return (
    <>
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <Row className="row h-100 bg-white flex-md-row">
          <Col className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
            <ChatSidebar
              channels={channelsInfo.channels}
              activeChannelId={channelsInfo.currentChannelId}
            />
          </Col>
          <Col className="p-0 h-100">
            <Col className="p-0 h-100">
              <ChatBox
                messages={messagesInfo.messages.length === 0
                  ? fakeMessages
                  : messagesInfo.messages}
                activeChannelId={channelsInfo.currentChannelId}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivatePage;
