import getMetaUrls from '.';

const tests = [
  {
    origin: 'https://www.bbc.co.uk',
    pathname: '/news/articles/c1234567890o',
    expected: {
      canonicalLink: 'https://www.bbc.co.uk/news/articles/c1234567890o',
      ampLink: 'https://www.bbc.co.uk/news/articles/c1234567890o.amp',
      canonicalUkLink: 'https://www.bbc.co.uk/news/articles/c1234567890o',
      ampUkLink: 'https://www.bbc.co.uk/news/articles/c1234567890o.amp',
      canonicalNonUkLink: 'https://www.bbc.com/news/articles/c1234567890o',
      ampNonUkLink: 'https://www.bbc.com/news/articles/c1234567890o.amp',
    },
    assertion: 'should return expected output for .co.uk origin and pathname',
  },
  {
    origin: 'https://www.bbc.com',
    pathname: '/news/articles/c1234567890o',
    expected: {
      canonicalLink: 'https://www.bbc.com/news/articles/c1234567890o',
      ampLink: 'https://www.bbc.com/news/articles/c1234567890o.amp',
      canonicalUkLink: 'https://www.bbc.co.uk/news/articles/c1234567890o',
      ampUkLink: 'https://www.bbc.co.uk/news/articles/c1234567890o.amp',
      canonicalNonUkLink: 'https://www.bbc.com/news/articles/c1234567890o',
      ampNonUkLink: 'https://www.bbc.com/news/articles/c1234567890o.amp',
    },
    assertion: 'should return expected output for .com origin and pathname',
  },
  {
    origin: 'https://www.bbc.com',
    pathname: '/serbian/lat',
    expected: {
      canonicalLink: 'https://www.bbc.com/serbian/lat',
      ampLink: 'https://www.bbc.com/serbian/lat.amp',
      canonicalUkLink: 'https://www.bbc.co.uk/serbian/lat',
      ampUkLink: 'https://www.bbc.co.uk/serbian/lat.amp',
      canonicalNonUkLink: 'https://www.bbc.com/serbian/lat',
      ampNonUkLink: 'https://www.bbc.com/serbian/lat.amp',
    },
    assertion:
      'should return expected output for .com origin and serbian/lat pathname',
  },
];

tests.forEach(({ origin, pathname, expected, assertion }) => {
  it(assertion, () => {
    expect(getMetaUrls(origin, pathname)).toEqual(expected);
  });
});
