import { SmartLink, Text } from '@/once-ui/components'
import { Fragment } from 'react'

const person = {
  firstName: 'Zhu',
  lastName: 'Zhanyan',
  get name () {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Software Engineer (Data)',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Singapore', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English'] // optional: Leave the array empty if you don't want to display languages
}

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

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'Resume',
    icon: 'resume',
    link: 'https://mrzzy.github.io/resume/assets/pdfs/main-1.pdf'
  },
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/mrzzy'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/zhu-zhanyan/'
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:dev@mrzzy.co'
  }
]

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      🏗️ Building Software Systems that{' '}
      <Text onBackground='brand-medium'>Scale.</Text>
    </>
  ),
  subline: (
    <>
      👋 Hey, Zhanyan here.
      <br /> I&apos;m a passionate Software Engineer with a Data Engineering
      focus, <br /> currently studying
      <SmartLink href='https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-computing-in-computer-science'>
        Computer Science as an undergraduate at NTU.
      </SmartLink>
    </>
  )
}

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true
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
    experiences: [
      {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
          <Fragment key='achieve_1'>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </Fragment>,
          <Fragment key='achieve_2'>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </Fragment>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9
          }
        ]
      },
      {
        company: 'Creativ3',
        timeframe: '2018 - 2022',
        role: 'Lead Designer',
        achievements: [
          <Fragment key='achieve_3'>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </Fragment>,
          <Fragment key='achieve_4'>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </Fragment>
        ],
        images: []
      }
    ]
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

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
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
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
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

export { person, social, newsletter, home, about, blog, work, gallery }
