import React from 'react';

import { List, Avatar, Spin, Timeline, Typography } from 'antd';

// import InfiniteScroll from 'react-infinite-scroller';
import Box from '../../common/Box';

export const SeoHomeHistory = () => {
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
