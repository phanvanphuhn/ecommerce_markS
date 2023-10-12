const generateHospital = () => {
  const randomName = {
    prefix: [
      'Changi',
      'Sengkang',
      'Singapore',
      'Khoo Teck Puat',
      'National',
      'Alexandra',
      'Mount Alvernia',
      'Mount Elizabeth',
      'Gleneagles',
    ],
    suffix: ['Hospital'],
  };
  return (
    generateName(randomName.prefix) + ' ' + generateName(randomName.suffix)
  );
};
const generateSpecial = () => {
  const randomName = [
    'Orthopedics',
    'Surgery',
    'Urology',
    'Pediatrics',
    'Cardiology',
    'Neurosurgery',
  ];
  return generateName(randomName);
};
const generateDivision = () => {
  const randomName = [
    'Endoscopy',
    'Neuromodulation',
    'Interventional Cardiology',
    'Peripheral Intervention',
    'Rhythm Management',
    'Urology and Pelvic Health',
  ];
  return generateName(randomName);
};
const generateTopics = () => {
  const randomName = ['Lorem Ipsum'];
  return generateName(randomName);
};
const generateName = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default {
  data: [
    {
      name: 'Alistair Chong',
      description: 'Associate Professor Senior Consultant',
      avatar: '',
      hospital: generateHospital(),
      topic: generateTopics(),
      special: generateSpecial(),
      division: generateDivision(),
      address: 'Raffles Hospital, National Heart',
      mail: 'alistair.chong@singhealth.com.sg',
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      phone: Math.floor(1000000 + Math.random() * 9000000),
    },
    {
      name: 'Bramble Tail',
      description: 'Associate Professor Senior Consultant',
      avatar: '',
      special: generateSpecial(),
      topic: generateTopics(),
      division: generateDivision(),
      hospital: generateHospital(),
      address: 'Raffles Hospital, National Heart',
      mail: 'alistair.chong@singhealth.com.sg',
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      phone: Math.floor(1000000 + Math.random() * 9000000),
    },
    {
      name: 'Lion Chong',
      description: 'Associate Professor Senior Consultant',
      avatar: '',
      special: generateSpecial(),
      division: generateDivision(),
      topic: generateTopics(),
      hospital: generateHospital(),
      address: 'Raffles Hospital, National Heart',
      mail: 'alistair.chong@singhealth.com.sg',
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      phone: Math.floor(1000000 + Math.random() * 9000000),
    },
    {
      name: 'Owl Paw',
      description: 'Associate Professor Senior Consultant',
      avatar: '',
      special: generateSpecial(),
      topic: generateTopics(),
      division: generateDivision(),
      hospital: generateHospital(),
      address: 'Raffles Hospital, National Heart',
      mail: 'alistair.chong@singhealth.com.sg',
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      phone: Math.floor(1000000 + Math.random() * 9000000),
    },
    {
      name: 'Alistair Throat',
      description: 'Associate Professor Senior Consultant',
      avatar: '',
      special: generateSpecial(),
      topic: generateTopics(),
      division: generateDivision(),
      hospital: generateHospital(),
      address: 'Raffles Hospital, National Heart',
      mail: 'alistair.chong@singhealth.com.sg',
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      phone: Math.floor(1000000 + Math.random() * 9000000),
    },
    {
      name: 'Alistair Chong',
      description: 'Associate Professor Senior Consultant',
      avatar: '',
      special: generateSpecial(),
      topic: generateTopics(),
      division: generateDivision(),
      hospital: generateHospital(),
      address: 'Raffles Hospital, National Heart',
      mail: 'alistair.chong@singhealth.com.sg',
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      phone: Math.floor(1000000 + Math.random() * 9000000),
    },
  ],
  hospital: [
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateHospital(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
  ],
  special: [
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateSpecial(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
  ],
  topics: [
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateTopics(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
  ],
  divisions: [
    {
      name: generateDivision(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateDivision(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateDivision(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateDivision(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateDivision(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
    {
      name: generateDivision(),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    },
  ],
};
