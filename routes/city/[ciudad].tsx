import { Handlers, PageProps } from "$fresh/server.ts";

import {  getCityInfo } from "../../utils/Api.ts";
import CityComponent from "../../components/CityComponent.tsx";

 
type Data = {
  city:string;
  country:string;
  temperature:string;
}



export default function CityPage({data}:PageProps<Data>) {
  return <CityComponent{...data}/>
}


export const handler: Handlers<Data> = {
    async GET(_req, ctx) {
      const city = ctx.params.ciudad;
      const info = await getCityInfo(city);
      if (!info) return ctx.renderNotFound();
      return ctx.render(info);
    },
  };