import { FunctionalComponent } from "preact";

type Props={
    city:string;
    country:string;
    temperature:string;
}

const CityComponent:FunctionalComponent<Props>=({city,country,temperature})=>{
    return (
        <div class="city-info">
          <h1>{city}</h1>
          <p>País: <a href={`/country/${country}`}>{country}</a></p>
          <p>Temperatura: {temperature}°C</p>
        </div>
      );
    };

export default CityComponent;