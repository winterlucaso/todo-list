export const createTask = (title, description, date, priority) => {
	console.log("Creating Task...");
    console.log({title, description, date, priority});

	return { 
        title,
        description, 
        date,
        priority
    };
};