import React, { useEffect, useState } from 'react'
import { Button, Form, Input, DatePicker, Radio, Rate, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, editUser } from '../../redux/actions/api';
import { addUser } from '../../redux/actions/api';
import moment from 'moment';

// const addToLocal = (obj) => {

//     let getLocal = JSON.parse(localStorage.getItem('users'));
//     if(getLocal){
//         getLocal = [...getLocal, obj];
//     }else{
//         getLocal = [obj];
//     }
//     localStorage.setItem('users',JSON.stringify(getLocal));
// }

const Add = ({user}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({});
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            form.setFieldsValue({
                ...user,
                dob : moment(user?.dob,"DD-MM-YYYY")
            });
        }
    }, [])


    const users = useSelector(state => state.users);

    const onFinish = (values) => {
        if (!user) {
            const id = uuidv4();
            const formValues = {
                'id': id,
                ...values,
                'dob': values['dob'].format('DD-MM-YYYY')
            }
            dispatch(addUser(formValues));
        }else{
            console.log("Vl : ", values);
            console.log("Date Vl : ", values?.dob?.format("DD-MM-YYYY"));
            const formValues = {
                id : user?.id,
                ...values,
                dob : values?.dob?.format("DD-MM-YYYY")
            }
            dispatch(editUser(formValues));
        }
        dispatch(fetchUsers());
        form.resetFields();21
        setIsModalOpen(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button onClick={showModal} type="primary"> { user ? <>Edit</> : <>Add</> } </Button>
            <Modal title={user ? "Edit user" : "Add user"} footer={<></>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <div>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        // initialValues={{
                        //     ...values
                        // }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="dob" label="Date of birth" >
                            <DatePicker format="YYYY-MM-DD" />
                        </Form.Item>

                        <Form.Item name="gender" label="Gender">
                            <Radio.Group>
                                <Radio value="male">male</Radio>
                                <Radio value="female">female</Radio>
                                <Radio value="other">other</Radio>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="rate" label="Rate">
                            <Rate />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            { user ? <>
                                <Button type="primary" htmlType="submit">
                                    Edit
                                </Button>
                            </> : <>
                                <Button type="primary" htmlType="submit">
                                    Add
                                </Button>
                            </>}
                        </Form.Item>
                    </Form>
                </div>
            </Modal>

        </>
    )
}

export default Add;