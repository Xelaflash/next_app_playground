import React from 'react';
import { readFile, writeFile } from '../../../helpers/file-helpers';
import CounterBtn from './CounterBtn';

const DATABASE_PATH = '/src/database.json';

export default function HitCounter() {
  let { hits }: { hits: number } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <p className="my-8">
      You are visitor number <CounterBtn hits={hits} />
    </p>
  );
}
