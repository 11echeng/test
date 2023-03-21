export function filterListings(lists, propertyType, price) {
  let filtered = lists;
  // const filtered = [...lists];

  if (propertyType) {
    filtered = filtered.filter((listing) =>
      listing.property_type.includes(propertyType)
    );
  }

  if (price) {
    const [min, max] = price.split('-').map(Number);
    filtered = filtered.filter((listing) => {
      const listingPrice =
        typeof listing.price === 'string'
          ? Number(listing.price.replace(/[^0-9.-]+/g, ''))
          : listing.price;
      return listingPrice >= min && listingPrice <= max;
    });
  }

  console.log('Property Type:', propertyType);
  console.log('Price:', price);
  console.log('Filtered Listings: ', filtered);
  return filtered;
}
