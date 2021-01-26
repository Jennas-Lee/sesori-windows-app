import React from "react";
import { Table, Container } from "reactstrap";

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table borderless>
                <tbody>
                    <tr>
                        <th className="col-sm-4">사용자</th>
                        <td>***</td>
                    </tr>
                    <tr>
                        <th className="col-sm-4">첨부파일 저장 위치</th>
                        <td>***</td>
                    </tr>
                    <tr>
                        <th className="col-sm-4">알림</th>
                        <td>***</td>
                    </tr>
                    <tr>
                        <th className="col-sm-4">테마</th>
                        <td>***</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default Settings;