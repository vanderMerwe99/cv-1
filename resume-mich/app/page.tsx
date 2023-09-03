"use client";
import React from "react";
import {
  Paper,
  Grid,
  Avatar,
  Chip,
  Typography,
  Divider,
  Card,
  CardContent,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  School,
  Star,
  Work as WorkIcon,
  ContactMail as ContactMailIcon,
  Equalizer as EqualizerIcon,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  },
  paper: {
    width: "100%",
    maxWidth: "800px",
    padding: "20px",
  },
  avatar: {
    width: "150px", // Adjust as needed
    height: "150px", // Adjust as needed
    margin: "25px",
  },
  profileInfo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  chip: {
    marginRight: "10px",
    marginBottom: "10px",
  },
  divider: {
    margin: "20px 0",
  },
  button: {
    marginTop: "20px",
  },
  accordion: {
    marginBottom: "20px",
    width: "100%",
  },
  accordionSummary: {
    backgroundColor: "#06AED5",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#0E94A7",
    },
  },
  accordionIcon: {
    color: "#FFFFFF",
  },
  card: {
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  cardContent: {
    paddingTop: 0,
  },
  sectionHeading: {
    marginBottom: "10px",
  },
  iconButton: {
    marginRight: "10px",
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#357830",
    },
  },
  sectionContent: {
    marginBottom: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moduleIcon: {
    fontSize: 40,
  },
  moduleName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  contactIcon: {
    fontSize: 40,
    marginRight: "20px",
  },
  contactName: {
    fontWeight: "bold",
  },
  contactEmail: {
    color: "gray",
  },
}));

