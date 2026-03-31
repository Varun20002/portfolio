import React, { useState, useEffect } from 'react';
import { Play, Globe, Linkedin, ArrowRight } from 'lucide-react';
import HeroStatCard from './components/HeroStatCard';
import StickyNote from './components/StickyNote';
import ProjectCard from './components/ProjectCard';
import BolnaDemo from './components/BolnaDemo';
import CheckItem from './components/CheckItem';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] p-2 md:p-8 font-sans text-gray-900 overflow-x-hidden selection:bg-[#D32F2F] selection:text-white">
      <div className={`max-w-5xl mx-auto bg-graph border-4 border-black rounded-[2px_15px_4px_20px/20px_3px_25px_3px] shadow-[6px_6px_0px_#D32F2F] md:shadow-[12px_12px_0px_#D32F2F] relative overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 bottom-0 left-[40px] md:left-[80px] w-[2px] bg-red-500/20 z-0 pointer-events-none" />

        <nav className="flex justify-between items-center p-4 pl-5 sm:pl-8 md:pl-24 border-b-2 border-black/10 relative z-10 bg-graph/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D32F2F] rounded-full border-2 border-black flex items-center justify-center">
              <span className="text-white font-marker text-sm">V</span>
            </div>
            <span className="font-marker text-xl tracking-wider">VARUN</span>
          </div>
          <div className="flex gap-6 font-bold text-sm uppercase tracking-widest hidden md:flex">
            <a href="#evolution" className="transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#D32F2F]">Mindset</a>
            <a href="#work" className="transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#D32F2F]">Work</a>
            <a href="#lab" className="transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#D32F2F]">Lab</a>
          </div>
          <a
            href="https://wa.me/917022420401"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hand text-2xl text-[#D32F2F] transition-transform duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:scale-110 active:scale-[0.97] -rotate-3"
            aria-label="Chat on WhatsApp with Varun"
          >
            Let's chat!
          </a>
        </nav>

        <header className="px-5 sm:px-8 md:px-24 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl relative z-10">
            <p className="font-sans text-gray-500 mb-6 text-sm tracking-wide">
              Bengaluru, India • IST
            </p>
            <p className="font-marker text-3xl text-[#D32F2F] mb-6 tracking-wide uppercase">Varun — Product Builder</p>
            <h1 className="text-3xl sm:text-5xl md:text-[5.5rem] font-hand font-bold tracking-tight mb-8 leading-[1.1] text-black">
              Products should <br/>
              <span className="bg-[#fce4e4] px-3 pb-2 rounded-sm mr-3 relative inline-block">ship,</span> 
              not 
              <span className="bg-[#fce4e4] px-3 pb-2 rounded-sm ml-3 relative inline-block">sit.</span>
            </h1>
            <div className="text-2xl md:text-3xl font-hand text-gray-600 mb-12 space-y-3">
              <p>I don't make decks about products.</p>
              <p>I <span className="text-black font-bold underline decoration-[#D32F2F] decoration-wavy underline-offset-[6px] decoration-2">build them</span>, <span className="text-black font-bold underline decoration-[#D32F2F] decoration-wavy underline-offset-[6px] decoration-2">ship them</span>, and watch the <span className="text-black font-bold underline decoration-[#D32F2F] decoration-wavy underline-offset-[6px] decoration-2">metrics move</span>.</p>
            </div>

            <div className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
              <HeroStatCard value="20" suffix="x" label="lead generation ⬆" rotation="-2deg" />
              <HeroStatCard value="85" suffix="%" label="hiring time ↓" rotation="1.5deg" />
              <HeroStatCard value="300" suffix="+" label="daily users" rotation="-0.5deg" />
            </div>
          </div>
        </header>

        <section id="evolution" className="px-5 sm:px-8 md:px-24 py-20 border-t-4 border-black/5">
          <h2 className="font-marker text-2xl sm:text-4xl mb-2">How I learned to build what matters</h2>
          <p className="font-hand text-2xl text-gray-500 mb-12">My product thinking in 3 sticky notes →</p>
          
          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center items-start">
            <StickyNote 
              phase="Phase 01"
              title="Build first, ask later."
              text="Built a chatbot in 2 weeks. Pushed it everywhere. Nobody cared."
              lesson="User Validation &gt; Execution"
              color="bg-[#FEF08A]"
              rotation="-rotate-3"
            />
            <div className="hidden lg:flex items-center justify-center text-4xl text-red-400 font-hand pt-16">→</div>
            <StickyNote 
              phase="Phase 02"
              title="Talk to users first!"
              text="20+ VC interviews. Found real pain points. Built a prototype they liked — but it cost more to run than it saved them."
              lesson="Real problem ≠ viable business"
              color="bg-[#BFDBFE]"
              rotation="rotate-2"
            />
            <div className="hidden lg:flex items-center justify-center text-4xl text-red-400 font-hand pt-16">→</div>
            <StickyNote 
              phase="Phase 03"
              title="Build what pays"
              text="Now I validate problem + solution + unit economics before code."
              lesson="→ Ship what scales ✓"
              color="bg-[#FECACA]"
              rotation="-rotate-1"
              isCurrent
            />
          </div>
        </section>

        <section id="work" className="px-5 sm:px-8 md:px-24 py-20 bg-white/40 border-y-4 border-black">
          <h2 className="font-marker text-2xl sm:text-4xl mb-2">Work @ CoinDCX</h2>
          <p className="font-hand text-2xl text-gray-500 mb-12">Running in production right now ↓</p>

          <div className="space-y-16">
            <ProjectCard 
              badge="Live in production"
              title="📞 AI Voice Agent for BD Teams"
              description="BD teams could manually qualify ~50 leads/day. I identified this bottleneck, designed the flow, and built an AI voice agent that now qualifies 1,000 leads/day. The BD team now focuses entirely on closing."
              metrics={[
                { v: '20x', l: 'speed increase' },
                { v: '50→1K', l: 'leads/day' },
                { v: '100%', l: 'BD on closing' }
              ]}
              tags={['AI Voice', 'Bolna.ai', 'Automation', 'Lead Qualification']}
              rotation="-rotate-1"
            >
              <BolnaDemo />
            </ProjectCard>

            <ProjectCard 
              badge="Live"
              title="📊 Business Partner Dashboard"
              description="Product team said 6 months. I shipped a full-stack dashboard from scratch — solo. Incentive tracking, LMS, promos, webinars, internal calculator. 200-300 partners use it daily."
              metrics={[
                { v: '300', l: 'daily users' },
                { v: '6mo→solo', l: 'ship speed' }
              ]}
              tags={['Full-Stack', 'Dashboard', 'LMS', 'Analytics']}
              rotation="rotate-1"
              actions={
                <>
                  <a
                    href="https://youtu.be/dnGw33_kYVU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-black bg-[#D32F2F] px-4 font-marker text-base tracking-wide text-white shadow-[4px_4px_0px_#000] transition-[transform,box-shadow,background-color] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#b71c1c] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] md:w-[11.25rem]"
                  >
                    <Play className="h-4 w-4 shrink-0 fill-white" strokeWidth={2} aria-hidden /> Watch Demo
                  </a>
                  <a
                    href="https://www.businesspartnerportal.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-4 font-marker text-base tracking-wide text-black shadow-[4px_4px_0px_#000] transition-[transform,box-shadow] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] md:w-[11.25rem]"
                  >
                    <Globe className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden /> Live Portal
                  </a>
                </>
              }
            />

            <ProjectCard 
              badge="Going to production"
              title="🤖 Recruitment Automation"
              description="Diagnosed 3 bottlenecks: 14-day delays, manual ATS screening, high CV fabrication. Built an AI voice agent that interviews candidates based on their own resumes."
              metrics={[
                { v: '85%', l: 'faster hiring' },
                { v: '14d→2d', l: 'cycle time' }
              ]}
              tags={['AI Voice', 'Hiring', 'Resume Parsing', 'Automation']}
              rotation="-rotate-0.5"
              actions={
                <a
                  href="https://www.linkedin.com/posts/varun-a-r-_coindcxunleashed-hackathon-lifeatcoindcx-share-7440771938198827008-ZPGZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADScVrkBdjJ24MwW3SBWbPAlSlcZbc0wTCI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check for more info — opens LinkedIn post in a new tab"
                  className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-black bg-[#D32F2F] px-3 font-marker text-base tracking-wide text-white shadow-[4px_4px_0px_#000] transition-[transform,box-shadow,background-color] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#b71c1c] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] md:min-w-[13.5rem] md:px-4"
                >
                  <Linkedin className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden /> Check for more info
                </a>
              }
            />
          </div>
        </section>

        <section id="lab" className="px-5 sm:px-8 md:px-24 py-20">
          <h2 className="font-marker text-2xl sm:text-4xl mb-2 text-black uppercase tracking-wide">The Lab (Side Hustles)</h2>
          <p className="font-hand text-[1.6rem] text-gray-500 mb-12">Where I built fast, failed gracefully, and learned deeply.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#FFFDF9] border-[3px] border-black rounded-xl p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_#111] md:shadow-[8px_8px_0px_#111] relative transition-transform duration-300 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1">
              <div className="absolute top-6 right-6 font-hand text-[#D32F2F] border border-[#D32F2F] px-3 py-1 rotate-[12deg] font-bold text-xl opacity-90 tracking-wide bg-white shadow-sm">Hackathon</div>
              <h3 className="font-sans font-black text-2xl mb-4 text-black">Vocal Venture AI</h3>
              <p className="font-sans text-gray-600 mb-8 text-sm leading-relaxed">VC Due Diligence Agent built for Lightspeed<br/>Ventures.</p>
              
              <div className="border border-dashed border-black rounded-sm p-5 mb-6 bg-transparent relative">
                <p className="font-sans font-bold text-black mb-3 text-sm">What I did:</p>
                <ul className="space-y-2 mb-6 text-[0.85rem] font-sans text-gray-700">
                  <li>• 30+ interviews using <span className="italic">The Mom Test</span></li>
                  <li>• Created validated HLD & working prototype</li>
                </ul>
                <div className="w-full h-[1.5px] bg-black mb-4"></div>
                <p className="font-sans text-[0.85rem] font-bold text-[#D32F2F] pr-4 leading-relaxed">
                  Outcome: Strong VC interest, BUT cost to deploy &gt; actual analyst cost. Product killed.
                </p>
              </div>
              
              <a
                href="https://tangible-dingo-f3c.notion.site/Vocal-Venture-AI-VC-Customer-Validation-Automation-23416258fc6f801d8d51fb7bac62373a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read how I built it using my Product thinking — opens Notion in a new tab"
                className="flex min-h-[5.75rem] w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-black bg-[#D32F2F] px-3 py-3 font-sans text-sm font-bold leading-snug text-white shadow-[3px_3px_0px_#000] transition-[transform,box-shadow,background-color] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#b71c1c] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] sm:min-h-[4.5rem] sm:flex-row sm:gap-2.5 sm:px-4 sm:text-base"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.907c-.56.047-.747.327-.747.933zm14.337.06c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.167.513-1.68.513-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.95l1.447.327s0 .84-1.167.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.716c-.094-.42.14-1.026.793-1.073l3.454-.233 4.763 7.306v-6.44l-1.213-.14c-.093-.513.28-.886.747-.933z" />
                </svg>
                <span className="max-w-[20rem] text-center sm:max-w-none">Read how I built it using my Product thinking</span>
              </a>
            </div>

            <div className="bg-[#FFFDF9] border-[3px] border-black rounded-xl p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_#D32F2F] md:shadow-[8px_8px_0px_#D32F2F] relative transition-transform duration-300 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1">
              <h3 className="font-sans font-black text-2xl mb-2 text-black">Wise AI</h3>
              <p className="font-sans font-bold text-gray-500 text-xs mb-4 uppercase tracking-wider">Chatbot Platform Launchpad</p>
              <p className="font-sans text-gray-700 mb-8 text-sm">Built from scratch in ~2 weeks. Pure execution focus.</p>
              
              <div className="bg-[#FFF5F5] border border-red-200 rounded-sm p-5 mb-6 relative">
                <p className="font-sans font-black text-black mb-3 text-sm">The Reality Check:</p>
                <p className="font-sans text-[0.85rem] text-gray-700 mb-4">Listed on Product Hunt, LinkedIn. Tried organic growth.</p>
                <div className="w-full h-px bg-red-200 mb-4"></div>
                <p className="font-sans text-[0.85rem] font-black text-[#D32F2F] mb-6">
                  Outcome: Zero meaningful traction.
                </p>
                
                <div className="border-[2px] border-black bg-white inline-block px-3 py-1.5 -rotate-2 absolute bottom-5 shadow-sm">
                  <span className="font-sans font-black text-xs text-black tracking-wide">Lesson: Validation &gt; Execution.</span>
                </div>
                <div className="h-6"></div>
              </div>
              
              <a
                href="https://wise-ai-launchpad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Wise AI live landing page (new tab)"
                className="flex min-h-[5.75rem] w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-black bg-white px-3 py-3 font-sans text-sm font-bold leading-snug text-black shadow-[3px_3px_0px_#000] transition-[transform,box-shadow,background-color] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-gray-50 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] sm:min-h-[4.5rem] sm:flex-row sm:gap-2.5 sm:px-4 sm:text-base"
              >
                <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                <span className="max-w-[20rem] text-center sm:max-w-none">Live Landing Page</span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 md:px-24 py-20 border-t-2 border-dashed border-black/10">
          <h2 className="font-marker text-3xl sm:text-5xl mb-12 text-[#D32F2F] uppercase tracking-wider">What I bring ✓</h2>
          <div className="space-y-8 max-w-2xl">
            <CheckItem text="First-principles thinker, even in chaos" delay={0} />
            <CheckItem text="Ships end-to-end, not just specs" delay={300} />
            <CheckItem text="Explores new AI tools and tech, every single day." delay={600} />
            <CheckItem text="Says the hard things first" delay={900} />
          </div>
        </section>

        <footer className="px-5 sm:px-8 md:px-24 py-20 bg-white/20 border-t-4 border-black text-center relative">
          <p className="font-hand text-2xl sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
            I <span className="text-[#D32F2F]">don&apos;t always</span> know how to build it. <br />
            I just know <span className="text-[#D32F2F]">it&apos;s possible</span> — and that&apos;s enough to{' '}
            <span className="text-[#D32F2F]">start</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="https://wa.me/917022420401"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Varun"
              className="bg-[#D32F2F] text-white font-marker text-lg px-8 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] transition-[transform,box-shadow] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] flex items-center gap-2"
            >
              Let&apos;s chat!
            </a>
            <a
              href="https://www.linkedin.com/in/varun-a-r-/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-marker text-lg px-8 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] transition-[transform,box-shadow] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] flex items-center gap-2"
            >
              LinkedIn
            </a>
            <a href="#" className="bg-white text-black font-marker text-lg px-8 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] transition-[transform,box-shadow] duration-200 ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-none active:scale-[0.97] flex items-center gap-2">
              Resume
            </a>
          </div>

          <p className="font-marker text-4xl sm:text-6xl text-[#D32F2F] -rotate-3 mb-12">VARUN</p>

          <div className="border-t-2 border-dashed border-black/10 pt-10 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-gray-400 font-hand text-xl mx-8">
                  execution-first → customer-first → business-viability • 20x lead qualification • 85% faster hiring • 300 daily active users • products &gt; presentations
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
