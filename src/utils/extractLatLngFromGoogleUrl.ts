export const extractLatLngFromGoogleUrl = (url: string) => {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = url.match(regex);

  if (!match) return null;

  return {
    latitude: parseFloat(match[1]),
    longitude: parseFloat(match[2]),
  };
};
