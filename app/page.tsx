import { HeadingContent } from '@/components/heading-content/heading-content';
import { Layout } from 'antd';
import { Styled } from './styled';
import { DescriptionCompany } from '@/components/description-company/description-company';
import { OurProducts } from '@/components/our-products/our-products';
import { FooterContent } from '@/components/footer-content/footer-content';
import { OtherProducts } from '@/components/other-products/other-products';

export default function Home() {
  return (
    <Layout>
      <Styled.LayoutHeader>
        <HeadingContent />
      </Styled.LayoutHeader>
      <Layout>
        <Styled.LayoutContent>
          <DescriptionCompany />
          <OurProducts />
          <OtherProducts />
        </Styled.LayoutContent>
      </Layout>
      <Layout>
        <Styled.LayoutFooter>
          <FooterContent />
        </Styled.LayoutFooter>
      </Layout>
    </Layout>
  );
}