const ReferencesSection = () => {
  const classes = useStyles();
  const references = [
    {
      name: "Abram Mahlatsi",
      email: "Abram.Mahlatsi@nwu.ac.za",
    },
  ];

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5">References</Typography>
      <List>
        {references.map((reference, index) => (
          <ListItem key={index} className={classes.listItem}>
            <ContactMailIcon className={classes.contactIcon} />
            <ListItemText
              primary={
                <Typography variant="subtitle1" className={classes.contactName}>
                  {reference.name}
                </Typography>
              }
              secondary={
                <Typography variant="body2" className={classes.contactEmail}>
                  {reference.email}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const ModulesInfo = () => {
  const classes = useStyles();
  const modules = [
    {
      name: "Biochemistry Modules",
      items: [
        "Independent Biochemistry Project - 83%",
        "Analytical Chemistry - 79%",
        "Physical Chemistry - 73%",
        "Inorganic Chemistry - 82%",
        "Organic Chemistry - 72%",
        "Enzymology - 73%",
        "Metabolism - 72%",
      ],
    },
    {
      name: "Microbiology Modules",
      items: [
        "Introductory to Microbiology - 78%",
        "Microbial Physiology - 75%",
        "Diversity and Ecology of Micro-organisms - 71%",
      ],
    },
    {
      name: "Honours Modules for Environmental Sciences with Ecological Interaction and Ecosystems",
      items: [
        "Introduction to Environmental Management - 68%",
        "Conservation Ecology - 79%",
        "Resilience Thinking in Ecology - 63%",
      ],
    },
  ];
  return (
    <>
      {modules.map((module, index) => (
        <Paper key={index} elevation={3} className={classes.paper}>
          <Typography variant="h5" className={classes.moduleName}>
            {module.name}
          </Typography>
          <List>
            {module.items.map((item, itemIndex) => (
              <ListItem key={itemIndex} className={classes.listItem}>
                <ListItemText primary={item} />
                <ListItemIcon>
                  <EqualizerIcon className={classes.moduleIcon} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </>
  );
};

const ProjectSection = () => {
  const classes = useStyles();
  const projects = [
    {
      title:
        "Investigating Antibiotic Resistance in Vegetable Endophytes Irrigated with Antibiotic-contaminated Water",
      description:
        "In response to rising concerns about antibiotic resistance across the globe, this research aimed to explore the factors driving multidrug resistance in bacterial endophytes found in commonly consumed vegetables: spinach, lettuce, and tomatoes...",
      objectives: [
        "Isolate and identify endophytic bacteria from selected vegetables.",
        "Analyze the plant growth-promoting attributes of these bacteria.",
        "Assess the types and levels of antibiotic contaminants in irrigation water.",
        "Examine the prevalence of antibiotic resistance in vegetable endophytes exposed to these contaminants.",
      ],
      methodologies: [
        "Sample Collection and Sterilization: Vegetable samples underwent a rigorous sterilization protocol to ensure the purity of the collected endophytes.",
        "Isolation of Bacterial Endophytes: Using diverse media, the endophytes were isolated, cultured, and then analyzed for colony formation.",
        "Pathogenicity and Biochemical Characterization: Preliminary screenings included haemolysis tests, gram staining, and standard biochemical tests like oxidase and catalase.",
        "Endophyte Screening: The isolated endophytes were qualitatively evaluated for plant growth-promoting characteristics and biomolecule production.",
        "Antibiotic-Resistant Screening: Employing the Kirby-Bauer disc diffusion method, bacterial endophytes' susceptibility patterns to various antibiotics were determined.",
        "Molecular Identification: The genomic DNA of the isolates was amplified through PCR for further identification and analysis."
      ],
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <Card key={index} className={classes.card} elevation={3}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" className={classes.cardTitle} gutterBottom>
              Projects <WorkIcon className={classes.moduleIcon} />
            </Typography>
            <Typography paragraph>
              <strong>{project.title}</strong>
            </Typography>
            <Typography paragraph>{project.description}</Typography>
            <Typography paragraph>
              <strong>Research Objectives:</strong>
              <List>
                {project.objectives.map((objective, index) => (
                  <ListItem key={index}>{objective}</ListItem>
                ))}
              </List>
            </Typography>
            <Typography>
              <strong>Primary Methodologies:</strong>
              <List>
                {project.methodologies.map((methodology, index) => (
                  <ListItem key={index}>{methodology}</ListItem>
                ))}
              </List>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default function EnvironmentalScientistCV() {
  const classes = useStyles();

  // Define CV data (Mock data for the example)
  const name = "Michaela Koch";
  const title = "Environmental Scientist and Nature Enthusiast";
  const cell = "061 531 2807";
  const bio = "Bringing a fresh perspective to environmental science.";
  const email = "michaelakoch33747474@gmail.com";
  const linkedin = "https://www.linkedin.com/in/michaela-koch-a3a53428b";
  const github = "https://github.com/MichyMouse";
  const imageUrl =
    "https://utfs.io/f/e6ecd2db-c65a-4fc2-891d-7d9d872a310d_1693749749514.jpg";

  const education = [
    "🎓 Undergraduate degree in Microbiology and Biochemistry | BSc. Microbiology and Biochemistry 2020-2022 | North-West University | Graduated in 2022",
    "🎓 Honors Degree in Environmental Science | BSc. Hons Environmental Sciences 2023 | North-West University | Graduated in 2023",
  ];

  const skills = [
    "🌿 Environmental Research",
    "🌍 Conservation Strategy",
    "♻️ Sustainable Development",
    "📊 Data Analysis",
    "💡 Innovation",
    "🦋 Biodiversity Conservation",
    "🌡️ Climate Change Mitigation",
    "🖥️ ChatGPT",
  ];

  const professionalExperience = [
    {
      position: "Demonstrator",
      company: "North-West University",
      duration: "Feb 2023 - Sep 2023",
      description:
        "In 2023, I served as a Demonstrator for both the first and second semesters, supporting 2nd and 3rd-year students in their practical sessions. My responsibilities included guiding students through complex procedures, emphasizing the practicals' academic significance. I prepared essential materials, conducted advanced processes like PCR and gel electrophoresis, and helped students interpret results, identifying areas for improvement and method accuracy.",
    },
    {
      position: "Marker",
      company: "North-West University",
      duration: "Feb 2023 - June 2023",
      description:
        "I also held the position of Marker, responsible for assessing practical reports, class tests, and exams, providing thorough and objective feedback. This role demanded exceptional attention to detail, particularly when students faced challenges and required prompt assistance to continue their work. Additionally, I efficiently managed substantial quantities of lab materials, demonstrating my expertise in lab organization and resource management. Collaborating closely with fellow demonstrators enhanced my teamwork and communication abilities as we efficiently delegated tasks and supported one another, fostering a seamless and productive learning atmosphere for our students.",
    },
    // Add more professional experience entries as needed
  ];

  const awardsAndAchievements = [
    "🏆 Golden Key International Honour Society Member",
    "🎖️ Distinction in Independent Biochemistry Project",
    "🎖️ Distinction in Analytical Chemistry",
    "🎖️ Distinction in Inorganic Chemistry",
    "🎖️ Distinction in Introductory to Microbiology",
    "🎖️ Distinction in Microbial Physiology",
    "🎖️ Distinction in Conservation Ecology",
  ];

  const hobbiesAndInterests = [
    "🚵‍♀️ Hiking",
    "🏖️ Arts & Crafts",
    "📚 Reading Environmental Literature",
    "🚗 Formula One",
  ];

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Avatar src={imageUrl} alt={name} className={classes.avatar} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className={classes.profileInfo}>
              <Typography variant="h4">{name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
              <Typography paragraph>{bio}</Typography>
              <Typography paragraph>{cell}</Typography>
              <div>
                <IconButton
                  color="primary"
                  aria-label="LinkedIn"
                  className={classes.iconButton}
                  href={linkedin}
                  target="_blank"
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="GitHub"
                  className={classes.iconButton}
                  href={github}
                  target="_blank"
                >
                  <GitHub fontSize="large" />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Email"
                  className={classes.iconButton}
                  href={`mailto:${email}`}
                >
                  <Email fontSize="large" />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          {/* Past Work Experience */}
          <Grid item xs={12}>
            <Container>
              <Typography variant="h5" className={classes.sectionHeading}>
                Past Work Experience <WorkIcon fontSize="large" />
              </Typography>
              {professionalExperience.map((experience, index) => (
                <Card key={index} className={classes.card} elevation={3}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" className={classes.cardTitle}>
                      {experience.position} - {experience.company}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {experience.duration}
                    </Typography>
                    <Typography paragraph>{experience.description}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Container>
          </Grid>
          {/* Education */}
          <Grid item xs={12}>
            <Container>
              <Typography variant="h5" className={classes.sectionHeading}>
                Education <School fontSize="large" />
              </Typography>
              {education.map((education, index) => (
                <Typography paragraph>{education}</Typography>
              ))}
            </Container>
          </Grid>
          <Grid item xs={12}>
            <ProjectSection />
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography variant="h5" className={classes.sectionHeading}>
                Awards and Achievements <Star fontSize="large" />
              </Typography>
              <Typography className={classes.sectionContent}>
                {awardsAndAchievements.map((award, index) => (
                  <Chip
                    key={index}
                    label={award}
                    variant="outlined"
                    size="small"
                    className={classes.chip}
                  />
                ))}
              </Typography>
              <Typography paragraph>
                Golden Key International Honour Society Award (2022): I was
                recognized for academic excellence at North-West University,
                signifying placement within the top 15% of my class. This
                distinction underscores my dedication to academic achievement
                and commitment to continuous learning.
              </Typography>
            </Container>
          </Grid>
          {/* Skills */}
          <Grid item xs={12}>
            <Container>
              <Typography variant="h5" className={classes.sectionHeading}>
                Skills <Star fontSize="large" />
              </Typography>
              <Typography className={classes.sectionContent}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    size="small"
                    className={classes.chip}
                  />
                ))}
              </Typography>
              <ModulesInfo />
            </Container>
          </Grid>
          {/* Interests */}
          <Grid item xs={12}>
            <Container>
              <Typography variant="h5" className={classes.sectionHeading}>
                Interests <Star fontSize="large" />
              </Typography>
              <Typography className={classes.sectionContent}>
                {hobbiesAndInterests.map((interest, index) => (
                  <Chip
                    key={index}
                    label={interest}
                    variant="outlined"
                    size="small"
                    className={classes.chip}
                  />
                ))}
              </Typography>
            </Container>
          </Grid>
        </Grid>
        {/* Languages */}
        <Grid item xs={12}>
          <ReferencesSection />
        </Grid>
      </Paper>
    </div>
  );
}
