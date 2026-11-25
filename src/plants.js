const groups = [
  ['Easy-care favorites', [
    ['snake-plant', 'Snake Plant', 2200, 'Upright, patterned leaves with a clean silhouette.'],
    ['zz-plant', 'ZZ Plant', 2600, 'Glossy leaflets on arching stems.'],
    ['golden-pothos', 'Golden Pothos', 1600, 'Trailing vines with gold-flecked leaves.'],
    ['spider-plant', 'Spider Plant', 1500, 'Narrow striped leaves that spill over the pot.'],
    ['cast-iron-plant', 'Cast Iron Plant', 2800, 'Broad, deep green leaves for a quieter corner.'],
    ['chinese-evergreen', 'Chinese Evergreen', 2400, 'Silvery leaves edged in green.'],
  ]],
  ['Tropical foliage', [
    ['monstera', 'Monstera', 3400, 'Large, split leaves with a distinctive silhouette.'],
    ['rubber-plant', 'Rubber Plant', 2900, 'Thick, glossy leaves with rich burgundy tones.'],
    ['prayer-plant', 'Prayer Plant', 2300, 'Oval leaves with vivid pink veins.'],
    ['peace-lily', 'Peace Lily', 2700, 'Deep green foliage and striking white blooms.'],
    ['parlor-palm', 'Parlor Palm', 3100, 'Feathery fronds that soften a room.'],
    ['heartleaf-philodendron', 'Heartleaf Philodendron', 2000, 'Trailing stems with delicate heart-shaped leaves.'],
  ]],
  ['Succulents & cacti', [
    ['aloe-vera', 'Aloe Vera', 1800, 'Fleshy, pointed leaves in an upright rosette.'],
    ['jade-plant', 'Jade Plant', 2100, 'Round leaves on branching, woody stems.'],
    ['echeveria', 'Echeveria', 1400, 'A compact blue-green rosette for a bright sill.'],
    ['zebra-haworthia', 'Zebra Haworthia', 1600, 'Pointed leaves with raised white stripes.'],
    ['bunny-ears-cactus', 'Bunny Ears Cactus', 1900, 'Rounded cactus pads with rows of golden dots.'],
    ['string-of-pearls', 'String of Pearls', 2500, 'Bead-like leaves that drape from a hanging pot.'],
  ]],
];

export const categories = groups.map(([name, plants]) => ({
  name,
  products: plants.map(([id, name, priceCents, description]) => ({
    id, name, priceCents, description,
    image: import.meta.env.BASE_URL + 'images/' + id + '.png',
  })),
}));

const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
export const formatPrice = cents => dollars.format(cents / 100);
