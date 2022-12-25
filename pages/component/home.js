import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function HomeContent() {
  const [widthFlag, setWidthFlag] = useState('0');
  const [imageSize, setImageSize] = useState(0);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setWidthFlag('1');
      setImageSize(600);
    } else {
      setImageSize(300);
    }
  }, []);

  return (
    <>
      <Head>
        <title>main keyword</title>
      </Head>
      <main>
        <Row>
          {widthFlag == '1' ? (
            <>
              <Col
                xs={6}
                style={{
                  marginTop: '10rem',
                }}
              >
                <span style={{ marginLeft: '12rem' }}>The second Column</span>
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
              <Col xs={12} className='text-center'>
                <Image
                  src='/homeimage.jpg'
                  alt='home_imagee'
                  width={300}
                  height={300}
                />
              </Col>

              <Col xs={12} className='text-center'>
                <span>The second Column</span>
              </Col>
            </>
          )}
        </Row>

        <Row style={{ backgroundColor: 'rgb(44, 39, 39)' }}>
          <Col>
            <span> This is second test</span>
          </Col>
          <Col>
            <Image
              src='/homeimage2.jpg'
              alt='home_image2'
              width={imageSize}
              height={imageSize}
            />
          </Col>
        </Row>
      </main>
    </>
  );
}

export default HomeContent;
