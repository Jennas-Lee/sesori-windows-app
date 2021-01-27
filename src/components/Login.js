import React from "react";
// eslint-disable-next-line
import { Button, Col, Container, Form, FormText, Input, Label, Row } from "reactstrap";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.phoneChange = this.phoneChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.loginKeyUpSubmit = this.loginKeyUpSubmit.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.state = {userPhone: "", userPassword: ""}
    }

    phoneChange(event) {
        this.setState({ userPhone: event.target.value });
    }

    passwordChange(event) {
        this.setState({ userPassword: event.target.value });
    }

    loginKeyUpSubmit(event) {
        if(event.keyCode === 13) {
            this.loginSubmit();
        }
    }

    loginSubmit(event) {
        axios.post("http://localhost:8081/auth/login", {
            phone: this.state.userPhone,
            password: this.state.userPassword
        })
            .then((response) => {
                console.log(response.data);
                alert(response.data.token);
            })
            .catch((error) => {
                // console.error(error);
                alert(error);
            });
    }



    render() {
        return (
            <Container className="login-container">
                <Row>
                    <Col className="align-self-center">
                        <img src="smc.png" alt="세명컴퓨터고등학교 로고" className="mx-auto" style={{display: "block"}} draggable="false"/>
                    </Col>
                    <Col className="align-self-center">
                        <Form
                            onKeyUp={this.loginKeyUpSubmit}
                        >
                            <h2 className="text-center mb-4">세명컴퓨터고등학교<br/>메신저</h2>
                            <div className="form-floating">
                                <Input
                                    type="text"
                                    name="userPhone"
                                    value={this.state.userPhone}
                                    onChange={this.phoneChange.bind(this)}
                                    id="inputPhone"
                                    placeholder="전화번호"
                                    required={true}
                                    autoFocus/>
                                <Label for="inputPhone">전화번호</Label>
                            </div>
                            <div className="form-floating">
                                <Input
                                    type="password"
                                    name="userPassword"
                                    value={this.state.userPassword}
                                    onChange={this.passwordChange.bind(this)}
                                    id="inputPassword"
                                    placeholder="비밀번호"
                                    required={true}/>
                                <Label for="inputPassword">비밀번호</Label>
                            </div>
                            <Button onClick={this.loginSubmit} color="primary" size="lg" className="w-100 mt-4">로그인</Button>
                            {/*<FormText><a href="#">회원가입</a>&nbsp;<a href="#">비밀번호 찾기</a></FormText>*/}
                        </Form>
                        <a href="/status">임시버튼</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;