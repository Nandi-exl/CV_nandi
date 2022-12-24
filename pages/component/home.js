import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function HomeContent() {
  const [widthFlag, setWidthFlag] = useState('0');
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setWidthFlag('1');
    }
  }, []);

  return (
    <>
      <Head>
        <title>main keyword</title>
      </Head>
      <main>
        <Container>
          <Row>
            {widthFlag == '1' ? (
              <>
                <Col
                  xs={6}
                  style={{
                    marginTop: '10rem',
                  }}
                >
                  <span>The second Column</span>
                </Col>
                <Col xs={6}>
                  <Image
                    src='/homeimage.jpg'
                    alt='home_imagee'
                    width={700}
                    height={600}
                    style={{ marginLeft: '9rem' }}
                  />
                </Col>
              </>
            ) : (
              <>
                <Col>
                  <Image
                    src='/homeimage.jpg'
                    alt='home_imagee'
                    width={300}
                    height={300}
                  />
                </Col>
                <Col>
                  <span>The second Column</span>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default HomeContent;
