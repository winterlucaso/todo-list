export const createTask = (title, description, date, priority, project) => {
	console.log("Creating Task...");
    console.log({title, description, date, priority, project});

	return { 
        title,
        description, 
        date,
        priority,
        project
    };
};