import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import AmpDecorator from '../../../../.storybook/helpers/ampDecorator';
import WithTimeMachine from '#testHelpers/withTimeMachine';

import { ToggleContextProvider } from '#contexts/ToggleContext';
import CPSMap from '.';
import pageData from './fixtureData';

const defaultToggles = {
  test: {
    mediaPlayer: {
      enabled: true,
    },
  },
};

const isAmp = platform => platform === 'AMP';

const mediaAssetPage = platform => {
  return (
    <ToggleContextProvider value={{ toggleState: defaultToggles }}>
      <BrowserRouter>
        <CPSMap
          pageType="MAP"
          isAmp={isAmp(platform)}
          pathname="/pathname"
          status={200}
          pageData={pageData}
          service="pidgin"
        />
      </BrowserRouter>
    </ToggleContextProvider>
  );
};

const platforms = ['Canonical', 'AMP'];

platforms.forEach(platform => {
  const mapStories = storiesOf(`Pages|Media Asset Page/${platform}`, module);

  mapStories.addDecorator(story => (
    <WithTimeMachine>{story()}</WithTimeMachine>
  ));

  if (isAmp(platform)) {
    mapStories.addDecorator(AmpDecorator);
  }

  mapStories.add('default', () => {
    return mediaAssetPage(platform);
  });
});
