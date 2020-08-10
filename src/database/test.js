const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Matheus Gomes",
    avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHq05e0xUtMwQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=His_5CObbu9o-moqNIQro25hU41O-RAKIyzX1IHof8A",
    whatsapp: "31996639941",
    bio: "Mestre das tecnologias e CTO de uma das maiores empresas de tecnologia do mundo a devMeMo. Comecei a dar aulas online por Hobbie para ajudar vocês a alavancarem sua carreira na programação e fazer elas chegarem a outro nivel.", 
  }

  classValue = {
    subject: "Full Stack", 
    cost: "500,00", 

  }

  classScheduleValues = [
    {
      weekday: [0], 
      time_from: [720], 
      time_to: [1220]
    },
    {
      weekday: [0], 
      time_from: [720], 
      time_to: [1220]
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues})

  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `)
  // console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `) 

  // console.log(selectClassesSchedules)
})