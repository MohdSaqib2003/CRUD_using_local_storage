import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../../redux/actions/api';
import { Table, Button, Popconfirm } from 'antd';
import Edit from '../add';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'DOB',
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    },
];

const Show = () => {
    const [dataSource, setDataSource] = useState([]);
    const dispatch = useDispatch();
    const users = useSelector(state => state?.users?.data);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const confirm = (id) => {

        dispatch(deleteUser(id));
        dispatch(fetchUsers());
    };
    const cancel = (e) => {
        console.log(e);
    };

    useEffect(() => {
        const tempDataSource = users?.map((user) => {
            return {
                name: user?.name,
                dob: user?.dob,
                gender: user?.gender,
                rate: user?.rate,
                actions: <>
                    <Edit user={user} /> {" "}
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => confirm(user?.id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"

                    >
                        <Button type='danger'>Delete</Button>
                    </Popconfirm>
                </>
            }
        })
        setDataSource(tempDataSource);
    }, [users])



    return (
        <div style={{border:'1px solid black'}}>
            <h2>All users</h2>
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}

export default Show