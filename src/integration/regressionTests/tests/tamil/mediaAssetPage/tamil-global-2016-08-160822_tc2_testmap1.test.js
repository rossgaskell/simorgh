/**
 * @pathname /tamil/global/2016/08/160822_tc2_testmap1
 */

it('I can see a page title - AMP', () => {
  const pageTitle = amp.document.querySelector('title').textContent;

  expect(pageTitle).toBeTruthy();
  expect(pageTitle).toMatchInlineSnapshot(
    `"கோலாகலமாக நிறைவு பெற்ற ரியோ ஒலிம்பிக் போட்டிகள் - BBC News தமிழ்"`,
  );
});

it('I can see a page title - Canonical', () => {
  const pageTitle = canonical.document.querySelector('title').textContent;

  expect(pageTitle).toBeTruthy();
  expect(pageTitle).toMatchInlineSnapshot(
    `"கோலாகலமாக நிறைவு பெற்ற ரியோ ஒலிம்பிக் போட்டிகள் - BBC News தமிழ்"`,
  );
});

it(`I can see the brand logo in the header - AMP`, () => {
  const logo = amp.document.querySelector('header svg');

  expect(logo).toBeInTheDocument();
  expect(logo.parentNode.textContent).toMatchInlineSnapshot(
    `"BBC News, தமிழ்"`,
  );
});

it(`I can see the brand logo in the header - Canonical`, () => {
  const logo = canonical.document.querySelector('header svg');

  expect(logo).toBeInTheDocument();
  expect(logo.parentNode.textContent).toMatchInlineSnapshot(
    `"BBC News, தமிழ்"`,
  );
});

it('I can see a skip to content link that links to the main content of the page - AMP', () => {
  const skipToContentEl = amp.document.querySelector('[href="#content"]');
  const h1El = amp.document.querySelector('h1');

  expect(skipToContentEl.getAttribute('href')).toBe('#content');
  expect(h1El.getAttribute('id')).toBe('content');
  expect(h1El.getAttribute('tabindex')).toBe('-1');
  expect(skipToContentEl.textContent).toMatchInlineSnapshot(
    `"உள்ளடக்கத்துக்குத் தாண்டிச் செல்க"`,
  );
});

it('I can see a headline - AMP', () => {
  const headline = amp.document.querySelector('h1').textContent;

  expect(headline).toBeTruthy();
  expect(headline).toMatchInlineSnapshot(
    `"கோலாகலமாக நிறைவு பெற்ற ரியோ ஒலிம்பிக் போட்டிகள்"`,
  );
});

it('I can see a skip to content link that links to the main content of the page - Canonical', () => {
  const skipToContentEl = canonical.document.querySelector('[href="#content"]');
  const h1El = canonical.document.querySelector('h1');

  expect(skipToContentEl.getAttribute('href')).toBe('#content');
  expect(h1El.getAttribute('id')).toBe('content');
  expect(h1El.getAttribute('tabindex')).toBe('-1');
  expect(skipToContentEl.textContent).toMatchInlineSnapshot(
    `"உள்ளடக்கத்துக்குத் தாண்டிச் செல்க"`,
  );
});

it('I can see a headline - Canonical', () => {
  const headline = canonical.document.querySelector('h1').textContent;

  expect(headline).toBeTruthy();
  expect(headline).toMatchInlineSnapshot(
    `"கோலாகலமாக நிறைவு பெற்ற ரியோ ஒலிம்பிக் போட்டிகள்"`,
  );
});

it('I can see the footer copyright - AMP', () => {
  const footerCopyright = amp.document.querySelector('footer div p')
    .textContent;

  expect(footerCopyright).toBeTruthy();
  expect(footerCopyright).toMatchInlineSnapshot(
    `"© 2020 பிபிசி. வெளியார் இணைய தளங்களின் உள்ளடக்கத்துக்கு பிபிசி பொறுப்பாகாது. வெளியார் இணைப்புகள் தொடர்பான எங்கள் அணுகுமுறையைப் பற்றி படிக்கவும்."`,
  );
});

it('I can see the footer copyright - Canonical', () => {
  const footerCopyright = amp.document.querySelector('footer div p')
    .textContent;

  expect(footerCopyright).toBeTruthy();
  expect(footerCopyright).toMatchInlineSnapshot(
    `"© 2020 பிபிசி. வெளியார் இணைய தளங்களின் உள்ளடக்கத்துக்கு பிபிசி பொறுப்பாகாது. வெளியார் இணைப்புகள் தொடர்பான எங்கள் அணுகுமுறையைப் பற்றி படிக்கவும்."`,
  );
});
