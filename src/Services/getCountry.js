export default (country, setState, setNeighbors) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((response) => response.json())
      .then((data) => { setState(data[0]); return data[0].region; })
      .then((region) => {
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
          .then((response) => response.json())
          .then(setNeighbors);
      });
  };