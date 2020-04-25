//These are our props
window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Sierra Nevada',
      description: 'Hazy Little Thing IPA',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/hazy_little_thing.png',
    },
    {
      id: 2,
      title: 'Tree House',
      description: 'Julius',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/trilium_julius.png',
    },
    {
      id: 3,
      title: 'Other Half',
      description: 'Forever Ever',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/other_half_forever_ever.png',
    },
    {
      id: 4,
      title: 'Trillium',
      description: 'Congress Streeet IPA',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/trillium_congress_street.png',
    },
  ];

  return { products: products };
}());
