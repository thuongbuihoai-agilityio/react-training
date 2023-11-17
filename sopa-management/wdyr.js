/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

if (process.env.VITE_BASE_URL === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
