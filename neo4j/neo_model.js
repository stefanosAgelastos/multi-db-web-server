CREATE 

// Subject nodes
(python:Subject {name:'Python'}),
(java:Subject {name:'Java'}),
(advanced_python:Subject {name:'Advanced Python'}),
(design_patterns:Subject {name:'Design Patterns'}),
(database:Subject {name:'Database'}),
(ruby:Subject {name:'Ruby'}),
(c_sharp:Subject {name:'C##'}),
(swift:Subject {name:'Swift'}),
(android:Subject {name:'Android'}),
(cplus:Subject {name:'C++'}),
(javascript:Subject {name:'Javascript'}),
(testing:Subject {name:'Testing'}),

// student nodes
(john:Student {name:'John', season: 'Summer'}),
(gabriel:Student {name:'Gabriel', season: 'Summer'}),
(henry:Student {name:'Henry', season: 'Summer'}),
(ali:Student {name:'Ali', season: 'Summer'}),
(archana:Student {name:'Archana', season: 'Summer'}),
(stefanos:Student {name:'Stefanos', season: 'Summer'}),
(muhammad:Student {name:'Muhammad', season: 'Summer'}),
(rafael:Student {name:'Rafael', season: 'Summer'}),
(ismail:Student {name:'Ismail', season: 'Summer'}),
(rikke:Student {name:'Rikke', season: 'Summer'}),
(catlyn:Student {name:'Catlyn', season: 'Summer'}),
(regitze:Student {name:'Regitze', season: 'Spring'}),
(daria:Student {name:'Daria', season: 'Spring'}),
(dunya:Student {name:'Dunya', season: 'Spring'}),
(sanna:Student {name:'Sanna', season: 'Spring'}),
(sama:Student {name:'Sama', season: 'Spring'}),
(daoud:Student {name:'Daoud', season: 'Spring'}),
(fardin:Student {name:'Fardin', season: 'Spring'}),
(farid:Student {name:'Farid', season: 'Spring'}),
(faruq:Student {name:'Faruq', season: 'Spring'}),

// department node
(kea:Department {name: 'KEA Department'}),

// Semester nodes
(sd22spr: Semester {name: 'SD22 Spring'}),
(sd22sum: Semester {name: 'SD22 Summer'}),

// teacher nodes
(tomas:Teacher {name: 'Tomas',email:'tomas@kea.dk'}),
(jarl:Teacher {name: 'Jarl',email:'jarl@kea.dk'}),
(asger:Teacher {name: 'Asger',email:'asbc@kea.dk'}),
(andrea:Teacher {name: 'Andrea',email:'ande@kea.dk'}),

// subject node and semester node relations
(database)-[:TAUGHT_IN]->(sd22spr),
(python)-[:TAUGHT_IN]->(sd22spr),
(java)-[:TAUGHT_IN]->(sd22spr),
(advanced_python)-[:TAUGHT_IN]->(sd22spr),
(design_patterns)-[:TAUGHT_IN]->(sd22spr),
(ruby)-[:TAUGHT_IN]->(sd22spr),
(c_sharp)-[:TAUGHT_IN]->(sd22sum),
(swift)-[:TAUGHT_IN]->(sd22sum),
(android)-[:TAUGHT_IN]->(sd22sum),
(cplus)-[:TAUGHT_IN]->(sd22sum),
(javascript)-[:TAUGHT_IN]->(sd22sum),
(testing)-[:TAUGHT_IN]->(sd22sum),

// teacher nodes and subjects nodes relations
(tomas)-[:TEACHES]->(database),
(tomas)-[:TEACHES]->(python),
(tomas)-[:TEACHES]->(java),
(jarl)-[:TEACHES]->(advanced_python),
(jarl)-[:TEACHES]->(design_patterns),
(jarl)-[:TEACHES]->(c_sharp),
(asger)-[:TEACHES]->(swift),
(asger)-[:TEACHES]->(ruby),
(asger)-[:TEACHES]->(android),
(andrea)-[:TEACHES]->(cplus),
(andrea)-[:TEACHES]->(javascript),
(andrea)-[:TEACHES]->(testing),

// teacher nodes and department nodes
(tomas)-[:BELONGS_TO]->(kea),
(jarl)-[:BELONGS_TO]->(kea),
(asger)-[:BELONGS_TO]->(kea),
(andrea)-[:BELONGS_TO]->(kea)

// (john)-[:ATTENDS]->(),
// (gabriel)-[:ATTENDS]->(),
// (henry)-[:ATTENDS]->(),
// (ali)-[:ATTENDS]->(),
// (archana)-[:ATTENDS]->(),
// (stefanos)-[:ATTENDS]->(),
// (muhammad)-[:ATTENDS]->(),
// (rafael)-[:ATTENDS]->(),
// (ismail)-[:ATTENDS]->(),
// (rikke)-[:ATTENDS]->(),
// (catlyn)-[:ATTENDS]->(),
// (regitze)-[:ATTENDS]->(),
// (daria)-[:ATTENDS]->(),
// (dunya)-[:ATTENDS]->(),
// (sanna)-[:ATTENDS]->(),
// (sama)-[:ATTENDS]->(),
// (daoud)-[:ATTENDS]->(),
// (fardin)-[:ATTENDS]->(),
// (farid)-[:ATTENDS]->(),
// (faruq)-[:ATTENDS]->(),


// MATCH (a:Student) 
// WHERE a.season = 'Summer'
// CREATE (a)-[:GOES_TO]->(sd22sum)

// MATCH (b:Student)
// WHERE b.season = 'Spring'
// CREATE (b)-[:GOES_TO]->(sd22spr)