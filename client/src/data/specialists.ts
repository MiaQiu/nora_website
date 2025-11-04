export interface Specialist {
  id: string;
  name: string;
  title: string;
  experience: string;
  image: string;
  about: string;
  workExperience?: string[];
  education?: string[];
  languages: string[];
  specialties: string[];
  cancellationPolicy: string;
  categories: string[]; 
  pricing?: number;
  freeConsultation?: boolean;// Which category pages they appear on
}

export const specialists: Specialist[] = [
  {
    id: "lin-meiyin",
    name: "Lin Meiyin",
    title: "Strategic Education Pathway Consultant",
    experience: "Former Head of Placement and Scholarships Policy at MOE Singapore, Harvard-educated education consultant with expertise in Singapore's education landscape",
    image: "/images/specialists/meiyin-lin.png",
    about: "Lin Meiyin is a strategic education pathway consultant dedicated to helping both local and international families navigate Singapore's competitive education landscape. Her holistic approach is personalized based on a child's unique strengths, interests, and ambitions. She provides expert guidance to find the best educational fit for a child and family, from school selection and admissions to career development. Her mission is to transform the complex journey into a structured and rewarding experience, giving families the clarity they need to chart a path forward.",
    workExperience: [
      "Founder - CELSCA Education",
      "Head of Placement and Scholarships Policy - Ministry of Education, Singapore",
      "Director - Harvard Club of Singapore (2016-2018)",
      "Policy Formulation - Student placement in national schools and scholarships",
      "Oversight - Admissions Exercise for International Students (AEIS)"
    ],
    education: [
      "Postgraduate Degree in Education - Harvard University (PSC Scholarship)",
      "Bachelor's Degree in Mathematics and Economics - London School of Economics (PSC Scholarship)"
    ],
    languages: ["English", "Mandarin"],
    specialties: ["Education pathway consultation", "School selection and admissions", "Academic coaching and portfolio building", "University admission guidance", "Career development planning", "Relocation support for international families", "AEIS preparation", "Scholarship applications"],
    cancellationPolicy: "48-hour notice required; flexible scheduling for international families across time zones",
    categories: ["education-academic"],
    pricing: 150,
    freeConsultation: true
  },
  {
    id: "ronald-yow",
    name: "Ronald Yow",
    title: "Parenting Coach",
    experience: "Over 20 years of experience working with children, youths, and families. Certified life and parent coach with extensive expertise in leadership, learning, and talent development.",
    image: "/images/specialists/ronald-yow.jpeg",
    about: "Ronald Yow is a certified life and parent coach with over 20 years of experience working with children, youths, and families. He is a certified trainer and has extensive expertise in leadership, learning, and talent development. He has a thoughtful, reflective approach and specializes in helping clients build self-awareness and emotional presence. He is known for his \"Parent Makeover Coaching Program,\" which focuses on helping parents adjust their mindset and perspectives rather than just teaching specific methods.",
    workExperience: [
      "Professional Certified Coach (PCC)",
      "ACTA Certified Trainer - Singapore and Southeast Asia",
      "Master Certified Coach (MCC)",
      "Transformative coaching training conductor across Singapore and Southeast Asia",
      "Father of two daughters - Personal parenting experience"
    ],
    education: [
      "Professional Certified Coach (PCC) certification",
      "ACTA Certified Trainer qualification",
      "Master Certified Coach (MCC) certification"
    ],
    languages: ["English"],
    specialties: ["Parent Coaching", "Leadership and Mentoring", "Youth and Family Development", "Parent Makeover Coaching Program", "Mindset and perspective adjustment", "Self-awareness building", "Emotional presence coaching"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for family coaching sessions",
    categories: ["parenting-skills"],
    pricing: 120,
    freeConsultation: false
  },
  
  {
    id: "jacquelyn-peh",
    name: "Jacquelyn Peh",
    title: "Registered Counsellor",
    experience: "Over 10 years of experience providing counseling to teenagers, young adults, and families. ",
    image: "/images/specialists/Jacquelyn-Peh.jpg",
    about: "Jacquelyn is a registered counsellour with over a decade of experience, focusing on supporting families and teenagers with mental health and relationship challenges. She is a clinical supervisor and holds professional affiliations with the Singapore Association for Counsellors (SAC) and the Association of Psychotherapists and Counsellors Singapore (APACS).",
    workExperience: [
      "Registered Counsellor - Private Practice",
      "Clinical Supervisor - Singapore Association for Counsellors (SAC)",
      "Family Counsellor - Social Services Sector"
    ],
    education: [
      "Master's in Social Sciences (Professional Counselling)"
    ],
    languages: ["English", "Mandarin"],
    specialties: ["Relationship challenges", "Family and parenting issues", "Teenager mental health", "Emotion regulation", "Grief counselling", "Self-esteem issues"],
    cancellationPolicy: "24-hour notice required; 30-minute free discovery call for new customers",
    categories: ["emotional-wellbeing"],
    pricing: 120,
    freeConsultation: true
  },
  {
    id: "eliza",
    name: "Eliza",
    title: "Lactation Consultant",
    experience: "Guided many couples as new parents since 2019, with over 500 clinical hours supporting breastfeeding families",
    image: "/images/specialists/Eliza.webp",
    about: "An IBCLC is the only internationally recognized lactation credential. Eliza has guided many couples as new parents since 2019, covering topics from newborn care to breastfeeding, and has clocked more than 500 clinical hours directly supporting breastfeeding families.",
    workExperience: [
      "IBCLC Certified Lactation Consultant (since 2019)",
      "Advanced Lactation Specialist - LiquidGoldConcept",
      "500+ clinical hours supporting breastfeeding families"
    ],
    education: [
      "IBCLC (International Board Certified Lactation Consultant) certification",
      "Advanced Lactation Specialist - LiquidGoldConcept",
      "Human Biology course completion",
      "Introduction to Sociology course completion", 
      "Diet and Nutritional Advisor Diploma",
      "Child Psychology Diploma"
    ],
    languages: ["English", "Mandarin"],
    specialties: ["Newborn feeding support", "Lactation consultation", "Exclusive pumping consult", "Mixed feeding consultation", "IBCLC certified support", "Breastfeeding troubleshooting"],
    cancellationPolicy: "48-hour notice required; priority booking during application seasons",
    categories: ["postpartum-care"],
    pricing: undefined,
    freeConsultation: false
  },
  {
    id: "clement-ong",
    name: "Clement Ong",
    title: "Parenting Coach & Registered Counsellor",
    experience: "Certified coach and counsellor, specialising in family dynamics and parenting, with a focus on fathering, marital, and family issues.",
    image: "/images/specialists/clement-ong.jpeg",
    about: "Clement Ong is a certified coach and counsellour who brings his extensive experience in career and executive coaching to the realm of family dynamics and parenting. As a father of two young adult children, he has a passion for helping couples build strong marriages and empowering parents to raise resilient children. His approach focuses on helping parents gain clarity and fresh perspectives to enhance their self-awareness, improve family relationships, and navigate modern challenges, including digital issues.",
    workExperience: [
      "Associate Counsellor - Kingsmead Centre",
      "Associate - Centre for Fathering",
      "Couple Mentor - Family counselling and support",
      "Director-level Coach - Civil Service College (CSC) leadership programs",
      "Registered Counsellor - Singapore Association for Counselling",
      "Father of two young adult children - Personal parenting experience"
    ],
    education: [
      "Master of Social Science in Professional Counselling - Swinburne University of Technology, Melbourne, Australia",
      "Certified Career Practitioner (CCP)",
      "Certified Clinical Supervisor of Career Counselling (CCSCC)",
      "Certified Solutions Focused Coach (CSFC)"
    ],
    languages: ["English"],
    specialties: ["Parent and Family Counselling", "Parent-Child Relationship", "Father-child relationship", "Life transitions", "Youth counselling", "Marital and family issues", "Digital parenting challenges", "Building resilient children"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for family counselling sessions",
    categories: ["parenting-skills", "emotional-wellbeing"],
    pricing: 130,
    freeConsultation: false
  },
  {
    id: "giselle-makarachvili",
    name: "Giselle Makarachvili",
    title: "Return to Work Coach/ Career Coach",
    experience: "Over 15 years of international experience in helping hundreds of women with career transitions",
    image: "/images/specialists/Giselle-Makarachvili_2.jpg",
    about: "Giselle has over 14 years of experience in luxury hospitality and has held C-level roles, including CEO of the co-living company Hmlet. She has worked with hundreds of women on career transitions and has experience in company training and facilitation. She is also the founder of TravelTod, an eco-friendly brand for families.",
    workExperience: [
      "CEO - Hmlet (Co-living Company)",
      "Founder - TravelTod (Eco-friendly Family Brand)",
      "C-level Executive - Luxury Hospitality Sector"
    ],
    education: [
      "15+ years international marketing and communications experience"
    ],
    languages: ["English"],
    specialties: ["Return-to-work coaching", "Career change and transition coaching", "Executive leadership transition", "Marketing and communications strategy", "Company training and facilitation"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for working mothers",
    categories: ["return-to-work"],
    pricing: 100,
    freeConsultation: false
  },
  {
    id: "yixuan",
    name: "Yixuan",
    title: "Baby-Led Sleep Specialist",
    experience: "Over 3 years of sleep coaching experience, specialises in improving sleep for the whole family with attachment based practices.",
    image: "/images/specialists/Yixuan.avif",
    about: "Yixuan is a Baby and Children Sleep Coach who specialises in improving sleep for the whole family with attachment based practices. Her approach is a gentle and responsive sleep training alternative that respects and supports normal infant sleep. She believes that parents are the experts of their child and works to guide them on a path that respects their baby's individual needs and the family's dynamics. Yixuan is a mother of 2 boys.",
    workExperience: [
      "Certified Baby-Led Sleep and Wellness Specialist",
      "Sleep Coaching - Private Practice",
      "Mother of 2 boys with hands-on parenting experience"
    ],
    education: [
      "Baby-Led Sleep and Wellness Specialist"
    ],
    languages: ["English", "Mandarin"],
    specialties: ["Sleep Coaching"],
    cancellationPolicy: "48-hour notice required; priority booking during application seasons",
    categories: ["postpartum-care"],
    pricing: 100,
    freeConsultation: true
  },
  {
    id: "emeline-hare",
    name: "Emeline Hare",
    title: "Postnatal Care Expert",
    experience: "Over 15 years of experience in maternal and newborn health, working with NHS, NCT, and Singapore hospitals",
    image: "/images/specialists/Emeline-Hare.webp",
    about: "Emeline is a maternal and newborn health specialist dedicated to providing compassionate, evidence-based care. She is a doula and an accredited lactation specialist and breastfeeding counselor. She has supported families globally, specializing in antenatal education, neonatal, and postpartum care.",
    workExperience: [
      "NHS and NCT - Maternal Health Specialist (UK)",
      "Lactation Specialist Training - Canada",
      "Private and Government Hospitals - Singapore (since 2013)",
      "International Teacher Trainer in Baby Massage"
    ],
    education: [
      "Postgraduate Diploma in Antenatal Education and Neonatal Care - University of Cambridge",
      "International Teacher Trainer in Baby Massage"
    ],
    languages: ["English"],
    specialties: ["Postnatal care", "Baby massage", "Lactation and breastfeeding support", "Hypnobirthing", "Baby yoga", "Doula support"],
    cancellationPolicy: "48-hour notice required; priority booking during application seasons",
    categories: ["postpartum-care"],
    pricing: undefined,
    freeConsultation: false
  },
  
  {
    id: "eliza2",
    name: "Eliza",
    title: "Return To Work Coach",
    experience: "Certified life coach since 2023, specializing in supporting mothers through work transitions and motherhood",
    image: "/images/specialists/Eliza.webp",
    about: "A certified life coach who specializes in supporting mothers through the emotional, logistical, and identity shifts of returning to work and navigating motherhood. Eliza brings her personal lived experience as a mother of three and a former B2B marketing professional in the tech space to her coaching. She guides women who want to do meaningful work without losing themselves.",
    workExperience: [
      "Certified Life Coach (since 2023)",
      "Former B2B Marketing Professional - Tech Industry",
      "Mother of Three - Personal Experience",
      "Return-to-Work Coaching Specialist"
    ],
    education: [
      "Life Coaching Certificate",
      "Child Psychology Diploma"
    ],
    languages: ["English"],
    specialties: ["Back-to-work coaching", "Motherhood coaching", "Identity shifts", "Guilt & pressure management", "Pumping & childcare logistics", "Career transition support"],
    cancellationPolicy: "48-hour notice required; flexible scheduling for working mothers",
    categories: ["return-to-work"],
    pricing: undefined,
    freeConsultation: false
  },
  {
    id: "zhang-li-mingde",
    name: "张李明德",
    title: "父母教養顧問 (Parenting Consultant)",
    experience: "Over 17 years of cross-disciplinary professional training in education, psychological counseling, and social work. More than 2,500 hours of practical experience in lectures, individual counseling, and leading growth groups.",
    image: "/images/specialists/zhang-li-mingde.png",
    about: "作為父母教養顧問，他專注於協助家長解決教養上的疑難雜症，並提升親子教養能力。他的目標是幫助父母培育出自信、懂得合作、並能對社會有所貢獻的幸福小孩。他認為，教養不應只針對單點問題，而是必須從「系統性」的角度來處理。他結合心理學的「綜合理論」、社會工作的「豐富實務經驗」以及教育訓練的「系統化架構」，提供專業的教養諮詢服務。As a Parenting Consultant, he focuses on helping parents solve their parenting difficulties and enhances their parenting skills. His goal is to help parents raise happy children who are confident, cooperative, and a contribution to society. His approach is not to solve single issues but to address parenting challenges from a 'systemic perspective.' He provides professional parenting consultation by combining a 'comprehensive psychological theory,' rich 'practical social work experience,' and a 'systematic educational training framework.'",
    workExperience: [
      "正向教養講師與外部督導 - Multiple Parent-Child Centers and Schools",
      "到宅親職教養諮詢師 - 兒少保家庭處遇服務中心",
      "Positive Discipline Instructor and External Supervisor",
      "In-home Parenting Consultant for Child Protection Service Families"
    ],
    education: [
      "國家專技高考社會工作師證書 (National Professional and Technical Examination Certificate for Social Worker)",
      "國家乙級就業服務技術士證照 (National B-Level Employment Service Technician Certificate)",
      "國際 NLP 與催眠師認證 (International NLP and Hypnotherapist Certification)",
      "TA 溝通分析治療法 TA101、TA202 (TA Communication Analysis Therapy TA101, TA202)",
      "財團法人杏陵醫學基金會性教育講師培訓 (Xingling Medical Foundation Sex Education Instructor Training)"
    ],
    languages: ["Chinese", "中文"],
    specialties: ["Positive Discipline", "Children and Teenagers", "Relationships", "正向教養", "兒童與青少年", "人際關係"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for parenting consultation sessions",
    categories: ["parenting-skills"],
    pricing: 130,
    freeConsultation: false
  },
  {
    id: "anne-sophie",
    name: "Anne-Sophie",
    title: "Wellbeing Coaching & Yoga for Parents",
    experience: "Trained wellness coach working toward ICF ACC certification since 2022, yoga teacher since 2020 specializing in prenatal and postnatal yoga",
    image: "/images/specialists/anne-sophie.jpeg",
    about: "Anne-Sophie helps parents reduce stress and nurture themselves through holistic coaching and private yoga. As a French mom living in Singapore for the past decade, she draws on her personal and professional experience to guide parents toward calm, confidence, and balance.",
    workExperience: [
      "Wellness Coach - Working toward ICF ACC certification (since 2022)",
      "Yoga Teacher - Prenatal and Postnatal Yoga (since 2020)",
      "French mother living in Singapore - Personal parenting experience"
    ],
    education: [
      "Prenatal & Postnatal Yoga Training",
      "ICF ACC Certification - In Progress"
    ],
    languages: ["English", "French"],
    specialties: ["Work-Life Balance Coaching", "Stress & Anxiety Management", "Prenatal & Postnatal Recovery Support", "Coaching for Working Moms", "Wellness Coaching", "Yoga for Parents"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for parent wellness sessions",
    categories: ["postpartum-care"],
    pricing: undefined,
    freeConsultation: false
  },
  {
    id: "freya-lim",
    name: "Freya Lim",
    title: "Care Navigator for Autism Children",
    experience: "24 years of experience as a mother of a special needs child, with expertise in navigating autism support systems and mainstream education",
    image: "/images/specialists/freya_lim.jpeg",
    about: "Freya is a dedicated mother of a special needs child diagnosed with ASD and mild Dyslexia at age 2½. With 24 years of hands-on experience, she has successfully supported her son through early intervention, mainstream schooling, and into university at NTU. As a former Head of On-Air Promotions in the TV industry and current Social Work student, Freya combines professional expertise with lived experience to guide other special needs families through their journey.",
    workExperience: [
      "Care Navigator - Special Needs Children (24 years personal experience)",
      "Guest Speaker - CaringSG's Talk: Preparing for NS for Enlistees with Special Needs (2023-24)",
      "Former Head of On-Air Promotions - TV Industry",
      "Healthcare Industry Experience (COVID-19 period)",
      "Social Media Advocate - Special Needs Parenting Tips"
    ],
    education: [
      "Degree in Social Work - Singapore University of Social Sciences (SUSS, currently pursuing)",
      "Degree in Communications - Monash University"
    ],
    languages: ["English", "Chinese"],
    specialties: ["Autism spectrum disorder navigation", "Early intervention guidance", "Mainstream school integration", "Special needs parenting support", "Working parent strategies", "Social skills development", "University preparation for special needs", "Family advocacy"],
    cancellationPolicy: "24-hour notice required; understanding of special needs family scheduling challenges",
    categories: ["special-complex-care"],
    pricing: 90,
    freeConsultation: true
  },
  {
    id: "lillian-ong",
    name: "Lillian Ong",
    title: "Parent Coach",
    experience: "Over 20 years of experience helping adults and parents flourish, specializing in postpartum mental health and parent-child bonding",
    image: "/images/specialists/lillian-ong.jpg",
    about: "Lilian is a seasoned and empathetic counsellor with over 20 years of experience helping adults and parents flourish. Her work blends a person-centered ethos with evidence-based techniques such as CBT, ACT, and Positive Psychology to empower clients. She specializes in postpartum mental health and parent-child bonding.",
    workExperience: [
      "Senior Clinical Counsellor - KK Women's and Children's Hospital (13 years)",
      "Lead Counsellor - SURE MUMS mother-infant therapy programme",
      "Private Practice - Wellness Journey (since 2022)"
    ],
    education: [
      "Master in Counselling - Monash University",
      "Postgraduate Diploma in Clinical Supervision - Counselling and Care Centre",
      "Bachelor of Social Science with Honours, Psychology - National University of Singapore"
    ],
    languages: ["English"],
    specialties: ["Postpartum mental health", "Parent-child bonding", "CBT", "ACT", "Positive Psychology", "Mother-infant therapy", "Perinatal mental health"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for parent coaching sessions",
    categories: ["parenting-skills", "emotional-wellbeing"],
    pricing: 120,
    freeConsultation: false
  },
  {
    id: "marisa-rhein",
    name: "Marisa Rhein",
    title: "Lactation Consultant and Postpartum/Infant Care Expert",
    experience: "10+ years as a postpartum and newborn nurse, 3 years as a board-certified lactation consultant, and 4 years as a nursing mother",
    image: "/images/specialists/marisa-rhein.jpg",
    about: "Marisa is a Registered Nurse (BSN, RN), International Board Certified Lactation Consultant (IBCLC) and Doula. Marisa's background as an RN allows her to specialize in premature babies and medical complications affecting lactation, such as mastitis, breast surgery, and other health conditions. Additionally, she is a certified birth and postpartum doula, giving her a well-rounded perspective on maternal and newborn care. Marisa loves building relationships with families, celebrating each milestone, and witnessing babies grow and thrive. Supporting parents through their lactation journey is more than just a profession for her—it's a deeply personal passion.",
    workExperience: [
      "Registered Nurse - Postpartum and Newborn Care (10+ years)",
      "International Board Certified Lactation Consultant - IBCLC (3 years)",
      "Certified Birth and Postpartum Doula",
      "Nursing Mother (4 years and counting)"
    ],
    education: [
      "Bachelor's of Science in Nursing",
      "International Board Certified Lactation Consultant (IBCLC) certification",
      "Certified Birth Doula",
      "Certified Postpartum Doula"
    ],
    languages: ["English"],
    specialties: ["Breastfeeding", "Pumping", "Infant formula", "Solids feeding", "Newborn care", "Postpartum care and recovery", "Cesarean care and recovery", "Premature babies", "Mastitis", "Breast surgery complications"],
    cancellationPolicy: "48-hour notice required; flexible scheduling for postpartum families",
    categories: ["postpartum-care"],
    pricing: undefined,
    freeConsultation: false
  },
  {
    id: "sarah-ruse",
    name: "Sarah Ruse",
    title: "Return to Work Coach",
    experience: "Seven years of coaching experience and a background in corporate consulting, with personal experience as a full-time mother",
    image: "/images/specialists/sarah-ruse.jpg",
    about: "Sarah is a fully certified and highly experienced Career and Executive Coach. Her approach uses powerful questioning, evidence-based coaching tools, and psychological insight to help clients reframe challenges and unlock meaningful change. She specializes in supporting professionals through pivotal career transitions.",
    workExperience: [
      "Career and Executive Coach (7 years)",
      "Corporate Consultant",
      "Full-time Mother - Personal Experience",
      "Works with professionals from Microsoft, Google, and Amazon"
    ],
    education: [
      "Associate Certified Coach - International Coaching Federation",
      "Certified Counsellor - Level 3 - CityLit",
      "Certified Coach - PG Cert Business & Personal Coaching - Barefoot",
      "Bachelor of Commerce - 1st class honors - The University of Birmingham"
    ],
    languages: ["English"],
    specialties: ["Maternity leave transitions", "Career transitions", "Parental leave", "Redundancy", "Menopause", "Health issues", "Promotion readiness", "Conflict resolution", "Leadership", "Imposter syndrome"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for working mothers",
    categories: ["return-to-work"],
    pricing: 150,
    freeConsultation: true
  },
  {
    id: "priscilla-shin",
    name: "Dr. Priscilla Shin",
    title: "Parent Coach",
    experience: "Over nine years of therapeutic experience, with a focus on helping people through their challenges by building a strong connection based on trust and empathy",
    image: "/images/specialists/priscilla-shin.jpg",
    about: "Priscilla is a certified counsellor and clinical supervisor who champions mental health advocacy for children, youths, and adults. She has over nine years of therapeutic experience, with a focus on helping people through their challenges by building a strong connection based on trust and empathy. She is currently pursuing a doctoral program in counselling to further her dedication to the field.",
    workExperience: [
      "Registered Counsellor and Clinical Member - Singapore Association for Counselling",
      "Registered Clinical Supervisor - Singapore Association for Counselling",
      "Therapeutic work with children, youths, and adults (9 years)",
      "Mental health talks and workshops facilitator"
    ],
    education: [
      "Doctor of Professional Counselling (currently pursuing)",
      "Registered Counsellor and Clinical Member - Singapore Association for Counselling",
      "Registered Clinical Supervisor - Singapore Association for Counselling",
      "Certified Circle of Security Parenting™ (COSP) Programme Facilitator",
      "Level 1 Trained ABFT Therapist - Attachment-Based Family Therapy",
      "Certificate in Clinical Supervision - Clinical Supervision Services, Australia",
      "Emotionally-Focused Couples' Therapy: Core Skills - ICEEFT",
      "Advanced Training in Gestalt Play Therapy"
    ],
    languages: ["English"],
    specialties: ["Child and family therapy", "Peer relationships", "Suicidal ideation", "Attachment theory", "Emotionally-focused therapy", "Circle of Security Parenting", "Attachment-Based Family Therapy", "Couples therapy", "Gestalt play therapy"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for family therapy sessions",
    categories: ["parenting-skills", "emotional-wellbeing"],
    pricing: 130,
    freeConsultation: false
  },
  {
    id: "sheryl-ang",
    name: "Sheryl Ang",
    title: "Parent Coach, Dyslexia Care Navigator, Home Schooling Coach",
    experience: "Over a decade of experience supporting parents and professionals, with personal experience as a mother of highly spirited, dyslexic children and homeschooling mom",
    image: "/images/specialists/sheryl-ang.jpg",
    about: "As a Peaceful Parent Coach, Sheryl Ang guides parents to clarity and confidence, helping them craft their unique family paths. Her approach is inspired by non-violent communication, collaborative problem-solving, playful parenting, and an attachment-based developmental perspective. She is also a mindfulness practitioner and is trauma-informed.",
    workExperience: [
      "Peaceful Parent Coach (10+ years)",
      "Dyslexia Care Navigator",
      "Homeschooling Coach",
      "Business Owner",
      "Mother of highly spirited, dyslexic children - Personal Experience"
    ],
    education: [
      "Professional training in peaceful parenting approaches"
    ],
    languages: ["English"],
    specialties: ["Siblings", "Trauma", "School & Learning Issues", "Anxiety", "Sensory Processing", "Homeschooling", "Executive Function", "Routines", "Emotion-Coaching", "Parental Self-Regulation", "Dyslexia navigation", "Non-violent communication", "Collaborative problem-solving", "Playful parenting"],
    cancellationPolicy: "24-hour notice required; understanding of homeschooling family schedules",
    categories: ["parenting-skills", "special-complex-care", "education-academic"],
    pricing: 100,
    freeConsultation: true
  }
  // ,
  // {
  //   id: "priya-sharma",
  //   name: "Ms. Priya Sharma",
  //   title: "Return to Work Coach",
  //   experience: "Prepare the transition back to their careers after maternity leave",
  //   image: "/images/specialists/dr-priya-sharma.jpg",
  //   about: "Return to Work Coaches help parents navigate the transition back to their careers after maternity leave or career breaks. They provide strategies for work-life integration, managing mom guilt, career re-entry planning, and building confidence in professional settings. Dr. Sharma understands the unique challenges facing working mothers in Singapore's competitive job market.",
  //   workExperience: [
  //     "MOM Singapore - Women's Career Development Programme",
  //     "Singapore Management University - Executive Coaching",
  //     "Professional Women's Network Singapore"
  //   ],
  //   education: [
  //     "MBBS - National University of Singapore",
  //     "M.Ed in Career Development - National Institute of Education",
  //     "Certificate in Executive Coaching - Singapore Coaching Institute"
  //   ],
  //   languages: ["English", "Mandarin", "Tamil", "Hindi", "Malay"],
  //   specialties: ["Career re-entry planning", "Work-life integration strategies", "Professional confidence building", "Networking and job search", "Salary negotiation", "Managing career guilt"],
  //   cancellationPolicy: "24-hour notice required; flexible scheduling for working parents",
  //   rating: 4.9,
  //   reviewCount: 156,
  //   categories: ["return-to-work", "postpartum-care"]
  // },
  // {
  //   id: "rachel-lim",
  //   name: "Dr. Rachel Lim",
  //   title: "Parenting Coach",
  //   experience: "Navigate the challenges of raising children with mental health issues",
  //   image: "/images/specialists/dr-rachel-lim.jpg",
  //   about: "Parenting Coaches specializing in mental health support help families navigate the challenges of raising children with anxiety, depression, or other mental health conditions. They provide evidence-based strategies, crisis management skills, and emotional support for both parents and children. Dr. Lim focuses on building resilient family systems while addressing mental health needs.",
  //   workExperience: [
  //     "Institute of Mental Health Singapore - Family Support Services",
  //     "Singapore Association for Mental Health - Parent Training",
  //     "Child Guidance Clinic - Family Therapy Department"
  //   ],
  //   education: [
  //     "Ph.D. in Clinical Psychology - National University of Singapore",
  //     "M.A. in Family Therapy - Eastern Virginia Medical School",
  //     "Certificate in Child Mental Health - Singapore Psychological Society"
  //   ],
  //   languages: ["English", "Mandarin", "Hokkien", "Teochew"],
  //   specialties: ["Supporting anxious children", "Depression management strategies", "Crisis intervention skills", "Family communication techniques", "Building emotional resilience", "Coordinating with mental health professionals"],
  //   cancellationPolicy: "24-hour notice required; emergency support available for crisis situations",
  //   rating: 4.8,
  //   reviewCount: 89,
  //   categories: ["parenting-skills", "special-complex-care"]
  // },
  // {
  //   id: "ahmad-hassan",
  //   name: "Mr. Ahmad Hassan",
  //   title: "Parent Navigator",
  //   experience: "Father of 10 years old son with ADHD",
  //   image: "/images/specialists/dr-ahmad-hassan.jpg",
  //   about: "Parent Navigators for special needs children help families understand and access services for children with ADHD, Autism Spectrum Disorder, and other developmental differences. They provide guidance on therapeutic interventions, educational support, and advocacy strategies. Dr. Hassan specializes in connecting families with Singapore's support networks and resources.",
  //   workExperience: [
  //     "Autism Resource Centre Singapore - Family Navigation Services",
  //     "SPARK (Society for the Physically Disabled) - Early Intervention",
  //     "Ministry of Education - Special Educational Needs Division"
  //   ],
  //   education: [
  //     "M.Ed in Special Education - National Institute of Education",
  //     "B.A. (Hons) in Psychology - National University of Singapore",
  //     "Certificate in Applied Behavior Analysis - Behavior Analyst Certification Board"
  //   ],
  //   languages: ["English", "Malay", "Arabic", "Mandarin"],
  //   specialties: ["ADHD management strategies", "Autism spectrum support", "IEP development and advocacy", "Therapeutic service coordination", "Sensory processing support", "School accommodation planning"],
  //   cancellationPolicy: "48-hour notice required for comprehensive planning sessions",
  //   rating: 4.7,
  //   reviewCount: 92,
  //   categories: ["special-complex-care"]
  // },
  // {
  //   id: "catherine-wong",
  //   name: "Ms. Catherine Wong",
  //   title: "Parenting Coach",
  //   experience: "Education & Academic Planning - PSLE, DSA, University",
  //   image: "/images/specialists/dr-catherine-wong.jpg",
  //   about: "Educational Parenting Coaches guide families through Singapore's complex education system, from primary school selection through university planning. They provide strategic academic planning, PSLE preparation support, DSA application guidance, and long-term educational pathway mapping. Dr. Wong has extensive experience with MOE policies and academic excellence strategies.",
  //   workExperience: [
  //     "Ministry of Education Singapore - Academic Planning Division",
  //     "Raffles Institution - Academic Counselling Department",
  //     "Singapore Examinations and Assessment Board - Consultant"
  //   ],
  //   education: [
  //     "Ph.D. in Educational Psychology - National Institute of Education",
  //     "M.Ed in Educational Leadership - NIE Singapore",
  //     "Certificate in Academic Coaching - Singapore Coaching Association"
  //   ],
  //   languages: ["English", "Mandarin", "Cantonese", "Malay"],
  //   specialties: ["PSLE strategic planning", "DSA application strategy", "Secondary school selection", "University pathway planning", "Academic stress management", "Parent-child study dynamics"],
  //   cancellationPolicy: "48-hour notice required; priority booking during application seasons",
  //   rating: 4.9,
  //   reviewCount: 134,
  //   categories: ["education-academic"]
  // },
  // {
  //   id: "sarah-tan",
  //   name: "Dr. Sarah Tan",
  //   title: "Neurodivergence & Learning Differences Specialist",
  //   experience: "18 years experience",
  //   image: "/images/specialists/dr-sarah-tan.jpg",
  //   about: "Neurodivergence & Learning Differences Specialists provide comprehensive support for children with ADHD, autism, dyslexia, and other learning differences. They help families understand neurodivergent needs and advocate within Singapore's education system. Dr. Tan specializes in strength-based approaches to neurodiversity.",
  //   workExperience: [
  //     "Institute of Mental Health Singapore - Child & Adolescent Unit",
  //     "Autism Resource Centre Singapore",
  //     "Dyslexia Association of Singapore"
  //   ],
  //   education: [
  //     "Ph.D. in Clinical Psychology - National University of Singapore",
  //     "M.Psych in Neuropsychology - University of Melbourne",
  //     "Certificate in ADHD Clinical Services - CHADD International"
  //   ],
  //   languages: ["English", "Mandarin", "Hokkien"],
  //   specialties: ["ADHD assessment and management", "Autism spectrum support", "Dyslexia intervention", "School accommodation planning", "Strength-based coaching", "Family advocacy training"],
  //   cancellationPolicy: "72-hour notice required for diagnostic assessments",
  //   rating: 4.8,
  //   reviewCount: 67,
  //   categories: ["special-complex-care", "education-academic"]
  // },
  // {
  //   id: "marcus-chen",
  //   name: "Dr. Marcus Chen",
  //   title: "Digital Wellness & Family Communication Coach",
  //   experience: "12 years experience",
  //   image: "/images/specialists/dr-marcus-chen.jpg",
  //   about: "Digital Wellness & Family Communication Coaches help families navigate technology use and strengthen relationships in the digital age. They provide strategies for healthy screen time, online safety, and maintaining family connection. Dr. Chen understands the unique digital landscape facing Singapore families.",
  //   workExperience: [
  //     "Singapore Children's Society - Cyber Wellness Programme",
  //     "Touch Cyber Wellness Centre",
  //     "National University of Singapore - Digital Life Lab"
  //   ],
  //   education: [
  //     "Ph.D. in Cyberpsychology - Nanyang Technological University",
  //     "M.A. in Counselling Psychology - James Cook University Singapore",
  //     "B.Comp (Hons) in Information Systems - NUS"
  //   ],
  //   languages: ["English", "Mandarin", "Cantonese"],
  //   specialties: ["Screen time management", "Online safety education", "Digital parenting strategies", "Family communication improvement", "Cyberbullying prevention", "Tech-life balance"],
  //   cancellationPolicy: "24-hour notice required; virtual sessions available",
  //   rating: 4.6,
  //   reviewCount: 78,
  //   categories: ["parenting-skills"]
  // },
  // {
  //   id: "amelia-kumar",
  //   name: "Dr. Amelia Kumar",
  //   title: "Adolescent Mental Health & Emotional Wellness Coach",
  //   experience: "20 years experience",
  //   image: "/images/specialists/dr-amelia-kumar.jpg",
  //   about: "Adolescent Mental Health & Emotional Wellness Coaches specialize in supporting teenagers through emotional challenges, anxiety, and depression. They work with both teens and parents to navigate this critical developmental stage. Dr. Kumar focuses on culturally appropriate interventions for Singapore's multicultural families.",
  //   workExperience: [
  //     "Institute of Mental Health Singapore - CHAT Programme",
  //     "Singapore General Hospital Adolescent Medicine",
  //     "Samaritans of Singapore - Youth Services"
  //   ],
  //   education: [
  //     "MBBS - National University of Singapore",
  //     "M.Med in Psychiatry - NUS",
  //     "Certificate in Adolescent Mental Health - Royal College of Psychiatrists"
  //   ],
  //   languages: ["English", "Tamil", "Hindi", "Mandarin", "Malay"],
  //   specialties: ["Teen anxiety and depression", "Self-esteem building", "Peer pressure navigation", "Academic stress management", "Body image concerns", "Suicide prevention"],
  //   cancellationPolicy: "24-hour notice required; crisis intervention available",
  //   rating: 4.9,
  //   reviewCount: 143,
  //   categories: ["emotional-wellbeing"]
  // },
  // {
  //   id: "janet-loh",
  //   name: "Dr. Janet Loh",
  //   title: "Parent Self-Care & Family Wellness Specialist",
  //   experience: "24 years experience",
  //   image: "/images/specialists/dr-janet-loh.jpg",
  //   about: "Parent Self-Care & Family Wellness Specialists focus on supporting parents' mental health, stress management, and overall wellbeing throughout their parenting journey. They address burnout, menopause, and help parents maintain their identity while caring for children. Dr. Loh specializes in holistic family wellness approaches.",
  //   workExperience: [
  //     "Singapore Women's Health Initiative",
  //     "Parkway Medical Centre Psychology Department",
  //     "Centre for Family Medicine - Parent Wellness Programme"
  //   ],
  //   education: [
  //     "Ph.D. in Health Psychology - National University of Singapore",
  //     "M.Psych in Clinical Psychology - University of Melbourne",
  //     "Certificate in Women's Health - Singapore Medical Association"
  //   ],
  //   languages: ["English", "Mandarin", "Hokkien", "Cantonese"],
  //   specialties: ["Parent burnout prevention", "Stress management techniques", "Menopause support", "Work-life balance", "Mindfulness training", "Relationship maintenance during parenting"],
  //   cancellationPolicy: "24-hour notice required; wellness retreats available",
  //   rating: 4.8,
  //   reviewCount: 145,
  //   categories: ["emotional-wellbeing", "postpartum-care"]
  // }
  
];

// Utility functions
export const getSpecialistsByCategory = (category: string): Specialist[] => {
  return specialists.filter(s => s.categories.includes(category));
};

export const getSpecialistNames = (): string[] => {
  return specialists.map(s => s.name);
};

export const getSpecialistById = (id: string): Specialist | undefined => {
  return specialists.find(s => s.id === id);
};

export const getSpecialistByName = (name: string): Specialist | undefined => {
  return specialists.find(s => s.name === name);
};

// Dynamic matching functions for automatic synchronization
export const getSpecialistsBySpecialtyTags = (specialtyTags: string[], category?: string): Specialist[] => {
  return specialists.filter(specialist => {
    // First filter by category if provided
    const categoryMatch = !category || specialist.categories.includes(category);
    
    // Then filter by specialty tags
    const specialtyMatch = specialtyTags.some(tag => 
      specialist.specialties.some(specialty => 
        specialty.toLowerCase().includes(tag.toLowerCase())
      ) ||
      specialist.title.toLowerCase().includes(tag.toLowerCase()) ||
      specialist.about.toLowerCase().includes(tag.toLowerCase())
    );
    
    return categoryMatch && specialtyMatch;
  });
};

export const getSpecialistsByTitleKeywords = (keywords: string[], category?: string): Specialist[] => {
  return specialists.filter(specialist => {
    const categoryMatch = !category || specialist.categories.includes(category);
    const titleMatch = keywords.some(keyword => 
      specialist.title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    return categoryMatch && titleMatch;
  });
};

export const getSpecialistsByCombinedCriteria = (criteria: {
  specialtyTags?: string[];
  titleKeywords?: string[];
  category?: string;
  experienceKeywords?: string[];
}): Specialist[] => {
  return specialists.filter(specialist => {
    // Category filter
    const categoryMatch = !criteria.category || specialist.categories.includes(criteria.category);
    
    // Specialty tags filter
    const specialtyMatch = !criteria.specialtyTags || criteria.specialtyTags.some(tag => 
      specialist.specialties.some(specialty => 
        specialty.toLowerCase().includes(tag.toLowerCase())
      )
    );
    
    // Title keywords filter
    const titleMatch = !criteria.titleKeywords || criteria.titleKeywords.some(keyword => 
      specialist.title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    // Experience keywords filter
    const experienceMatch = !criteria.experienceKeywords || criteria.experienceKeywords.some(keyword => 
      specialist.experience.toLowerCase().includes(keyword.toLowerCase()) ||
      specialist.about.toLowerCase().includes(keyword.toLowerCase())
    );
    
    return categoryMatch && specialtyMatch && titleMatch && experienceMatch;
  });
};

// Category mappings for easy reference
export const categories = {
  'emotional-wellbeing': 'Emotional Wellbeing',
  'special-complex-care': 'Special & Complex Care',
  'postpartum-care': 'Postpartum Care',
  'education-academic': 'Education & Academic',
  'parenting-skills': 'Parenting Skills',
  'return-to-work': 'Return to Work'
};