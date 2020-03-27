export interface ResumeCard {
	id: string;
	name: string;
	title: string;
	creationDate: Date;
	archived: boolean;
}

export interface ResumeEntity {
	id: string;
	archived: boolean;
	creationDate: Date;
	data: Resume;
}

export interface Resume {
	general: GeneralData;
	location: LocationData;
	photo: string;
	resume: ResumeForm;
}

export interface GeneralData {
	phone: string;
	email: string;
	website: string;
}

export interface LocationData {
	title: string;
	street: string;
	state: string;
	postalCode: string;
	country: string;
}

export interface ResumeForm {
	skills: Skill[];
	experience: Experience[];
	about: About;
	softSkills: SoftSkills;
}

export interface About {
	firstName: string;
	lastName: string;
	fullInfo: string;
	englishProficiencyLevel: string;
	education: string;
	university: string;
}

export interface Experience {
	projectName: string;
	description: string;
	teamSize: number;
	involvementDuration: number;
	role: string;
	customer: string;
	responsibilities: string;
}

export interface Skill {
	label: string;
	value: string;
}

export interface SoftSkills {
	communication: number;
	positiveAttitude: number;
	teamwork: number;
	responsibility: number;
	handingPressure: number;
	flexibility: number;
	problemSolving: number;
	criticalThinking: number;
	workEthics: number;
	leading: number;
}