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
  overview:
    "Students interested in working with the lab will usually start with an initial volunteer period, which gives them a chance to learn about the lab and gives me a chance to evaluate fit, commitment, and readiness.",

  continuation:
    "Students who show strong performance and engagement may then continue with me for course credit or in a paid role, depending on project needs and funding availability.",

  points: [
    "The lab operates in a startup-like mode. The best fit is someone who is proactive, eager to learn, and comfortable stepping into new challenges.",
    "Students should expect to contribute at least 10–20 hours per week through a combination of research and development activities.",
    "Because our projects often involve collaboration with people from other disciplines, students should be open to interdisciplinary teamwork and learning from different domains.",
    "Some work may also involve field visits, testing, or data collection outside the lab environment."
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
  },
  k12: {
    intro: "This information sheet is intended for families, guidance counselors, and students interested in middle school and high school opportunities connected to SAI Lab.",
    labEnvironment: "SAI Lab works in a fast-moving, startup-like environment centered on problem solving, experimentation, and building useful systems. Students may be exposed to a combination of research and development activities, including working with data, testing tools, supporting prototypes, helping document results, and learning how computing connects to real-world problems. The lab often collaborates with people from other domains, which means students may learn alongside researchers, engineers, and domain experts from areas outside computer science. Some projects may also include field-based activities such as data collection, testing, observation, or deployment support.",
    expectations: [
      "Students should show curiosity, initiative, and a willingness to learn new things.",
      "Students should be dependable, communicative, and respectful of deadlines and team responsibilities.",
      "Students should be open to working with people from different backgrounds and areas of expertise.",
      "Students should be comfortable asking questions and learning step by step.",
      "Some roles may begin with basic support tasks and grow as the student gains confidence and demonstrates reliability.",
      "Some activities may take place outside the lab, including field visits, demos, or supervised project support."
    ],
    roles: [
      {
        title: "Youth Data Helper / Lab Assistant",
        skills: [
          "Basic computer literacy and comfort with typing, file organization, and simple digital tools.",
          "Ability to follow directions carefully and pay attention to detail.",
          "Interest in how information is organized and used in projects."
        ],
        tasks: [
          "Help organize data files, images, notes, or simple spreadsheets.",
          "Assist with basic data entry, labeling, or transcription tasks.",
          "Support lab members with documentation and simple project organization tasks."
        ],
        gains: [
          "Experience with basic research workflows and digital organization.",
          "Greater confidence using spreadsheets, files, and structured project materials.",
          "Exposure to how research and development teams manage information."
        ],
        specificExpectations: [
          "Complete assigned tasks carefully and on time.",
          "Ask for help when instructions are unclear.",
          "Show consistency, responsibility, and attention to detail."
        ]
      },
      {
        title: "Middle School Tech Explorer",
        skills: [
          "Interest in computers, apps, games, or technology.",
          "Willingness to try new tools and learn in a guided setting.",
          "Basic problem-solving habits and patience."
        ],
        tasks: [
          "Explore beginner-friendly software tools, simulations, or coding activities.",
          "Help test simple tools or interfaces and share feedback.",
          "Participate in short guided activities connected to technology and innovation."
        ],
        gains: [
          "Confidence using digital tools and learning new technical concepts.",
          "Exposure to how technology is tested, improved, and used in projects.",
          "Experience with creative exploration and structured experimentation."
        ],
        specificExpectations: [
          "Come prepared to try new things and stay engaged.",
          "Follow directions and technology use guidelines.",
          "Share observations honestly and participate actively."
        ]
      },
      {
        title: "High School AI and Computing Intern",
        skills: [
          "Interest in artificial intelligence, computing, data, or engineering.",
          "Comfort with numbers, patterns, or logical thinking.",
          "Experience with coding is helpful but not required."
        ],
        tasks: [
          "Work with guided tools and small tasks related to data, AI, or computing systems.",
          "Help prepare experiments, tests, or simple visualizations.",
          "Assist with recording observations and summarizing what was learned."
        ],
        gains: [
          "Introductory experience with AI and computing in a real project setting.",
          "Practice with problem solving, documentation, and technical communication.",
          "Exposure to interdisciplinary work and mentoring from lab members."
        ],
        specificExpectations: [
          "Show motivation, curiosity, and readiness to learn independently.",
          "Communicate clearly when stuck or when additional support is needed.",
          "Take ownership of assigned tasks and follow through consistently."
        ]
      },
      {
        title: "Field and Media Assistant",
        skills: [
          "Comfort working outdoors or in different environments when needed.",
          "Interest in photography, video, observation, or storytelling.",
          "Ability to follow a checklist and work cooperatively with others."
        ],
        tasks: [
          "Help during field visits by organizing equipment or recording observations.",
          "Assist with photos, videos, or media organization for projects.",
          "Support demonstrations, events, or outreach activities tied to lab projects."
        ],
        gains: [
          "Experience with field-based project support and real-world data collection.",
          "Skills in documentation, observation, and media organization.",
          "Greater understanding of how lab work connects to real environments."
        ],
        specificExpectations: [
          "Be punctual, prepared, and attentive during field or event activities.",
          "Follow safety rules and remain with the supervising team.",
          "Handle equipment, media, and instructions responsibly."
        ]
      },
      {
        title: "Youth Outreach and Communications Support",
        skills: [
          "Strong reading, writing, or presentation skills for age level.",
          "Interest in explaining ideas clearly to others.",
          "Comfort with basic presentation, design, or online tools."
        ],
        tasks: [
          "Help create short project summaries, flyers, posters, or outreach materials.",
          "Support workshop preparation or event organization.",
          "Assist with gathering feedback from participants and organizing responses."
        ],
        gains: [
          "Experience with communication, organization, and public-facing project support.",
          "Practice translating technical ideas into clear language.",
          "Exposure to educational outreach and collaborative teamwork."
        ],
        specificExpectations: [
          "Meet deadlines for materials or event support tasks.",
          "Be professional, respectful, and open to feedback.",
          "Contribute thoughtfully to group efforts and communication tasks."
        ]
      }
    ],
    generalNotes: "These roles are intended to introduce students to research, technology, and project-based learning in a supportive environment. Students may begin with simpler tasks and gradually take on more responsibility as they demonstrate maturity, reliability, and interest. Depending on the opportunity, the focus may be on learning, exploration, mentorship, field exposure, technical skill building, or early research engagement."
  }
};