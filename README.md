# PERSONAS

`Personas` is a AI assistant - a Web app demonstrating the ease with which one can build LLM based model avaialble on CloudFlare AI. You can extend the App to use other AI models both paid and [Opensource](https://ollama.com/)

PERSONAS Showcase `personas`

1. Story Writer that is kidSafe
2. Code Assistant that can help a developer
3. Sentiment Analysis and Reasoning

All above `personas` use minumum 2 models (one for **guided** text generation, and the second for voice to text as input)

[Have Fun with Persona]() (Link yet to update)

# BUILT USING

1. [**Cloudflare**](https://www.cloudflare.com/) : [Cloudflare Pages](https://developers.cloudflare.com/pages/), [Workers AI](https://developers.cloudflare.com/workers-ai/) for more information visit . To bui
2. [REMIX+Vite](https://remix.run/docs/en/main/future/

Follow the above docs to do you initial setup

## Development

1. clone this repo
2. follow the commands below

Install dependencies from you project folder

```sh
npm i
npm run dev

# use browser to visit http://localhost:5173
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Deployment

> [!WARNING]  
> Cloudflare does _not_ use `wrangler.toml` to configure deployment bindings.
> You **MUST** [configure deployment bindings manually in the Cloudflare dashboard][bindings].

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

[bindings]: https://developers.cloudflare.com/pages/functions/bindings/
