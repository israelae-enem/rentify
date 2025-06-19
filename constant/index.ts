export const GenderOptions = ["Male", "Female", "Other"];

export const TenantFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male",
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  identificationType: "Emirate ID",
  identificationNumber: "",
  identificationDocument: [],
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "National Identity Card",
  "Passport",
  "Resident card", 
  "Student ID Card",
 
];

export const Agent= [
  {
    image: "/assets/images/agent.jpg",
    name: "John Green",
  },
  {
    image: "/assets/images/agent2..jpg",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/agent3.jpg",
    name: "David Livingston",
  },
  
];

export const StatusIcon = {
  scheduled: "/assets/icons/checked.jpg",
  pending: "/assets/icons/loading.jpg",
  cancelled: "/assets/icons/cancel.jpg",
};