import { Collapse } from 'antd';
import Title from 'antd/es/typography/Title';
import styled from 'styled-components';

const Heading = styled(Title)`
  && {
    font-weight: bold;
    margin: 0;
  }
`;

const CleanCollapse = styled(Collapse)`
  .ant-collapse-expand-icon {
    color: #0000f5;
  }
  .ant-collapse-body {
    padding: 0 16px !important;
  }
  .ant-collapse-header {
    padding: 8px 16px !important;
  }
`;

export const Styled = {
  Heading,
  CleanCollapse,
};
