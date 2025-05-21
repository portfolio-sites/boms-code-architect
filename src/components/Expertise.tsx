
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Code, Briefcase, Database, Brain, GitBranch, CheckCircle } from "lucide-react";
import { useState } from "react";

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (
    <section id="expertise" className="py-20 md:py-32 bg-gradient-to-b from-light-gray to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="pattern-overlay bg-dots-pattern"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-soft-blue/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-royal-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-soft-blue/20 text-royal-blue px-3 py-1 rounded-full text-sm font-medium">
              Core Competencies
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">My Expertise</h2>
          <Separator className="w-16 h-1 bg-gradient-to-r from-royal-blue to-vivid-blue mx-auto mb-8" />
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Specialized skills from a decade of development experience across multiple industries and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card 
            className={`border-0 bg-white/80 backdrop-blur-sm hover:backdrop-blur-lg shadow-lg transition-all duration-500 rounded-xl overflow-hidden ${hoveredCard === 0 ? 'transform -translate-y-2 shadow-xl' : ''}`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-royal-blue to-vivid-blue transition-opacity duration-300 ${hoveredCard === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-vivid-blue rounded-xl flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <Server className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Laravel & Symfony API Development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Java Enterprise Applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Database Architecture (MongoDB, MySQL, PostgreSQL)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>PHP & .NET Systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card 
            className={`border-0 bg-white/80 backdrop-blur-sm hover:backdrop-blur-lg shadow-lg transition-all duration-500 rounded-xl overflow-hidden ${hoveredCard === 1 ? 'transform -translate-y-2 shadow-xl' : ''}`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-royal-blue to-vivid-blue transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-vivid-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Frontend & Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>React, Angular & Vue.js Applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Next.js & Modern JS Frameworks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>React Native & Flutter Mobile Apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Responsive UI/UX Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card 
            className={`border-0 bg-white/80 backdrop-blur-sm hover:backdrop-blur-lg shadow-lg transition-all duration-500 rounded-xl overflow-hidden ${hoveredCard === 2 ? 'transform -translate-y-2 shadow-xl' : ''}`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-royal-blue to-vivid-blue transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-vivid-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Industry Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Government & Healthcare Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fintech & Payment Platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gaming & Event Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Docker & DevOps Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Technology icons */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10">
            <div className="tech-icon flex flex-col items-center animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#61DAFB]" fill="currentColor">
                  <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394a28.33 28.33 0 01-.743-1.459 24.493 24.493 0 01-.606-1.4c-.088-.219-.169-.431-.242-.639a12.11 12.11 0 00.725-.816c.483-.506.986-.986 1.52-1.438.682-.58 1.399-1.112 2.146-1.589a21.929 21.929 0 00-2.467-1.823 16.5 16.5 0 00-1.358-.872 9.929 9.929 0 00-.748-.408c-.091.124-.183.252-.274.381a23.77 23.77 0 00-1.877 3.082c-.29.598-.553 1.224-.782 1.847.288.734.621 1.493 1.014 2.229.329.613.692 1.215 1.082 1.79.195-.32.406-.649.626-.972zm1.273-8.231c.236-.257.484-.498.742-.725.036-.032.074-.063.11-.094-.309-.277-.61-.537-.902-.782a20.669 20.669 0 00-1.648-1.242c-.31 1.436-.455 2.847-.417 4.242.072.328.157.654.25.975.083-.135.171-.264.26-.392.306-.437.636-.861.988-1.27a21.278 21.278 0 01.617-.712zm4.746 13.852a15.974 15.974 0 01-1.666-.795 13.396 13.396 0 01-1.614-1.004 16.732 16.732 0 01-1.67-1.396 20.503 20.503 0 01-2.415 2.42c-.65.517-1.334.977-2.046 1.38.037.012.072.025.11.036a11.29 11.29 0 001.962.391c1.298.148 2.573-.138 3.813-.6.07-.175.14-.357.208-.534.136-.35.263-.707.377-1.06.143-.446.272-.897.386-1.353a19.148 19.148 0 01.433-1.428c.025-.075.051-.15.079-.224.64 1.382 1.355 2.714 2.143 3.986zm5.241-14.537c-1.254-.168-2.503-.075-3.742.192a18.055 18.055 0 00-.657 1.784c-.192.631-.359 1.255-.51 1.892a26.31 26.31 0 00-.368 1.726c-.127.745-.233 1.484-.304 2.228.144.658.316 1.323.52 1.977.164.527.348 1.046.551 1.56.309.78.664 1.553 1.072 2.292.178.32.367.635.568.942.355-.114.703-.25 1.04-.401a11.668 11.668 0 002.28-1.541 6.219 6.219 0 001.838-2.552c.19-.588.266-1.193.282-1.813.025-1.097-.428-2.094-.893-3.033a17.354 17.354 0 00-1.687-2.832 10.376 10.376 0 00-.77-.944c.813-.242 1.656-.348 2.475-.212.829.136 1.57.541 2.16 1.113a5.996 5.996 0 011.574 2.497c.1.784-.08 1.539-.41 2.262a9.13 9.13 0 01-1.714 2.326 14.24 14.24 0 01-2.105 1.75 16.532 16.532 0 01-4.738 2.192c-.72.193-1.452.337-2.193.399a8.687 8.687 0 01-.971 0c-.26-.01-.518-.032-.776-.068.129.186.259.371.392.553a21.29 21.29 0 002.361 2.682 14.852 14.852 0 002.998 2.131c.522.27 1.072.434 1.623.513.663.097 1.338.055 1.995-.082a8.211 8.211 0 001.749-.553 7.653 7.653 0 001.94-1.306c.948-.915 1.521-2.12 1.866-3.385.182-.67.328-1.347.425-2.035a16.08 16.08 0 00.217-2.413c0-.71-.025-1.421-.076-2.128a14.618 14.618 0 00-.53-2.75 8.51 8.51 0 00-.977-1.987 6.308 6.308 0 00-1.683-1.614 5.795 5.795 0 00-2.296-.788c-1.32-.152-2.65.196-3.844.65-.503.191-.986.42-1.444.687-.152-.176-.32-.339-.475-.516a20.26 20.26 0 00-1.453-1.374 13.026 13.026 0 00-2.1-1.465 6.963 6.963 0 00-.911-.433c.544-.38 1.113-.733 1.718-.9.908-.255 1.866-.218 2.779-.071 1.639.266 3.241.79 4.435 2.037.121.126.235.26.35.393 1.178-.915 2.644-1.36 3.934-1.359.575 0 1.15.074 1.695.284.994.386 1.698 1.15 2.307 1.865.596.7 1.146 1.45 1.586 2.258.44.804.777 1.657 1.007 2.517.123.465.223.938.3 1.412.102.631.177 1.266.21 1.903a17.481 17.481 0 01-.107 2.524c-.099.772-.24 1.537-.416 2.295a12.77 12.77 0 01-.625 1.777 8.208 8.208 0 01-.99 1.684 7.126 7.126 0 01-1.698 1.591 7.68 7.68 0 01-2.28 1.001 9.457 9.457 0 01-2.35.207 7.472 7.472 0 01-2.073-.385 8.345 8.345 0 01-1.297-.558 15.304 15.304 0 01-2.023-1.34 22.611 22.611 0 01-1.912-1.664 25.463 25.463 0 01-3.427-4.024 23.634 23.634 0 01-1.258-1.986c-.336-.606-.647-1.216-.93-1.843a19.822 19.822 0 01-1.15-3.169c-.082-.336-.154-.675-.224-1.013a14.9 14.9 0 01-.147-2.577c.022-.878.106-1.746.305-2.595.291-1.24.738-2.407 1.354-3.445a8.158 8.158 0 011.745-2.044 6.309 6.309 0 012.035-1.062c.835-.23 1.717-.234 2.566-.076.893.167 1.776.402 2.631.76.52.218 1.04.446 1.55.687z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-gray">React</p>
            </div>
            
            <div className="tech-icon flex flex-col items-center animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#777BB3]" fill="currentColor">
                  <path d="M12 6C7.2 6 3.3 7.2 3.3 8.6v2C3.3 12 7.2 13.7 12 13.7c4.8 0 8.7-1.3 8.7-3.1v-2C20.7 7.2 16.8 6 12 6zm0 9.2C7.2 15.2 3.3 14 3.3 12.6V15c0 1.4 3.9 3.1 8.7 3.1 4.8 0 8.7-1.3 8.7-3.1v-2.4c0 1.4-3.9 2.6-8.7 2.6z"/>
                  <path d="M12 18.2c-4.8 0-8.7-1.3-8.7-2.6v2c0 1.4 3.9 3.1 8.7 3.1 4.8 0 8.7-1.3 8.7-3.1v-2c-.1 1.3-3.9 2.6-8.7 2.6z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-gray">PHP</p>
            </div>
            
            <div className="tech-icon flex flex-col items-center animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5382A1]" fill="currentColor">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.93.828-.93-953.545 1.914-12.881-1.48-5.534-2.111 7.054-.609 12.902.11 17.868 1.015M9.292 13.21s-9.127-.139-3.234-1.241c.717-.132 2.148-.1 3.484-.081 1.088.03 2.178.09 2.178.09s-.926-.382-1.638-.676c-4.41-.92-12.75.491-10.188.893 6.937.546 9.398 1.015 9.398 1.015M17.127 17.366c4.393-2.284 2.36-4.473 2.36-4.473-.628.877-1.79 1.301-2.874 1.393-.278.024-.565.055-.789.144-.858.383.146 1.74.146 1.74s.068-.055.321-.152c.529-.403 3.211-1.944.836 1.348M14.401 0s2.428 2.43-2.303 6.167c-3.791 2.991-.863 4.703-.001 6.654-2.259-2.031-3.891-3.828-2.782-5.492 1.635-2.449 6.168-3.631 5.086-7.329M9.734 23.924c4.151.265 10.613-.155 10.884-2.849.058-.631-.908-.948-1.45-.948-.917 0-1.66.893-1.652 1.956.013 1.88 2.55 1.336 3.738 1.01 1.206-.332 2.9-1.456 3.592-3.02.836-1.893-5.733-3.692-11.605-2.662-1.783.312-1.887.944-1.887.944s.411.66 1.318.801c.897.144 1.704.139 1.704.139s-.908.549-1.676.814c-2.23.769 2.44 2.453 2.663 3.021.223.585-3.806.372-5.629.372M12 13c-.65 0-1.17.2-1.17.557 0 .355.524.622 1.17.622.647 0 1.17-.267 1.17-.622 0-.358-.524-.557-1.17-.557z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-gray">Java</p>
            </div>
            
            <div className="tech-icon flex flex-col items-center animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#00a8e8]" fill="currentColor">
                  <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L5.125 9.4v6.935H3.742V7.53h1.607l3.701 6.83V7.53h1.39zm-9.031 0H0V7.53h1.409z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-gray">.NET</p>
            </div>
            
            <div className="tech-icon flex flex-col items-center animate-fade-in" style={{animationDelay: "0.5s"}}>
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#4FC08D]" fill="currentColor">
                  <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-gray">Vue.js</p>
            </div>
            
            <div className="tech-icon flex flex-col items-center animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FF2D20]" fill="currentColor">
                  <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.95a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.01.025-.018.041-.024L11.503.05a.375.375 0 01.338 0l10.96 6.324c.013.008.024.016.036.026.013.008.026.017.038.026.013.014.02.03.033.045.008.01.018.02.023.033.01.019.014.04.023.058.003.011.01.021.013.032M11.675 22.324V14.58l4.11-2.365v7.95l-4.11 2.16zm1.273-8.215l-4.075 2.349-4.817-2.814 4.076-2.35 4.816 2.815zm-9.787-3.774l4.227 2.465V7.153l-4.227-2.427v5.609zM11.675 1.6v7.677l-4.87-2.84V4.812l3.306 1.918V3.606L7.084 1.997 11.675 1.6zm1.273 7.733v5.605l-4.227-2.465V7.153l4.227 2.18zM1.946 3.511L7.084 1.997l3.595.397-4.91 2.814-3.823-1.697zm15.635 5.27l-4.227 2.437V5.61l4.227-2.183v5.353zm1.273-6.929l-4.227 2.183-4.226-2.183 4.226-2.182 4.227 2.182zm-9.089 4.31L5.96 8.608v4.786L1.946 11.23V5.621l4.64 2.68L9.765 6.16z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-gray">Laravel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
