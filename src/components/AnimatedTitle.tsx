'use client';

import { TypeAnimation } from 'react-type-animation';

export const AnimatedTitle = () => {
  return (
    <h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl">
      <span className="block">Hi, I&apos;m Aashis </span>
      <span className="block">
        <span className="text-blue-600 dark:text-blue-400">Web </span>
        <TypeAnimation
          sequence={[
            'Developer',
            2000,
            'Designer',
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-blue-600 dark:text-blue-400"
          repeat={Infinity}
        />
      </span>
    </h1>
  );
}; 