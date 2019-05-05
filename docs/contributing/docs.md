---
id: docs 
sidebar_label: Docs 🦕  
title: Documenting with Docusaurus 🦕
---

## This website is built with [Docusaurus](https://docusaurus.io)! 🦕

This means that unless you want to change the architecture of the site (adding/removing sections, reorganizing, etc) you should be able to just create and edit [Markdown](https://guides.github.com/features/mastering-markdown/) docs. 

## Examples 👀

If you want an example of what Docusaurus can do, look no further than the official [Docusaurus website](https://docusaurus.io/). Another great example is [hack.aragon](https://hack.aragon.org/). Since Docusaurus is based on [React](https://reactjs.org), you can extend and customize it as little or as much as you'd like. 

## Docs 📚

Docusaurus has great docs. Rather than recreating them, I'll just link to the most useful ones for editing this site.
- [Navigation and Sidebars](https://docusaurus.io/docs/en/navigation) - this explains how to link a new Markdown document to the rest of the webiste.
- [Publishing your site](https://docusaurus.io/docs/en/publishing) - TL;DR you have to uncomment some stuff in `siteConfig.js`, then navigate to the `website` directory, then run the script below

	GIT_USER=your-username\
		CURRENT_BRANCH=master \
		yarn run publish-gh-pages

When you're done publishing, remember to go back to `siteConfig.js` and uncomment the publish params and go back to the local dev build!

## Notes 📝

If you want the fun minimap to show up on the left side of the screen you need to use \#\# before each title.






