const countDown = (startDate, endDate) => {
	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let milliseconds = 0;
	let timeDifference = endDate.getTime() - startDate.getTime();
	if (timeDifference > 0) {
		days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		timeDifference -= days * (1000 * 60 * 60 * 24);
		hours = Math.floor(timeDifference / (1000 * 60 * 60));
		timeDifference -= hours * (1000 * 60 * 60);
		minutes = Math.floor(timeDifference / (1000 * 60));
		timeDifference -= minutes * (1000 * 60);
		seconds = Math.floor(timeDifference / (1000));
		timeDifference -= seconds * (1000);
		milliseconds = timeDifference;
	}
	return {
		days,
		hours,
		minutes,
		seconds,
		milliseconds
	};
}

const update = () => {
	let startDate = new Date();
	let endDate = new Date(2024, 2, 10, 12, 30, 0, 0);
	let time = countDown(startDate, endDate);
	console.log(`${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds, ${time.milliseconds} milliseconds`)
	
	setTimeout(update, 1000);
}

update();