/**
 * ============================================================================
 * THE CHIP DESIGNER - WORKBENCH CONFIGURATION FILE
 * ============================================================================
 * 
 * Edit this file to add, modify, or remove projects (logs) and articles (notes)
 * on your website. The layout will dynamically update.
 * 
 * Need help? Follow the template guides below.
 * ============================================================================
 */

export interface ProjectLog {
  id: string;          // Unique ID (e.g. 'LOG-01', 'LOG-02')
  category: string;    // Uppercase category (e.g. 'RTL_DESIGN', 'COMP_ARCH', 'AI_EDA')
  title: string;       // Project Title
  description: string; // Long technical description
  tags: string[];      // Programming languages or tools used (max 4 recommended)
  githubUrl?: string;  // Link to GitHub repo (optional)
  docUrl?: string;     // Link to specifications/write-up (optional)
}

export interface StudyNote {
  title: string;       // Article Title
  focus: string;       // Topic category (e.g. 'AI_IN_HARDWARE', 'TUTORIALS', 'NEWS')
  desc: string;        // Brief summary paragraph
  link: string;        // Link to full article/document (e.g. '#read-article')
}

/**
 * ----------------------------------------------------------------------------
 * 1. WORKBENCH PROJECTS / LAB LOGS
 * ----------------------------------------------------------------------------
 * Copy & Paste this template to add a new project:
 * 
 * {
 *   id: 'LOG-0X',
 *   category: 'CATEGORY_NAME',
 *   title: 'Project Title Here',
 *   description: 'Write a detailed description of what you designed, simulated, or tested.',
 *   tags: ['Tag1', 'Tag2', 'Tag3'],
 *   githubUrl: 'https://github.com/yourusername/project', // Optional
 *   docUrl: '#link-to-documentation'                      // Optional
 * },
 */
export const projectLogs: ProjectLog[] = [
  {
    id: 'LOG-01',
    category: 'AI_CHIP_DESIGN',
    title: 'LLM Verilog Code Generator',
    description: 'Benchmarking Claude, GPT-4, and Gemini on writing synthesizeable SystemVerilog modules. Testing code correctness, clock routing, and logic gate utilization after running OpenLane synthesis.',
    tags: ['SystemVerilog', 'LLMs', 'OpenLane', 'PromptEng'],
    githubUrl: 'https://github.com/ninja3011', // Replace with your actual repo url
    docUrl: '#log-01-specs'
  },
  {
    id: 'LOG-02',
    category: 'RTL_DESIGN',
    title: 'RISC-V Execution Unit Pipeline',
    description: 'Designing a 5-stage out-of-order execution pipeline in RTL. Exploring branch prediction mechanisms (Gshare) and handling data hazards with bypass paths.',
    tags: ['Verilog', 'RISC-V', 'ComputerArch', 'ModelSim'],
    githubUrl: 'https://github.com/ninja3011', // Replace with your actual repo url
    docUrl: '#log-02-specs'
  },
  {
    id: 'LOG-03',
    category: 'COMP_ARCH',
    title: 'ML-Driven Congestion Predictor',
    description: 'A study on utilizing simple neural network classifiers to predict routing congestion hotspots on a silicon die before running placement-and-route stages.',
    tags: ['Python', 'PyTorch', 'EDA Tools', 'PhysicalDesign'],
    githubUrl: 'https://github.com/ninja3011', // Replace with your actual repo url
    docUrl: '#log-03-specs'
  }
];

/**
 * ----------------------------------------------------------------------------
 * 2. STUDY NOTES / ARTICLE LOGS
 * ----------------------------------------------------------------------------
 * Copy & Paste this template to add a new study note:
 * 
 * {
 *   title: 'Your Article Title Here',
 *   focus: 'CATEGORY_NAME',
 *   desc: 'Write a brief 1-2 sentence summary of what this article covers.',
 *   link: '#link-to-full-article'
 * },
 */
export const studyNotes: StudyNote[] = [
  {
    title: 'Making AI Write Verilog: Prompting Failures & Wins',
    focus: 'AI_IN_HARDWARE',
    desc: 'An analysis of where modern LLMs fall short when designing state machines and how structured prompting can fix it.',
    link: '#read-note-1'
  },
  {
    title: 'Notes on High-Performance Memory Subsystems',
    focus: 'COMP_ARCH',
    desc: 'My study log on cache coherence protocols (MESI), write-back caches, and reducing latency in bus interconnects.',
    link: '#read-note-2'
  },
  {
    title: 'A 3-Year Retrospective on Writing RTL for Synthesis',
    focus: 'RTL_DESIGN',
    desc: 'Design habits, simulation checks, and common Verilog mistakes to avoid before sending logic to physical design teams.',
    link: '#read-note-3'
  }
];
