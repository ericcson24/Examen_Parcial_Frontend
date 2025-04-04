import { Handlers, PageProps } from "$fresh/server.ts";

import {  getCountryFromPhone } from "../utils/Api.ts";
import {validatephone} from "../utils/validatePhone.ts";
 
type Data = {
  phone?:string;
  country?:string;
  error?:string;
}

export const handler: Handlers<Data>={
  async POST(req,ctx){
    const form = await req.formData();
    const phone =  form.get("phone")?.toString()||"";
    if(!validatephone(phone)){ return ctx.render({error: "numero invalido"})}
    const country = await getCountryFromPhone(phone);
    return ctx.render({phone, country})
  }
}


export default function Home({data}:PageProps<Data>) {
  return (
    <div class= "phone-form">
      <form method={"POST"}>
        <input type ="text" name ="phone" placeholder="introducir numero" />
        <button type ="submit">Enviar</button>
      </form>

      {data?.error && <p class ="error">{data.error}</p>}
      
      {data?.phone && data?.country && (
        <div class="result">
          <p>Número: {data.phone}</p>
          <p>País: <a href={`/country/${data.country}`}>{data.country}</a></p>
        </div>
      )}


    </div>
  )
}
