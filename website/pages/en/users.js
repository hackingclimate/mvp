/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>The Honecomb</h1>
              <p>All the cool things being built by the swarm</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you building something?</p>
            <a href={editUrl} className="button">
              Add your project
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;


/*
### Our Projects
[1Hive](https://rinkeby.aragon.org/#/onehive.aragonid.eth) - Our home on Aragon. We are experimenting with and documenting processes and tools to coordinate effort in an on-chain cooperative.
**Status:** 👨‍🔬 *Testing*

[Apiary](https://github.com/1Hive/Apiary) - Apiary is mechanism for accountable crowdfunding using bonding curves and a continuous tap. Aragon has funded the [Aragon Black](https://aragon.black) team to implement Apiary as a fundraising mechanism for Aragon Organizations.
**Status:** 🛠 *In Development*

[Commons License](https://medium.com/hive-commons/harberger-taxation-and-open-source-58dcdbab140d) - An alternative to permissive and copyleft open source licenses intended to support a self-sustaining digital commons inspired by [radical markets](http://radicalmarkets.com).
 **Status:** 💡 *Early Concept*
 */
