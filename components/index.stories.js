import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;
export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

const Pokedex = require('pokedex.js')
const pokedex = new Pokedex('ja')
export const withPokemon = () => <div>{pokedex.id(820).get()}</div>;
