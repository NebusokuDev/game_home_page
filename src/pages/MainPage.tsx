import {HeaderMegaMenu} from '../component/Header.tsx';
import {FooterLinks} from '../component/Footer.tsx';
import {AspectRatio, Container, Overlay} from '@mantine/core';

export const MainPage = () => {
  return (
    <div>
      <HeaderMegaMenu/>
      <main>
        <Container fluid h="100vh" color="red">
          <AspectRatio ratio={16 / 9} mah="100vh" mx="auto" pos="relative">
            <img
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
              alt="Demo"
            />
            <Overlay/>
          </AspectRatio>
        </Container>
        <Container h="100vh">
          キャラ紹介
        </Container>
      </main>
      <FooterLinks/>
    </div>
  );
};
