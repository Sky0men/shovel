import { Footer, Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

const LayoutHeader = styled(Header)`
  height: auto !important;
  lineheight: normal !important;
  background: linear-gradient(to right, #2563eb, #1e40af);
`;

const LayoutFooter = styled(Footer)`
  height: auto !important;
  lineheight: normal !important;
  background: #1f2937;
`;

export const Styled = {
  LayoutHeader,
  LayoutFooter,
};
