import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter, Button, Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import FollowButton from '../../components/Following/Follow';

const UserProfile = ({ user, onFollow }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Image src={user.image} alt={user.name} roundedCircle />
      <CardBody>
        <CardTitle>{user.name}</CardTitle>
        <CardText>{user.title}</CardText>
        <ListGroup>
          <ListGroupItem>Articles: {user.articles_count}</ListGroupItem>
          <ListGroupItem>Followers: {user.followers_count}</ListGroupItem>
          <ListGroupItem>Rating: {user.rating}</ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter>
        <FollowButton userId={user.id} />
      </CardFooter>
    </Card>
  );
};

export default UserProfile;