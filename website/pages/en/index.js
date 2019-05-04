/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );
const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/1hive.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
						<Button href={docUrl('guides/welcome.html')}>Learn</Button>
            <Button href="https://rinkeby.aragon.org/#/0xe520428C232F6Da6f694b121181f907931fD2211">Try It Out!</Button>
						<Button href={docUrl('contributing/welcome.html')}>Contribute</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'The hive is a dynamic ecosystem where everyone has a voice',
            image: `${baseUrl}img/nest.png`,
            imageAlign: 'top',
            title: 'Community Driven',
          },
          {
            content: 'You can use all the research, code, and projects we ship',
            image: `${baseUrl}img/hibiscus.png`,
            imageAlign: 'top',
            title: 'Open Source',
          },
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
				<img></img>
        <h2>Get Some Honey!</h2>
				<div>
					<h4>
						Check out open issues in the DAO 🐝
					</h4>
					<a href='https://rinkeby.aragon.org/#/0xe520428C232F6Da6f694b121181f907931fD2211/0xc2555abaed3797b52248e814172d2bea6728e542'>
						<img src='img/honeypot.png' />
					</a>
				</div>
      </div>
    );

    const Project1 = () => (
      <Block background="light">
        {[
          {
            content:
						'1Hive is our home on Aragon. We are experimenting with and documenting processes and tools developed by Autark and Aragon One to coordinate effort in an open on-chain cooperative.  ' + 
						'\n**Status:** 👨‍🔬 Testing',
            image: `${baseUrl}img/1hive.png`,
            imageAlign: 'right',
            title: '[1Hive](http://1hive.org/)',
          },
        ]}
      </Block>
    );

    const Project2 = () => (
      <Block id="try">
        {[
          {
            content:
						'Apiary is a mechanism for accountable crowdfunding using bonding curves and a continuous tap. Aragon has funded the Aragon Black team to implement Apiary as a fundraising application available to Aragon Organizations.  ' +
						'\n**Status:** 🛠 In Development',
            image: `${baseUrl}img/apiary.png`,
            imageAlign: 'left',
            title: '[Apiary](https://github.com/1Hive/Apiary)',
          },
        ]}
      </Block>
    );

    const Project3 = () => (
      <Block background="dark">
        {[
          {
            content:
						'An alternative to permissive and copyleft open source licenses intended to support a self-sustaining digital commons inspired by radical markets.  ' +
						'\n**Status:** 💡 Early Concept',
            image: `${baseUrl}img/hive-commons.png`,
            imageAlign: 'right',
            title: '[Commons License](https://github.com/1Hive/commons-license)',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>What else have we built?</h2>
          <p>Checkout the honeycomb!</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Projets
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <Project1 />
          <Project2 />
          <Project3 />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
