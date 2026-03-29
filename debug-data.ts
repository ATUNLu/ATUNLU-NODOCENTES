import { galerias } from './src/data/galerias';

console.log('Total galerias:', galerias.length);
galerias.forEach((g, i) => {
    console.log(`[${i}] Slug: "${g.slug}" (length: ${g.slug.length})`);
    console.log(`    Title: "${g.titulo}"`);
});
