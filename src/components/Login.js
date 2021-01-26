import React from "react";
import {Button, Col, Container, Form, Input, Label, Row} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <a href="/status">임시버튼</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;