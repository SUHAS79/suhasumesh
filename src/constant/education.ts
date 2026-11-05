/**
 * German grade equivalents.
 *
 * The Bachelor's grade of 2.1 is the official conversion from the German
 * admission process — not calculated here.
 *
 * Class 10 and Class 12 are converted with the modified Bavarian formula,
 * the method German universities use:
 *
 *   N = 1 + 3 x (Nmax - Nd) / (Nmax - Nmin)
 *
 * with Nmax = 100%, Nmin = 35% (the pass mark for both Karnataka boards):
 *   Class 10: 1 + 3 x (100 - 96.16) / 65 = 1.2
 *   Class 12: 1 + 3 x (100 - 83.67) / 65 = 1.8
 */

export type EducationEntry = {
  degree: string;
  field?: string;
  institution: string;
  board: string;
  location: string;
  year: string;
  grade: string;
  germanGrade?: string;
  /** true = official conversion, false = calculated here and marked as indicative */
  germanGradeOfficial?: boolean;
  inProgress?: boolean;
  certificate?: string;
};

export const educationData: EducationEntry[] = [
  {
    degree: "M.Sc. Management and Information Technology",
    institution: "Westsächsische Hochschule Zwickau",
    board: "University of Applied Sciences · Double-degree programme",
    location: "Zwickau, Germany",
    year: "2026 – 2028",
    grade: "In progress — Winter Semester 2026/27",
    inProgress: true,
  },
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "The National Institute of Engineering, Mysuru",
    board: "Visvesvaraya Technological University (VTU), Belagavi",
    location: "Mysuru, India",
    year: "2022 – 2026",
    grade: "First Class with Distinction",
    germanGrade: "2.1",
    germanGradeOfficial: true,
    certificate: "/certificates/Suhas_Umesh_BE_Degree_VTU.pdf",
  },
  {
    degree: "Pre-University (Class 12)",
    field: "Physics · Chemistry · Mathematics · Biology",
    institution: "Sadvidya Composite PU College, Mysuru",
    board: "Department of Pre-University Education, Karnataka",
    location: "Mysuru, India",
    year: "2022",
    grade: "83.67% (502/600) · First Class",
    germanGrade: "1.8",
    certificate: "/certificates/Suhas_Umesh_PUC_Class12.pdf",
  },
  {
    degree: "Secondary School (Class 10, SSLC)",
    institution: "Sadvidya High School, Mysuru",
    board: "Karnataka Secondary Education Examination Board",
    location: "Mysuru, India",
    year: "2020",
    grade: "96.16% (601/625) · Grade A+",
    germanGrade: "1.2",
    certificate: "/certificates/Suhas_Umesh_SSLC_Class10.pdf",
  },
];

export const credentialsData = [
  {
    title: "NCC Navy 'A' Certificate",
    issuer: "National Cadet Corps · Ministry of Defence, Government of India",
    detail: "Grade A · Cadet of the Year",
    year: "2019",
    certificate: "/certificates/Suhas_Umesh_NCC_Navy_A.pdf",
  },
];
