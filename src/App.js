import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Form, Row, Col, Button, Input, Label, Nav, NavItem, NavLink } from 'reactstrap';

function Login(props) {
    return (
        <Container className="login-container">
            <Row>
                <Col className="align-self-center">
                    <img src="smc.png" alt="세명컴퓨터고등학교 로고" className="mx-auto" style={{display: "block"}} draggable="false"/>
                </Col>
                <Col className="align-self-center">
                    <Form>
                        <h2 className="text-center mb-4">세명컴퓨터고등학교<br/>메신저</h2>
                        <Label for="inputPhone" className="visually-hidden">전화번호</Label>
                        <Input type="text" id="inputPhone" placeholder="전화번호" required="true" autoFocus></Input>
                        <Label for="inputPassword" className="visually-hidden">비밀번호</Label>
                        <Input type="password" id="inputPassword" placeholder="비밀번호" required="true"></Input>
                        <Button color="primary" size="lg" type="submit" className="w-100 mt-4">로그인</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

function Main(props) {
    return (
        <Nav className="flex-column main-nav">
            <NavItem>
                <NavLink className="text-center">
                    <img src="./icons/chat-left.svg" alt=""/>
                    <p>메신저</p>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-center">
                    <img src="./icons/award.svg" alt=""/>
                    <p>상점</p>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-center">
                    <img src="./icons/calendar-date.svg" alt=""/>
                    <p>일정</p>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-center">
                    <img src="./icons/clock.svg" alt=""/>
                    <p>시간표</p>
                </NavLink>
            </NavItem>
        </Nav>
    );
}

function App() {
    return (
        <main>
            <Main></Main>
            <Container>
                {/*<Login/>*/}
            </Container>
        </main>
    );
}

export default App;
