/**
 * @pathname /gahuza/amakuru/2016/02/160215_map_amakuru_test1
 */

it('I can see a page title - AMP', () => {
  const pageTitle = amp.document.querySelector('title').textContent;

  expect(pageTitle).toBeTruthy();
  expect(pageTitle).toMatchInlineSnapshot(
    `"Laurent Gbagbo imbere ya sentare i La Haye - BBC News Gahuza"`,
  );
});

it('I can see a page title - Canonical', () => {
  const pageTitle = canonical.document.querySelector('title').textContent;

  expect(pageTitle).toBeTruthy();
  expect(pageTitle).toMatchInlineSnapshot(
    `"Laurent Gbagbo imbere ya sentare i La Haye - BBC News Gahuza"`,
  );
});

it(`I can see the brand logo in the header - AMP`, () => {
  const logo = amp.document.querySelector('header svg');

  expect(logo).toBeInTheDocument();
  expect(logo.parentNode.textContent).toMatchInlineSnapshot(
    `"BBC News, Gahuza"`,
  );
});

it(`I can see the brand logo in the header - Canonical`, () => {
  const logo = canonical.document.querySelector('header svg');

  expect(logo).toBeInTheDocument();
  expect(logo.parentNode.textContent).toMatchInlineSnapshot(
    `"BBC News, Gahuza"`,
  );
});

it('I can see a skip to content link that links to the main content of the page - AMP', () => {
  const skipToContentEl = amp.document.querySelector('[href="#content"]');
  const h1El = amp.document.querySelector('h1');

  expect(skipToContentEl.getAttribute('href')).toBe('#content');
  expect(h1El.getAttribute('id')).toBe('content');
  expect(h1El.getAttribute('tabindex')).toBe('-1');
  expect(skipToContentEl.textContent).toMatchInlineSnapshot(
    `"Simbira ku birimwo"`,
  );
});

it('I can see a headline - AMP', () => {
  const headline = amp.document.querySelector('h1').textContent;

  expect(headline).toBeTruthy();
  expect(headline).toMatchInlineSnapshot(
    `"Laurent Gbagbo imbere ya sentare i La Haye"`,
  );
});

it('I can see a skip to content link that links to the main content of the page - Canonical', () => {
  const skipToContentEl = canonical.document.querySelector('[href="#content"]');
  const h1El = canonical.document.querySelector('h1');

  expect(skipToContentEl.getAttribute('href')).toBe('#content');
  expect(h1El.getAttribute('id')).toBe('content');
  expect(h1El.getAttribute('tabindex')).toBe('-1');
  expect(skipToContentEl.textContent).toMatchInlineSnapshot(
    `"Simbira ku birimwo"`,
  );
});

it('I can see a headline - Canonical', () => {
  const headline = canonical.document.querySelector('h1').textContent;

  expect(headline).toBeTruthy();
  expect(headline).toMatchInlineSnapshot(
    `"Laurent Gbagbo imbere ya sentare i La Haye"`,
  );
});

it('I can see the footer copyright - AMP', () => {
  const footerCopyright = amp.document.querySelector('footer div p')
    .textContent;

  expect(footerCopyright).toBeTruthy();
  expect(footerCopyright).toMatchInlineSnapshot(
    `"© 2020 BBC. BBC ntibazwa ibivuye ku zindi mbuga. Soma ibijanye n'aho duhagaze ku mihora ijana ahandi"`,
  );
});

it('I can see the footer copyright - Canonical', () => {
  const footerCopyright = amp.document.querySelector('footer div p')
    .textContent;

  expect(footerCopyright).toBeTruthy();
  expect(footerCopyright).toMatchInlineSnapshot(
    `"© 2020 BBC. BBC ntibazwa ibivuye ku zindi mbuga. Soma ibijanye n'aho duhagaze ku mihora ijana ahandi"`,
  );
});
