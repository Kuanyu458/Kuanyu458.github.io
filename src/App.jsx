import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, Brain, Briefcase, CheckCircle, Code, Cpu, GithubLogo, LinkedinLogo, List, PaperPlaneTilt, X } from '@phosphor-icons/react';

const projects = [
  { category: 'LLM Systems', title: 'Production RAG & Tool-Orchestrated Assistant', summary: 'A citation-grounded assistant for complex policy queries, designed around tool routing, document refresh, and real-world response constraints.', metric: '78%', metricLabel: 'lower response latency', stack: ['LLM', 'RAG', 'FastAPI', 'Tool Calling'], image: '/assets/codrugrx-workflow.jpg', imageAlt: 'AI application workflow presentation visual' },
  { category: 'Computer Vision', title: 'GPU-Optimized Vision Inference Pipeline', summary: 'End-to-end computer vision deployment using reproducible experiments, ONNX/TensorRT acceleration, Docker, and production-oriented validation.', metric: '34.2%', metricLabel: 'inference efficiency gain', stack: ['PyTorch', 'ONNX', 'TensorRT', 'Docker'], image: '/assets/ti-lung-product.png', imageAlt: 'Computer vision product interface for lung image analysis' },
  { category: 'Computer Vision', title: 'Robust Ultrasound Detection System', summary: 'A multi-site screening pipeline focused on model generalization, feature engineering, measurable performance, and deployable APIs.', metric: '>0.95', metricLabel: 'model AUC', stack: ['PyTorch', 'OpenCV', 'Flask API', 'W&B'], image: '/assets/br-fhus-product.png', imageAlt: 'Ultrasound AI screening product interface' },
  { category: 'Research', title: 'Multi-task Cardiac MRI Segmentation', summary: 'M.S. research translating a clinical measurement problem into a multi-task segmentation model and quantitative workflow for 300+ cases.', metric: '0.918', metricLabel: 'best Dice score', stack: ['Mask R-CNN', 'TensorFlow', 'MATLAB', 'Research'], image: '/assets/cardiac-segmentation.png', imageAlt: 'Cardiac MRI segmentation results from the author’s thesis' },
];

const capabilities = [
  ['01', 'LLM & Agent Systems', 'RAG, tool calling, evaluation, MCP integration, and dependable multi-step workflows.', Brain],
  ['02', 'Computer Vision', 'Detection, segmentation, multi-site validation, and domain-specific model development.', Cpu],
  ['03', 'AI Backend & Automation', 'FastAPI services, document pipelines, internal tools, and workflow automation.', Code],
  ['04', 'Deployment & Optimization', 'Docker, ONNX, TensorRT, GPU inference, experiment tracking, and reproducibility.', Briefcase],
];

const writing = [
  { type: 'LLM & Agents', title: 'Small Models, Real Tools: Designing a Tool-Calling Evaluation Lab', excerpt: 'How I integrated an upstream healthcare MCP server into a reproducible experiment for comparing SLM tool-use behavior.', date: 'Technical series · 8 min', slug: 'slm-tool-calling-lab' },
  { type: 'AI Engineering', title: 'From 84 Seconds to 18: What Actually Reduced LLM Workflow Latency', excerpt: 'A practical breakdown of routing, orchestration, caching, and measurement decisions in a production-oriented assistant.', date: 'Draft in progress', slug: null },
  { type: 'Research Notes', title: 'Evaluating Segmentation Beyond a Single Aggregate Score', excerpt: 'Lessons from multi-task cardiac MRI research on evaluation design, failure analysis, and communicating model limits.', date: 'Draft in progress', slug: null },
];

