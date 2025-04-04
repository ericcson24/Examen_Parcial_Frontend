import { Handlers, PageProps } from "$fresh/server.ts";

import {  getCountryInfo } from "../../utils/Api.ts";

import CountryComponent from "../../components/CountryComponent.tsx";

 
type Data = {
  name:string;
  capital:string;
}




export default function CountryPage({data}:PageProps<Data>) {
  return <CountryComponent{...data}/>
}




export const handler: Handlers<Data> = {
    async GET(_req, ctx) {
      const country = ctx.params.pais;
      const info = await getCountryInfo(country);
      if (!info) return ctx.renderNotFound();
      return ctx.render(info);
    },
  };