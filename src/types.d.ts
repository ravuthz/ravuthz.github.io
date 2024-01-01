type LabelValue = {
    label: string;
    value: string;
}

type TypeLabelValue = LabelValue & {
    type?: string;
}

type PersonInfo = {
    firstName: string;
    lastName: string;
    sex: 'Male' | 'Female';
    email: string;
    phone: string[];
    address: string[];
    position: string;
    googleMap: string;
    nationality: string;
    dateOfBirth: string;
    placeOfBirth: string;
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed' | 'Other';
};

type WorkExperience = {
    date: [string, string];
    company: string;
    position: string;
    description: string;
    children: WorkExperience[];
};
  