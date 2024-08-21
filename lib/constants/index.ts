export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/doctors/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/doctors/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/doctors/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/doctors/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/doctors/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/doctors/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/doctors/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/doctors/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/doctors/dr-sharma.png",
    name: "Hardik Sharma",
  },
];
