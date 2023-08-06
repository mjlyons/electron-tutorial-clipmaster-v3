import React from 'react';
import CreateClipping from './create-clipping';
import Clipping from './clipping';
import { useClippings } from '../use-clipping';

const Application = () => {
  const { clippings, addClipping, removeClipping } = useClippings();

  return (
    <main className="flex flex-col w-screen h-screen">
      <header className="flex items-center h-8 font-semibold text-white bg-primary-400 ">
        <h1 className="w-full text-center">Clipmaster</h1>
      </header>
      <CreateClipping onSubmit={(value) => addClipping(value)} />
      <section className="flex flex-col gap-2 p-4 overflow-y-scroll">
        {clippings.map((clipping) => (
          <Clipping
            key={clipping.id}
            id={clipping.id}
            value={clipping.value}
            onRemove={removeClipping}
          />
        ))}
      </section>
    </main>
  );
};

export default Application;