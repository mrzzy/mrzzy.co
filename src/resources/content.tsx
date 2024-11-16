<<<<<<< HEAD:src/resources/content.tsx
import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, SmartLink, Text } from "@once-ui-system/core";

<<<<<<< HEAD:src/resources/content.tsx
const person: Person = {
  firstName: "Zhu",
  lastName: "Zhanyan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const person = {
  firstName: "Zhu",
  lastName: "Zhanyan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
=======
const person = {
  firstName: 'Zhu',
  lastName: 'Zhanyan',
  get name () {
    return `${this.firstName} ${this.lastName}`
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  },
<<<<<<< HEAD:src/resources/content.tsx
  role: "Software Engineer (Data)",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  role: "Software Engineer (Data)",
  avatar: "/images/avatar.jpg",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};
=======
  role: 'Software Engineer (Data)',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Singapore', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English'] // optional: Leave the array empty if you don't want to display languages
}
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js

<<<<<<< HEAD:src/resources/content.tsx
const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};
=======
const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  )
}
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: 'Resume',
    icon: 'resume',
    link: 'https://mrzzy.github.io/resume/assets/pdfs/main-1.pdf'
  },
  {
<<<<<<< HEAD:src/resources/content.tsx
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mrzzy",
    essential: true,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mrzzy",
=======
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/mrzzy'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  },
  {
<<<<<<< HEAD:src/resources/content.tsx
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zhu-zhanyan",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zhu-zhanyan/",
=======
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/zhu-zhanyan/'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  },
  {
<<<<<<< HEAD:src/resources/content.tsx
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    name: "Email",
    icon: "email",
    link: "mailto:dev@mrzzy.co",
  },
];
=======
    name: 'Email',
    icon: 'email',
    link: 'mailto:dev@mrzzy.co'
  }
]
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js

<<<<<<< HEAD:src/resources/content.tsx
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const home = {
  label: "Home",
=======
const home = {
  label: 'Home',
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      🏗️ Building Software Systems that{' '}
      <Text onBackground='brand-medium'>Scale.</Text>
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      👋 Hey, Zhanyan here.
<<<<<<< HEAD:src/resources/content.tsx
      <br /> I&apos;m a passionate Software Engineer with a Data Engineering
      focus, <br /> currently studying
      <SmartLink href="https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-computing-in-computer-science">
        Computer Science as an undergraduate at NTU.
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      <br /> I'm a passionate Software Engineer (Data Engineering focus) <br />{" "}
      and an undergraduate studying
      <SmartLink href="https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-computing-in-computer-science">
        Computer Science at NTU.
=======
      <br /> I&apos;m a passionate Software Engineer (Data Engineering focus) <br />{' '}
      and an undergraduate studying
      <SmartLink href='https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-computing-in-computer-science'>
        Computer Science at NTU.
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      </SmartLink>
    </>
  )
}

<<<<<<< HEAD:src/resources/content.tsx
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const about = {
  label: "About",
  title: "About me",
=======
const about = {
  label: 'About',
  title: 'About me',
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
<<<<<<< HEAD:src/resources/content.tsx
    subItems: false,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    subItems: true,
=======
    subItems: true
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  },
  avatar: {
    display: true
  },
  calendar: {
    display: false,
    link: 'https://cal.com'
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        Her work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    )
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: []
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'University of Jakarta',
        description: <>Studied software engineering.</>
      },
      {
        name: 'Build the Future',
        description: <>Studied online marketing and personal branding.</>
      }
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      }
    ]
  }
}

<<<<<<< HEAD:src/resources/content.tsx
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
=======
const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
}

<<<<<<< HEAD:src/resources/content.tsx
const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
=======
const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

<<<<<<< HEAD:src/resources/content.tsx
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
const gallery = {
  label: "Gallery",
  title: "My photo gallery",
=======
const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
<<<<<<< HEAD:src/resources/content.tsx
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
=======
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    },
    {
<<<<<<< HEAD:src/resources/content.tsx
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
=======
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    },
    {
<<<<<<< HEAD:src/resources/content.tsx
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
=======
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    },
    {
<<<<<<< HEAD:src/resources/content.tsx
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
=======
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    },
    {
<<<<<<< HEAD:src/resources/content.tsx
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
=======
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    },
    {
<<<<<<< HEAD:src/resources/content.tsx
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
=======
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    },
<<<<<<< HEAD:src/resources/content.tsx
  ],
};
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};
=======
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal'
    }
  ]
}
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting):src/app/resources/content.js

export { person, social, newsletter, home, about, blog, work, gallery }
