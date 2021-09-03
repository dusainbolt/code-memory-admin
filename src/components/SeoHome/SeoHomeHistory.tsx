import React, { useState } from 'react';

import { List, Avatar, Spin, Timeline, Typography } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';
import Box from '../../common/Box';

export const SeoHomeHistory = () => {
  const loading = false;
  const [stateData, setStateData] = useState([
    12312, 123, 123, 12, 312, 3, 213, 12, 321, 321, 321, 321, 123, 21, 321, 312, 321, 321, 321, 3, 21, 312, 321, 321, 321, 213, 12, 321, 321, 321,
    321, 213,
  ]);

  return (
    <Box className="history-wrap">
      <Timeline mode="left">
        <Timeline.Item label="2015-09-01">
          <Typography.Paragraph className="hover-action">Create a services</Typography.Paragraph>
        </Timeline.Item>
        <Timeline.Item label="2015-09-01">
          <Typography.Paragraph className="hover-action">Create a services</Typography.Paragraph>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
};
