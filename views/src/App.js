import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./components/Post";
import Show from "./components/Show";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DetailedPost from "./components/DetailedPost";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
    <Container
      style={{ minHeight: "100vh" }}
    >
      {/* nav here */}
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/show" component={Show} />
        <Route path="/show/:id" component={DetailedPost} />
      </Switch>

    </Container>
    </Router>
  );
}

export default App;
