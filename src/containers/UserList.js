import { Button, Table } from "antd";
import React from "react";
import { connect } from "react-redux";
import { getUserList } from "../reducers";
import { delUser } from "../actions";

const UserList = ({ users = [], delUser }) => (
  <Table
    columns={[
      {
        title: "姓名",
        dataIndex: "name",
        render: (value, record) => <h4>{record.name}</h4>,
      },
      {
        title: "邮箱",
        dataIndex: "mail",
        render: (value, record) => <h4>{record.mail}</h4>,
      },
      {
        title: "在线状态",
        dataIndex: "isOnline",
        render: (value, record) => (
          <h4>{record.isOnline === 0 ? "离线" : "在线"}</h4>
        ),
      },
      {
        title: "操作",
        dataIndex: "action",
        render: (value, record) => (
          <>
            <Button onClick={() => delUser(record)}>删除</Button>
          </>
        ),
      },
    ]}
    dataSource={users}
  />
);

const mapStateToProps = (state) => ({
  users: getUserList(state.getAllUsers),
});

export default connect(mapStateToProps, { delUser })(UserList);
