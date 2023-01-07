import React from 'react';
import { ExerciseCard } from './styled';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface IExeciseCardProps {
  imageLink: string;
  title: string;
  description: string;
}

const ExerciseCardComponent = ({
  imageLink,
  title,
  description
}: IExeciseCardProps) => {
  return (
    <ExerciseCard>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      ></Card>
    </ExerciseCard>
  );
};

export default ExerciseCardComponent;
