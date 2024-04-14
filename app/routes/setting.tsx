import type { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import {json,} from '@remix-run/cloudflare'
import { setSystemPrompt,setMemory } from "~/module/utils.server";

function getURLdetails(request:Request) {
	
		const url = new URL(request.url);
		if (url.pathname !== '/favicon.ico') { 
			console.log("hostname ",url.hostname);
			console.log("pathname ",url.pathname);
			const model = url.searchParams.get("model");
			const prompt= url.searchParams.get("prompt");
			const name =url.searchParams.get("name")
			const system = url.searchParams.get("system")
			return {model,prompt,name,system}
	}
}

export const action:ActionFunction = async (args:ActionFunctionArgs) =>{
    
}
export const loader:LoaderFunction = async (args:LoaderFunctionArgs )=>{
    const result = [];
    const params = getURLdetails(args.request);
    const env = args.context.cloudflare.env as Env
    const user = {role:"user",content:"Hi How are you?"}
    const asst = {role:"assistant",content:"I am here to help you"}
    const rdata = [];
    rdata.push(user)
    rdata.push(asst)
    result.push({params});
    console.log("Memory" ,rdata)
    await setMemory(env,rdata);

    if (params?.model && params?.prompt) { // generate
        // generate
        // save response to KV conversation if context enabled
        console.log("MODEL GENERATION.....")
        result.push( {model:params?.model, prompt:params?.prompt});

    } else {
        if (params?.model) { // only model
            // get model details
            // show page of description
            console.log("MODEL DESCRIPTION.....")
            const description = params?.model + ": Description"
            result.push({model:params?.model, description})
        }
    }

     if (params?.name && params?.system) { // set system prompt
        if (params?.name === 'list') { // list all KVs fron namespace SYSTEM
            console.log("LISTING.....")
            const list = await env.SYSTEM.list();
            result.push(list.keys)
        } else { // create KV in SYSTEM namespace
            console.log("CREATING KV ",params.name,params.system)
            await setSystemPrompt(env,params?.name,{role:"system",content:params?.system})

        }
    } 
    //getEnvdetails(env);

    return  json(result);

}
