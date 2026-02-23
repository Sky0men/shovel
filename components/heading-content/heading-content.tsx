import { HeadingBuilder } from '../heading-builder/heading-builder';
import { InformationAboutCompany } from '../information-about-company/information-about-company';
import { Styled } from './styled';

const HeadingContent = () => {
  return (
    <Styled.HeadingWrapper vertical gap={32}>
      <HeadingBuilder />
      <InformationAboutCompany />
    </Styled.HeadingWrapper>
  );
};

export { HeadingContent };
