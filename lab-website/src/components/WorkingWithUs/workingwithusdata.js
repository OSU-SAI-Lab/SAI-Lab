// Data for Working With Us page
// Edit this file to update content without updating the component

export const workingWithUsData = {
  undergraduate: {
    intro: "We welcome motivated undergraduate students to join our lab and gain hands-on research experience in high-performance computing and systems. Use the following checklist as a guideline for preparation, expectations, and progression.",
    
    prerequisites: [
      "Complete CSE 2431 (Systems II: Introduction to Operating Systems) before or very early in the research period",
      "Complete CSE 5441 (Introduction to Parallel Computing) - introduces parallel programming models, performance issues, and high-performance architectures",
      "Have a solid grasp of C/C++ and basic data structures and algorithms from prerequisite courses (e.g., 2231, 2321, 2421 sequences)",
      "Be prepared to commit at least 2 consecutive semesters to research (including summer if possible)"
    ],
    
    applicationProcess: [
      "Schedule an initial meeting to discuss research interests in high-performance computing and how they align with current projects",
      "Prepare a brief 1–2 page document summarizing:",
      "  • Relevant coursework and grades",
      "  • Programming experience (HPC, MPI, CUDA/OpenMP if any)",
      "  • Any prior project or internship experience"
    ],
    
    expectations: [
      "Agree on a fixed weekly research meeting time and be responsive on email/Teams",
      "Maintain a research log (e.g., Lab's Git repo + shared notes) documenting tasks, experiments, and results every week",
      "Follow basic research professionalism: meet deadlines, communicate blockers early, and do not share code/data outside the group without permission",
      "At the end of each semester, prepare:",
      "  • A short written summary of contributions",
      "  • A brief presentation or demo of work to the group"
    ],
    labStructure: {
  overview: "Students interested in working with the lab will usually start with an initial volunteer period, which gives them a chance to learn about the lab and gives me a chance to evaluate fit, commitment, and readiness. Students who show strong performance and engagement may then continue with me for course credit or in a paid role, depending on project needs and funding availability.",
  points: [
    "The lab operates in a startup-like mode, the best fit is someone who is proactive, eager to learn, and comfortable stepping into new challenges",
    "Students should expect to contribute at least 10–20 hours per week through a combination of research and development activities",
    "Because our projects often involve collaboration with people from other disciplines, students should be open to interdisciplinary teamwork and learning from different domains",
    "Some work may also involve field visits, testing, or data collection outside the lab environment"
  ]
},
  },
  
  masters: {
    intro: "Master's students have the opportunity to work on impactful research projects while developing expertise in high-performance computing and systems. Use the following checklist as a guideline for preparation, expectations, and progression.",
    
    prerequisites: [
      "Enroll in and complete CSE 5441 (Introduction to Parallel Computing) as early as possible in the program",
      "Ensure strong background in systems and architecture via prior coursework such as operating systems (e.g., CSE 2431 or equivalent) or related graduate systems courses",
      "Commit to working for at least one full year before expecting or discussing funding; focus first on building sustained contributions and trust"
    ],
    
    applicationProcess: [
      "Schedule an initial meeting with an updated CV highlighting:",
      "  • HPC, systems, networking, Deep Learning, or parallel programming experience",
      "  • Prior research, theses, or publications (if any)",
      "  • Preferred timeline (thesis vs non-thesis, graduation target)",
      "Decide early whether you are targeting a thesis option and define a tentative research direction within the first semester"
    ],
    
    expectations: [
      "Set up a regular weekly or biweekly meeting schedule and stick to it",
      "Maintain a reproducible workflow: use version control, document build/run steps, and keep experiment configs and results organized",
      "Read and discuss key papers from the group's research areas to understand the ecosystem you will be working in",
      "Aim to contribute to at least one publication-quality project (conference/workshop or strong technical report) during the MS"
    ],
    
    fundingRequirements: [
      "Before requesting funding discussions:",
      "  • Demonstrate consistent productivity over ~2 semesters",
      "  • Show ownership of a well-defined part of a project (design, implementation, or evaluation)"
    ]
  }
};