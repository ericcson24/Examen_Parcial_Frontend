

export async function getCountryFromPhone(phone:string) {
    try{
        const key= Deno.env.get("API_KEY")
        const res = await fetch(`https://api.api-ninjas.com/v1/validatephone?number=${phone}`,{
            headers:{
                'X-Api-Key': key ||"",
            },
        })
        const data= await res.json();
    return data.country || null;

    }catch{
        return null
    }
}

export async function getCountryInfo(name:string):Promise<{name:string; capital:string}|null>{
    try{
        const key= Deno.env.get("API_KEY")
        const res = await fetch(`https://api.api-ninjas.com/v1/country?name=${name}`,{
            headers:{
                'X-Api-Key': key ||"",
            },
        })
        const data= await res.json();

        if (!data[0])return null

        return {
            name: data[0].name,
            capital: data[0].capital,
        };

    }catch{
        return null
    }
}




export async function getCityInfo(city:string):Promise<{city:string; country:string; temperature: string}|null>{
    try{
        const key= Deno.env.get("API_KEY")
        const res = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`,{
            headers:{
                'X-Api-Key': key ||"",
            },
        })
        const weather= await res.json();
        if (!weather||!weather.temp){return null};
        //para obtener pais susamos la ciudad
       
        const geoRes = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`,{
            headers:{
                'X-Api-Key': key ||"",
            },
        })
        const geo= await geoRes.json();
        const country = geo[0]?.country||"Desconocido"
        return {
            city,
            country,
            temperature: weather.temp.toString(),
        }

        

    }catch{
        return null
    }
}