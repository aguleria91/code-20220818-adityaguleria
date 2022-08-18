import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ChunkProcess } from '../../src/chunk-process';
import people from '../mock/valid-people-mock.json';

describe("Chunk Process", () => {

  it("should return the correct bmi", async () => {

    const processed = await ChunkProcess(people);

    console.log(processed)
  })
})

