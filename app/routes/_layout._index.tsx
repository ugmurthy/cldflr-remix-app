import type { MetaFunction } from "@remix-run/node";
import Card from '../components/Cards'
export const meta: MetaFunction = () => {
  return [
    { title: "Cloudflare Challenge April 2024" },
    { name: "description", content: "Welcome to TaskAssistant" },
  ];
};

export default function Index() {
  const story = ["mistral-7b","whisper","discolm-7b"]
  const storyURL='/chat?persona=StoryWriter'
  const storyPic = 4
  const storyDesc = "Generate KidSafe Stories with Text and Voice inputs and Translates to German if needed."

  const codeURL = '/chat?persona=CodingAssitant'
  const code = ["codellama-7b"]
  const codePic = 6
  const codeDesc = "An Expert programming assistant and can help with code generation in various languages,one of the many tasks"
  
  const chatURL = '/chat?persona=KidSafe'
  const chat = ["mistral-7b"]
  const chatPic = 137
  const chatDesc = "Tweaking the System promp enables one to specific task.In this one we do sentiment analysis with reasoning"
  return (
    <div className='container pt-32 mx-auto max-w-6xl px-4'>
       <div className="text-4xl text-center pb-10"><span className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400  to-violet-900"><code>Personas </code></span>
 with different capabilities</div>
       

    <div className="flex flex-col sm:space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 justify-center items-center">
    <Card title="StoryWriter" 
      tagname="KidSafe" 
      modelnames={story} 
      id={storyPic} 
      url={storyURL}
      desc={storyDesc}
    ></Card>
    <Card title="Code Assistant" 
      tagname="JS,GO,RUST,C..." 
      modelnames={code} 
      id={codePic} 
      url={codeURL}
      desc={codeDesc}
    ></Card>

<Card title="Reasoning" 
      tagname="System_Role" 
      modelnames={chat} 
      id={chatPic} 
      url={chatURL}
      desc={chatDesc}
    ></Card>
    
    </div>
    <div className="m-10 p-10 ">
    <blockquote className="italic text-2xl tracking-wide text-center font-thin">Encourage LLM’s to Adopt System-2 Thinking & help them 
      create better answers by using prompts requesting them 
      to Self-reflect on their answers. 
      <div className="p-2 text-xl">Andrej Karpathy’s “State of GPT Talk”</div>
      </blockquote>
      </div>
    </div>
  );
}
