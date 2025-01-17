'use client';

import { Box, Container, Grid, Tooltip } from '@mui/material';
import { resumeData } from '@/data/resume';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import HeroSection from '@/components/HeroSection';
import {
  GradientText,
  SkillsPaper,
  SkillsTitle,
  SkillsContainer,
  ToolChip,
  EducationSection,
  EducationCard,
  EducationTitle,
  SchoolName,
  EducationPeriod,
  AdditionalSkillsCard,
  SkillsHeading,
  SoftSkillChip,
  LanguageText,
  ContactSection,
  ContactTitle,
  ContactContainer,
  ContactItem,
  ContactLink,
  StyledSkillsSection,
  StyledSkillChip,
  BackToTopButton,
} from './styles';

export default function Home() {
  const { personalInfo, skills, experience, projects, education, additionalSkills } = resumeData;
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main style={{
      background: isDarkMode ? '#121212' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease',
    }}>
      {/* Hero Section */}
      <Box component="section" id="about">
        <HeroSection />
      </Box>

      {/* Skills Section with colorful cards */}
      <Box component="section" id="skills">
        <StyledSkillsSection isDarkMode={isDarkMode}>
          <Container maxWidth="xl">
            <GradientText variant="h3" sx={{ mb: 4 }} isDarkMode={isDarkMode}>
              Skills & Expertise
            </GradientText>
            <Grid container spacing={3}>
              {/* Technical Skills */}
              <Grid item xs={12} md={6}>
                <SkillsPaper elevation={3} isDarkMode={isDarkMode}>
                  <SkillsTitle variant="h5" isDarkMode={isDarkMode}>Technical Skills</SkillsTitle>
                  <SkillsContainer>
                    {skills.map((skill) => (
                      <Tooltip 
                        key={skill.name}
                        title={`Level: ${skill.level}`}
                        arrow
                        placement="top"
                      >
                        <div>
                          <StyledSkillChip
                            label={`${skill.icon} ${skill.name}`}
                            isDarkMode={isDarkMode}
                          />
                        </div>
                      </Tooltip>
                    ))}
                  </SkillsContainer>
                </SkillsPaper>
              </Grid>
              {/* Additional Skills */}
              <Grid item xs={12} md={6}>
                <SkillsPaper elevation={3} isDarkMode={isDarkMode}>
                  <SkillsTitle variant="h5" isDarkMode={isDarkMode}>Tools & Technologies</SkillsTitle>
                  <SkillsContainer>
                    {additionalSkills.tools.map((tool) => (
                      <Tooltip
                        key={tool.name}
                        title={`${tool.name} - Development Tool`}
                        arrow
                        placement="top"
                      >
                        <div>
                          <ToolChip
                            label={`${tool.icon} ${tool.name}`}
                            isDarkMode={isDarkMode}
                          />
                        </div>
                      </Tooltip>
                    ))}
                  </SkillsContainer>
                </SkillsPaper>
              </Grid>
            </Grid>
          </Container>
        </StyledSkillsSection>
      </Box>

      {/* Experience Section */}
      <Box 
        component="section" 
        id="experience" 
        sx={{ py: 8, bgcolor: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)' }}
        role="region"
        aria-label="Experience"
      >
        <Container maxWidth="xl">
          <GradientText 
            variant="h3" 
            sx={{ mb: 4 }} 
            isDarkMode={isDarkMode}
            component="h2"
          >
            Experience
          </GradientText>
          <Grid 
            container 
            spacing={3}
            role="list"
            aria-label="Experience list"
          >
            {experience.map((job, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                key={index}
                role="listitem"
              >
                <ExperienceCard job={job} index={index} isDarkMode={isDarkMode} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box 
        component="section" 
        id="projects" 
        sx={{ py: 8 }}
        role="region"
        aria-label="Projects"
      >
        <Container maxWidth="xl">
          <GradientText 
            variant="h3" 
            sx={{ mb: 4 }} 
            isDarkMode={isDarkMode}
            component="h2"
          >
            Projects
          </GradientText>
          <Grid 
            container 
            spacing={3}
            role="list"
            aria-label="Project list"
          >
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                key={index}
                role="listitem"
              >
                <ProjectCard project={project} index={index} isDarkMode={isDarkMode} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <EducationSection 
        id="education" 
        isDarkMode={isDarkMode}
        role="region"
        aria-label="Education and Skills"
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Education */}
            <Grid item xs={12} md={6}>
              <GradientText 
                variant="h3" 
                sx={{ mb: 4 }} 
                isDarkMode={isDarkMode}
                component="h2"
              >
                Education
              </GradientText>
              <Box role="list" aria-label="Education list">
                {education.map((edu, index) => (
                  <Box key={index} role="listitem">
                    <EducationCard elevation={3} isDarkMode={isDarkMode}>
                      <EducationTitle variant="h5" isDarkMode={isDarkMode}>{edu.degree}</EducationTitle>
                      <SchoolName variant="h6" isDarkMode={isDarkMode}>{edu.school}</SchoolName>
                      <EducationPeriod 
                        variant="subtitle1" 
                        isDarkMode={isDarkMode}
                        aria-label={`Period: ${edu.period}, Location: ${edu.location}`}
                      >
                        {edu.period} | {edu.location}
                      </EducationPeriod>
                    </EducationCard>
                  </Box>
                ))}
              </Box>
            </Grid>
            {/* Additional Skills */}
            <Grid item xs={12} md={6}>
              <GradientText 
                variant="h3" 
                sx={{ mb: 4 }} 
                isDarkMode={isDarkMode}
                component="h2"
              >
                Additional Skills
              </GradientText>
              <AdditionalSkillsCard 
                elevation={3} 
                isDarkMode={isDarkMode}
                role="region"
                aria-label="Soft Skills"
              >
                <SkillsHeading variant="h5" isDarkMode={isDarkMode}>Soft Skills</SkillsHeading>
                <Box sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mt: 2
                }}
                role="list"
                aria-label="Soft skills list"
                >
                  {additionalSkills.softSkills.map((skill) => (
                    <SoftSkillChip
                      key={skill}
                      label={skill}
                      isDarkMode={isDarkMode}
                      role="listitem"
                      aria-label={`Soft skill: ${skill}`}
                    />
                  ))}
                </Box>
              </AdditionalSkillsCard>
              <AdditionalSkillsCard 
                elevation={3} 
                isDarkMode={isDarkMode}
                role="region"
                aria-label="Languages"
              >
                <SkillsHeading variant="h5" isDarkMode={isDarkMode}>Languages</SkillsHeading>
                <Box role="list" aria-label="Languages list">
                  {additionalSkills.languages.map((lang) => (
                    <LanguageText 
                      key={lang.name} 
                      variant="body1" 
                      isDarkMode={isDarkMode}
                      role="listitem"
                      aria-label={`${lang.name}: ${lang.level}`}
                    >
                      {lang.name}: {lang.level}
                    </LanguageText>
                  ))}
                </Box>
              </AdditionalSkillsCard>
            </Grid>
          </Grid>
        </Container>
      </EducationSection>

      {/* Contact Section */}
      <ContactSection id="contact" isDarkMode={isDarkMode}>
        <Container maxWidth="xl">
          <ContactTitle variant="h3" isDarkMode={isDarkMode}>Get in Touch</ContactTitle>
          <ContactContainer>
            <ContactItem isDarkMode={isDarkMode}>
              <ContactLink 
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
              >
                <EmailIcon sx={{ fontSize: '2rem' }} />
              </ContactLink>
            </ContactItem>
            <ContactItem isDarkMode={isDarkMode}>
              <ContactLink 
                href={`tel:${personalInfo.phone}`}
                aria-label="Phone"
              >
                <PhoneIcon sx={{ fontSize: '2rem' }} />
              </ContactLink>
            </ContactItem>
            <ContactItem isDarkMode={isDarkMode}>
              <ContactLink 
                href={resumeData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: '2rem' }} />
              </ContactLink>
            </ContactItem>
          </ContactContainer>
        </Container>
      </ContactSection>

      {/* Back to Top Button */}
      {showBackToTop && (
        <BackToTopButton
          onClick={handleBackToTop}
          isDarkMode={isDarkMode}
          aria-label="Back to top"
        >
          <KeyboardArrowUpIcon />
        </BackToTopButton>
      )}
    </main>
  );
} 