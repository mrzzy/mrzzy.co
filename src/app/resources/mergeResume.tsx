import { about } from './content';


const RESUME_URL = "https://raw.githubusercontent.com/mrzzy/resume/refs/heads/main/src/content.json";

/** Augment about.content with content from resume. */
type About = typeof about;
export const mergeResume = async (about: About) => {
  // fetch resume content
  const response = await fetch(RESUME_URL);
  const resume = await response.json();

  // Populate about with resume content
  about.intro.title = resume.intro.title;
  about.intro.description = (
    <>
      {resume.intro.description}
    </>
  );

  // Populate work section
  about.work.title = resume.work.title;
  about.work.experiences = resume.work.experiences.map((experience: any) => ({
    company: experience.company,
    timeframe: experience.timeframe,
    role: experience.role,
    achievements: experience.achievements.map((achievement: any) => (
      <>
        {achievement}
      </>
    )),
    images: [], // Assuming no images provided in the resume's work experiences
  }));

  // populate studies section
  about.studies.title = resume.studies.title;
  about.studies.institutions = resume.studies.institutions.map((institution: any) => ({
    name: institution.name,
    description: (
      <>
        {institution.qualification}({institution.timeframe})
      </>
    ),
  }));

  // populate technical skills
  about.technical.title = resume.skills.title;
  about.technical.skills = resume.skills.skillsets.map((skillset: any) => ({
    title: skillset.name,
    description: (
      <>
        {skillset.skills}
      </>
    ),
    images: [],
  }));

  return about;
};

