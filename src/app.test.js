import {sum} from './app';
import {expect} from 'chai';
import env from 'jsdom';
import fs from 'fs';

describe('add 1 + 2', () => {
  it('should equal 3', () => {
    expect(sum(1,2)).to.equal(3);
  });
});

describe('index.html', () => {
  it('should say Hello World', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new env.JSDOM(index);
    const title = dom.window.document.getElementById('title');
    expect(title.innerHTML).to.equal('Hello World');
    dom.window.close();
  });
});

