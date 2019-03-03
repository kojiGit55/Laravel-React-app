import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EmployeeList from "./EmployeeList";
import Input from "./Input";

export default class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_id: '',
            name: '',
            year: '',
            department_id: '',
            position_id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    addEmployee() {
        axios.post('/api/employees', {
            employee_id: this.state.employee_id,
            name: this.state.name,
            year: this.state.year,
            department_id: this.state.department_id,
            position_id: this.state.position_id,
        }).then(res => {
            alert('社員の追加に成功しました');
        }).catch(err => {
            alert('社員の追加に失敗しました');
        }).finally(() => {
            this.props.handleChangePage('list');
        })
    }

    render() {
        return (
            <div>
                <button　onClick={this.props.handleChangePage.bind(this, 'list')}>一覧に戻る</button>
                <Input labelText="社員番号" name="employee_id" inputValue={this.state.employee_id} handleChange={this.handleChange} />
                <Input labelText="名前"　name="name" inputValue={this.state.name} handleChange={this.handleChange} />
                <Input labelText="勤続年数"　name="year" inputValue={this.state.year} handleChange={this.handleChange} />
                <Input labelText="部署"　name="department_id" inputValue={this.state.department_id} handleChange={this.handleChange} />
                <Input labelText="役職"　name="position_id" inputValue={this.state.position_id} handleChange={this.handleChange} />

                <button onClick={this.addEmployee}>社員を追加</button>
            </div>
        );
    }
}
