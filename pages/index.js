import Head from 'next/head';
import BasePathLink from '@helpers/BasePathLink';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Darkaico</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      </Head>
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Darkaico
        </div>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">Hola!</h1>
          <hr className="w3-border-grey"/>
          
          <p className="w3-large w3-center"><a href='https://twitter.com/darkaico' target="_blank">Github</a></p>
          <p className="w3-large w3-center"><a href='https://github.com/darkaico' target="_blank">Twitter</a></p>
          {/* <BasePathLink href='/cats'><a>Test this SPA</a></BasePathLink> */}
        </div>
        <div className="w3-display-bottomleft w3-padding-large">
          Free template credits to <a href="https://www.w3schools.com/w3css/w3css_templates.asp" target="_blank">W3 Schools</a>
        </div>
        <div className="w3-display-bottomright w3-padding-large">    
        Photo by <a href="https://unsplash.com/@kugnharski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rodrigo Kugnharski</a> on <a href="https://unsplash.com/s/photos/aerial-view?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </div>
    </React.Fragment>
  );
};

