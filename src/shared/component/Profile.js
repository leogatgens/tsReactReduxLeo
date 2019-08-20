import React from "react";
import { Container, Row, Col } from "reactstrap";


import Loading from "./Loading";
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  debugger;
  const { loading, user,getTokenSilently } = useAuth0();
  const token =  getTokenSilently();
  if (loading || !user) {
    return <Loading />;
  }

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
      
      </Row>
    </Container>
  );
};

export default Profile;
