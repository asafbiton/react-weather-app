const googleMock = {
  maps: {
    places: {
      Autocomplete: jest.fn().mockImplementation(() => {
        return { addListener: jest.fn() };
      })
    }
  }
};

export default googleMock;
