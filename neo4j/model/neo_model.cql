CREATE

// subjects nodes
(database:Subject {name:'Database'}),
(dls:Subject {name:'DLS'}),
(testing:Subject {name:'Testing'}),
(web_development:Subject {name:'Web Development'}),
(django:Subject {name:'Python Django'}),
(design_patterns:Subject {name:'Design Patterns'}),

// student nodes
(john:Student {name:'John', email: 'john@kea.dk'})-[:ATTENDS_IN]->(django), (john)-[:ATTENDS_IN]->(web_development),(john)-[:ATTENDS_IN]->(design_patterns),
(gabriel:Student {name:'Gabriel', email: 'gabriel@kea.dk'})-[:ATTENDS_IN]->(django),(gabriel)-[:ATTENDS_IN]->(web_development),(gabriel)-[:ATTENDS_IN]->(design_patterns),
(henry:Student {name:'Henry', email: 'henry@kea.dk'})-[:ATTENDS_IN]->(django), (henry)-[:ATTENDS_IN]->(web_development),(henry)-[:ATTENDS_IN]->(design_patterns),
(ali:Student {name:'Ali', email: 'ali@kea.dk'})-[:ATTENDS_IN]->(django),(ali)-[:ATTENDS_IN]->(web_development), (ali)-[:ATTENDS_IN]->(design_patterns),

(archana:Student {name:'Archana', email: 'archana@kea.dk'})-[:ATTENDS_IN]->(database),(archana)-[:ATTENDS_IN]->(dls),(archana)-[:ATTENDS_IN]->(testing),
(stefanos:Student {name:'Stefanos', email: 'stefanos@kea.dk'})-[:ATTENDS_IN]->(database), (stefanos)-[:ATTENDS_IN]->(dls),(stefanos)-[:ATTENDS_IN]->(testing),
(tariq:Student {name:'Tariq', email: 'tariq@kea.dk'})-[:ATTENDS_IN]->(database), (tariq)-[:ATTENDS_IN]->(dls),(tariq)-[:ATTENDS_IN]->(testing),
(rafael:Student {name:'Rafael', email: 'rafael@kea.dk'})-[:ATTENDS_IN]->(database), (rafael)-[:ATTENDS_IN]->(dls),(rafael)-[:ATTENDS_IN]->(testing),

// Semester nodes
(semester1: Semester {name: 'Semester1'})-[:HAS]->(database), (semester1)-[:HAS]->(dls), (semester1)-[:HAS]->(testing),
(semester2: Semester {name: 'Semester2'})-[:HAS]->(web_development), (semester2)-[:HAS]->(design_patterns), (semester2)-[:HAS]->(django),

// teacher nodes and subject relations
(tomas:Teacher {name: 'Tomas Pesek', email:'tomas@kea.dk'})-[:TEACHES]->(database),
(jarl:Teacher {name: 'Jarl Tuxen', email:'jarl@kea.dk'})-[:TEACHES]->(testing),
(asger:Teacher {name: 'Asger B Clausen', email:'asbc@kea.dk'})-[:TEACHES]->(testing),
(andrea:Teacher {name: 'Andrea Andreasen', email:'ande@kea.dk'})-[:TEACHES]->(dls), (andrea)-[:TEACHES]->(design_patterns),
(peter:Teacher {name: 'Peter Petersen', email:'pet@kea.dk'})-[:TEACHES]->(django),
(chris:Teacher {name: 'Chris Christensen', email:'chri@kea.dk'})-[:TEACHES]->(web_development)