/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('welcome.html', this.props.language)}>
              Getting Started 👋
            </a>
						<a href={this.docUrl('guides/welcome.html', this.props.language)}>
              Guides 📚
            </a>
						<a href={this.docUrl('contributing/welcome.html', this.props.language)}>
              Contributing 🐝
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              The Honeycomb 🍯
            </a>
            <a
              href="https://github.com/1Hive/"
              target="_blank"
              rel="noreferrer noopener">
              GitHub 💻
            </a>
            <a
							href="https://keybase.io/team/1hive/"
              target="_blank"
              rel="noreferrer noopener">
              Keybase 🗝️📱
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
          </div>
        </section>

        <a
          href="https://github.com/1Hive/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/1hive.png`}
            alt="1Hive"
          />
        </a>
				<section className="copyright">
					<a href='https://www.gnu.org/licenses/gpl.html'>
						{this.props.config.copyright}
					</a>
				</section>
      </footer>
    );
  }
}

module.exports = Footer;
