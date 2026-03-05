import { Content, Footer, Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

const LayoutHeader = styled(Header)`
  height: auto !important;
  lineheight: normal !important;
  background: linear-gradient(to right, #2563eb, #1e40af);
  @media (max-width: 768px) {
    padding: 0px 24px;
  }
`;

const LayoutFooter = styled(Footer)`
  height: auto !important;
  lineheight: normal !important;
  background: #1f2937;
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const LayoutContent = styled(Content)`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Styled = {
  LayoutHeader,
  LayoutFooter,
  LayoutContent,
};
