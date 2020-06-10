import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { getRegdata } from '@/actions/login'
export default @connect(state=>{
  return {
  }
},{
  getRegdata
})
@Form.create({ name: 'normal_login' })
class index extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getRegdata(values)
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='page_reg'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' },
              {pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,message:'不能少于6位数字字母组合'}],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
            <Button type="default" onClick = {()=>{this.props.history.push('/login')}}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}