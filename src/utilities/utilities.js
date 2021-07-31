export  const calculateAverage = (averages) => {
  const convertToInt = averages.map(el => Number(el))
  const average = convertToInt.reduce((a,b) => (a+b)) / convertToInt.length;
  return average
}

export const TransformApiResultsToObject = (data) => {
  const transformedData = {}
  for (let i = 0; i < data.length; i++){
    transformedData[data[i].id.toString()] = data[i];
  }
  return transformedData;
}

export const searchFilter = (firstName, lastName, tags, name, tag) => {
  let value = true
  if (name) {
    value = `${firstName} ${lastName}`.toLowerCase().includes(name.toLowerCase())
  }
  if (tag) {
    if(tags){
      if (value) {
        value = tags.join(" ").toLowerCase().includes(tag.toLowerCase()) 
      }
    } else {
      value = false
    }
  }
  return value
}

export const tourConfig = [
  {
    selector: '[data-tut="reactour__intro"]',
    content: `Hello!, I am Ebuka Beluolisa. I want to thank Mosaic for this opportunity to showcase my Front End skills. Here is a brief intro to my work...`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__toggleTheme"]',
    content: `Working at night , want to go easy on the eyes for better accessibility ? We got you.`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__searchNameTag"]',
    content: `You can search up students by name or part of their name. You could also search by tags`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__tagInput"]',
    content: `Enter a tag name and press enter to add the tag to that student.`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__tagBox"]',
    content: `Tags show up here and would break to a new line as the list gets longer`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__results"]',
    content: `Students shows up here`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__viewGrades"]',
    content: `You can click this to view all grades of a student.`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__gradeAverage"]',
    content: `This is the average grade of this student.`,
    style: {
      color: 'black',
    },
  },
  {
    selector: '[data-tut="reactour__documentation"]',
    content: `I have written a documentation explaining my thought process throughout this assessment.`,
    style: {
      color: 'black',
    },
  },
];