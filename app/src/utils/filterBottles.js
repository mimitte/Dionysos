export const creatFilterList = (bottles) =>{
  let countries = [];
  let regions = [];
  let years = [];
  let minYear = 0;
  let maxYear = 0;
  let filters= [];

  for (let i = 0; i < bottles.length; i++) {
    countries.push(bottles[i].country);
    regions.push(bottles[i].region);
    years.push(bottles[i].year);
  }
  countries = [...new Set(countries)];
  regions = [...new Set(regions)];
  minYear = Math.min.apply(Math, years);
  maxYear = Math.max.apply(Math, years);

  years = [];

  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }

  filters = [
    { country: countries },
    { regions: regions },
    { years: years },
    { minYear: minYear },
    { maxYear: maxYear },
  ]

  return  filters;
}