function Header({ onMenu, menuOpen }) {
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Kent Chen home">KC<span>.</span></a>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      {['about', 'work', 'research', 'writing', 'contact'].map((item) => <a href={`#${item}`} onClick={() => menuOpen && onMenu()} key={item}>{item[0].toUpperCase() + item.slice(1)}</a>)}
    </nav>
    <a className="header-cta" href="mailto:ky0808458@gmail.com?subject=Project%20inquiry%20for%20Kent%20Chen">Let’s talk <ArrowUpRight /></a>
    <button className="menu-button" onClick={onMenu} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <List />}</button>
  </header>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'LLM Systems', 'Computer Vision', 'Research'];
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((item) => item.category === filter), [filter]);
  return <div id="top">
    <Header menuOpen={menuOpen} onMenu={() => setMenuOpen((value) => !value)} />
    <main>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for selected freelance projects</p>
          <h1 id="hero-title">AI Engineer<br />& Applied AI<br /><em>Developer.</em></h1>
          <p className="hero-lede">I turn AI research into reliable products—from LLM agents and automation to computer vision and optimized inference.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowRight /></a><a className="text-link" href="mailto:ky0808458@gmail.com?subject=Project%20inquiry%20for%20Kent%20Chen&body=Hi%20Kent%2C%0A%0AI%27d%20like%20to%20discuss%3A%0AProject%20goal%3A%0ATimeline%3A%0ABudget%20range%3A%0A%0ABest%2C">Start a project <ArrowUpRight /></a></div>
          <div className="hero-meta" aria-label="Professional highlights"><div><strong>3+</strong><span>years shipping AI</span></div><div><strong>5+</strong><span>years in AI research</span></div><div><strong>TW</strong><span>Taipei · Remote</span></div></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><img src="/assets/kent-chen-portrait.jpg" alt="Kent Chen, AI engineer" /></div><div className="visual-note"><span>Current focus</span><strong>Agentic AI · Evaluation<br />Production ML Systems</strong></div></div>
      </section>

      <section className="marquee" aria-label="Core technologies"><div>PYTHON · PYTORCH · LLM / RAG · AGENTIC AI · FASTAPI · DOCKER · ONNX · TENSORRT · COMPUTER VISION · MLOPS</div></section>

      <section id="about" className="section-shell section-block">
        <div className="section-intro"><p className="section-number">01 / CAPABILITIES</p><h2>Engineering depth,<br /><em>delivery mindset.</em></h2><p>I work across the full AI lifecycle: framing the problem, building the model or agent, validating the evidence, and shipping a maintainable system.</p></div>
        <div className="capability-grid">{capabilities.map(([number, title, description, Icon]) => <article className="capability" key={title}><div className="capability-top"><span>{number}</span><Icon /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section id="work" className="section-block work-section"><div className="section-shell">
        <div className="section-intro split"><div><p className="section-number">02 / SELECTED WORK</p><h2>Systems built for<br /><em>real constraints.</em></h2></div><p>Selected commercial and research work. Client and employer-sensitive details are intentionally de-identified where appropriate.</p></div>
        <div className="filter-row" aria-label="Filter projects">{categories.map((category) => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}</button>)}</div>
        <div className="project-grid">{filtered.map((project) => <article className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt={project.imageAlt} loading="lazy" /></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="project-result"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        <article className="lab-card"><div><p className="project-category">OPEN-SOURCE LAB · IN DEVELOPMENT</p><h3>Business Document Workflow Agent</h3></div><p>A public, domain-neutral reference implementation for document ingestion, retrieval, structured extraction, and human-review checkpoints. This is a planned personal project; no completion claim is implied.</p><span className="status-pill">Building in public</span></article>
      </div></section>

      <section id="research" className="section-shell section-block research-layout"><div className="research-image"><img src="/assets/thesis-architecture.jpg" alt="Architecture diagram from Kent Chen’s master’s thesis" loading="lazy" /></div><div className="research-copy"><p className="section-number">03 / RESEARCH</p><h2>Research that ends<br />in <em>evidence.</em></h2><p>My foundation is applied machine learning research: translating ambiguous domain questions into datasets, experimental protocols, quantitative analysis, and reproducible conclusions.</p><ul><li><CheckCircle /> M.S. in Computer Science and Information Engineering</li><li><CheckCircle /> Multi-task cardiac MRI segmentation</li><li><CheckCircle /> 300+ cases in quantitative analysis</li><li><CheckCircle /> Best structure Dice: 0.918</li></ul><a className="text-link" href="#writing">Read research notes <ArrowRight /></a></div></section>

      <section className="section-block services-section"><div className="section-shell"><div className="section-intro split"><div><p className="section-number">04 / FREELANCE SERVICES</p><h2>From uncertain idea<br />to <em>working AI.</em></h2></div><p>Best suited for scoped prototypes, feasibility studies, system integration, and performance-focused engineering.</p></div><div className="services-list">{['RAG & business document Q&A', 'LLM agent, API & MCP integration', 'AI workflow automation & internal tools', 'Computer vision proof of concept', 'FastAPI, Docker & inference optimization', 'Benchmarking & technical feasibility'].map((service, index) => <div key={service}><span>0{index + 1}</span><h3>{service}</h3><ArrowUpRight /></div>)}</div><div className="process"><span>Discover</span><ArrowRight /><span>Prototype</span><ArrowRight /><span>Validate</span><ArrowRight /><span>Deliver</span></div></div></section>

      <section id="writing" className="section-shell section-block"><div className="section-intro split"><div><p className="section-number">05 / WRITING</p><h2>Notes from the<br /><em>engineering floor.</em></h2></div><p>Technical articles in English and Traditional Chinese, focused on implementation choices, experiments, and honest constraints.</p></div><div className="writing-grid">{writing.map((post) => <article className="writing-card" key={post.title}><p className="project-category">{post.type}</p><h3>{post.title}</h3><p>{post.excerpt}</p><div><span>{post.date}</span>{post.slug ? <a href={`#article/${post.slug}`} aria-label={`Read ${post.title}`}>Read article <ArrowRight /></a> : <span>Coming soon</span>}</div></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="section-shell contact-inner"><p className="section-number">06 / CONTACT</p><h2>Have a problem worth<br /><em>building around?</em></h2><p>Tell me what you are trying to achieve, the data or systems you already have, and your expected timeline.</p><a className="button primary large" href="mailto:ky0808458@gmail.com?subject=Project%20inquiry%20for%20Kent%20Chen&body=Hi%20Kent%2C%0A%0AI%27d%20like%20to%20discuss%3A%0AProject%20goal%3A%0AExisting%20data%20or%20systems%3A%0ATimeline%3A%0ABudget%20range%3A%0A%0ABest%2C">Start a conversation <PaperPlaneTilt /></a></div></section>
    </main>
    <Footer />
  </div>;
}

function Article() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div><Header menuOpen={menuOpen} onMenu={() => setMenuOpen((value) => !value)} /><main className="article-page"><a className="back-link" href="#top">← Back to portfolio</a><p className="project-category">LLM & AGENTS · TECHNICAL SERIES</p><h1>Small Models, Real Tools: Designing a Tool-Calling Evaluation Lab</h1><p className="article-deck">A practical account of integrating a third-party MCP server into an evaluation environment—without confusing infrastructure ownership with application engineering contribution.</p><div className="article-meta"><span>Kent Chen</span><span>8 min read</span><span>Traditional Chinese / English notes</span></div><aside className="attribution"><strong>Attribution and contribution boundary</strong><p>Taiwan Health MCP is an upstream open-source project created by HealthyMind Tech. I did not create or maintain the server. My work was to integrate it into LLM applications and design experiments around model routing, tool selection, execution reliability, and answer quality.</p></aside><article className="article-body"><h2>Why this experiment exists</h2><p>Tool calling demos often stop once a model emits valid JSON. Production behavior is harder: the model must choose the right tool, provide usable arguments, recover from failures, and turn structured outputs into a grounded answer. I built this lab to make those behaviors observable across smaller language models.</p><h2>The system boundary</h2><p>The upstream MCP server supplied healthcare data tools. The evaluation application was responsible for model adapters, scenario definitions, tool-routing logic, execution traces, scoring, and result comparison. Keeping this boundary explicit matters both technically and ethically: it tells readers what was reused and what was engineered for the experiment.</p><blockquote>Integration is a real engineering contribution, but it is not authorship of the underlying open-source infrastructure.</blockquote><h2>What the evaluation measures</h2><ul><li><strong>Tool selection:</strong> did the model choose the tool required by the task?</li><li><strong>Argument quality:</strong> were parameters complete and executable?</li><li><strong>Execution success:</strong> did the request complete against the tool layer?</li><li><strong>Answer grounding:</strong> did the final response reflect returned evidence?</li><li><strong>Latency and failure modes:</strong> where did the end-to-end workflow spend time or break?</li></ul><h2>Why smaller models are interesting</h2><p>Smaller models can reduce deployment cost and improve privacy or local-control options, but capability cannot be assumed from benchmark averages. A workflow-level harness exposes whether a model is dependable for the exact tools and decisions an application needs.</p><h2>Engineering takeaway</h2><p>The strongest result of an evaluation lab is not a universal model ranking. It is a repeatable decision process: define cases, preserve traces, separate routing from response quality, and document which failures are acceptable for a specific product context.</p></article></main><Footer /></div>;
}

function Footer() {
  return <footer><div className="section-shell"><div><a className="wordmark" href="#top">KC<span>.</span></a><p>AI Engineer & Applied AI Developer<br />Taipei, Taiwan · Available remotely</p></div><div className="social-links"><a href="https://github.com/Kuanyu458" target="_blank" rel="noreferrer"><GithubLogo /> GitHub</a><a href="https://www.linkedin.com/in/kent-chen-ky87458" target="_blank" rel="noreferrer"><LinkedinLogo /> LinkedIn</a></div><p className="copyright">© {new Date().getFullYear()} Kent Chen. Built with React & Vite.</p></div></footer>;
}

export function App() {
  const [route, setRoute] = useState(window.location.hash);
  useEffect(() => { const update = () => { setRoute(window.location.hash); window.scrollTo(0, 0); }; window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update); }, []);
  return route.startsWith('#article/') ? <Article /> : <Home />;
}
