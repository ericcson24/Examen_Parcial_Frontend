import { FunctionalComponent } from "preact";

type Props={
    name:string;
    capital:string;
    
}

const CountryComponent:FunctionalComponent<Props>=({name,capital})=>{
    return (
        <div class="country-info">
          <h1>{name}</h1>
          <p>Capital: <a href={`/city/${capital}`}>{capital}</a></p>
        </div>
      );
    };

export default CountryComponent;