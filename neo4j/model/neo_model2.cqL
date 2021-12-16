CREATE 

// Subject nodes
(python:Subject {name:'Python', description: 'Python elective'}),
(java:Subject {name:'Java', description: 'Java elective'}),
(advanced_python:Subject {name:'Advanced Python', description: 'Advanced Python  elective'}),
(design_patterns:Subject {name:'Design Patterns', description: 'Design Patterns elective'}),
(database:Subject {name:'Database', description: 'Database elective'}),
(ruby:Subject {name:'Ruby', description: 'Ruby elective'}),
(c_sharp:Subject {name:'C#', description: 'C# elective'}),
(dls:Subject {name:'DLS', description: 'DLS elective'}),
(android:Subject {name:'Android', description: 'Android elective'}),
(cplus:Subject {name:'C++', description: 'C++ elective'}),
(javascript:Subject {name:'Javascript', description: 'Javascript elective'}),
(testing:Subject {name:'Testing', description: 'Testing elective'}),


// student nodes
(john:Student {name:'John', email: 'john@kea.dk'})-[:ATTENDS_IN]->(python), (john)-[:ATTENDS_IN]->(database),
(gabriel:Student {name:'Gabriel', email: 'gabriel@kea.dk'})-[:ATTENDS_IN]->(database), (gabriel)-[:ATTENDS_IN]->(testing),
(henry:Student {name:'Henry', email: 'henry@kea.dk'})-[:ATTENDS_IN]->(), (henry)-[:ATTENDS_IN]->(c_sharp),
(ali:Student {name:'Ali', email: 'ali@kea.dk'})-[:ATTENDS_IN]->(ruby), (ali)-[:ATTENDS_IN]->(javascript),
(archana:Student {name:'Archana', email: 'archana@kea.dk'})-[:ATTENDS_IN]->(database), (archana)-[:ATTENDS_IN]->(dls),
(stefanos:Student {name:'Stefanos', email: 'stefanos@kea.dk'})-[:ATTENDS_IN]->(advanced_python), (stefanos)-[:ATTENDS_IN]->(c_sharp),
(muhammad:Student {name:'Muhammad', email: 'muhammad@kea.dk'})-[:ATTENDS_IN]->(c_sharp), (muhammad)-[:ATTENDS_IN]->(cplus),
(rafael:Student {name:'Rafael', email: 'rafael@kea.dk'})-[:ATTENDS_IN]->(java), (rafael)-[:ATTENDS_IN]->(android),
(ismail:Student {name:'Ismail', email: 'ismail@kea.dk'})-[:ATTENDS_IN]->(design_patterns), (ismail)-[:ATTENDS_IN]->(dls),


// department node
(kea:Department {name: 'KEA Department'}),

// Semester nodes
(sd22sum: Semester {name: 'SD21 Summer'}),
(sd22win: Semester {name: 'SD21 Winter'}),

// teacher nodes and subject relations
(tomas:Teacher {name: 'Tomas', email:'tomas@kea.dk'})-[:TEACHES]->(database), (tomas)-[:TEACHES]->(python), (tomas)-[:TEACHES]->(java),
(jarl:Teacher {name: 'Jarl', email:'jarl@kea.dk'})-[:TEACHES]->(advanced_python), (jarl)-[:TEACHES]->(design_patterns), (jarl)-[:TEACHES]->(c_sharp),
(asger:Teacher {name: 'Asger', email:'asbc@kea.dk'})-[:TEACHES]->(dls), (asger)-[:TEACHES]->(ruby), (asger)-[:TEACHES]->(android),
(andrea:Teacher {name: 'Andrea', email:'ande@kea.dk'})-[:TEACHES]->(cplus), (andrea)-[:TEACHES]->(javascript), (andrea)-[:TEACHES]->(testing),


// teacher nodes and department nodes
(tomas)-[:BELONGS_TO]->(kea),
(jarl)-[:BELONGS_TO]->(kea),
(asger)-[:BELONGS_TO]->(kea),
(andrea)-[:BELONGS_TO]->(kea)

//  Maybe unnecessary
// (tomas)-[:COLLEAGUE_TO]->(jarl),
// (tomas)-[:COLLEAGUE_TO]->(asger),
// (tomas)-[:COLLEAGUE_TO]->(andrea),
// (jarl)-[:COLLEAGUE_TO]->(tomas),
// (jarl)-[:COLLEAGUE_TO]->(asger),
// (jarl)-[:COLLEAGUE_TO]->(andrea),
// (asger)-[:COLLEAGUE_TO]->(tomas),
// (asger)-[:COLLEAGUE_TO]->(jarl),
// (asger)-[:COLLEAGUE_TO]->(andrea),
// (andrea)-[:COLLEAGUE_TO]->(tomas),
// (andrea)-[:COLLEAGUE_TO]->(jarl),
// (andrea)-[:COLLEAGUE_TO]->(asger)
