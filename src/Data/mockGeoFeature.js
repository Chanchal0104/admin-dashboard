export const mockGeoFeatures = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "IND",
      properties: { name: "India" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [68.18, 7.97],
          [77.84, 8.90],
          [88.17, 22.88],
          [97.40, 23.90],
          [97.33, 28.26],
          [88.06, 27.45],
          [77.29, 35.49],
          [74.45, 34.32],
          [68.18, 7.97]
        ]]
      }
    },
    {
      type: "Feature",
      id: "USA",
      properties: { name: "United States" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-124.85, 49.38],
          [-66.89, 49.38],
          [-66.89, 24.40],
          [-124.85, 24.40],
          [-124.85, 49.38]
        ]]
      }
    },
    {
      type: "Feature",
      id: "BRA",
      properties: { name: "Brazil" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-73.99, 5.24],
          [-34.73, 5.24],
          [-34.73, -33.77],
          [-73.99, -33.77],
          [-73.99, 5.24]
        ]]
      }
    }
  ]
};
