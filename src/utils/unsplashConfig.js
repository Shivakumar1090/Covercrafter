import { createApi } from 'unsplash-js';

const key= "X6awG4HGlQ9z23HpNRofNIx3vtrKDC6p5j1PCo8Qigw"

const unsplash = createApi({
    accessKey: key
});

export default unsplash;