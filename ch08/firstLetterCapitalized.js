const capitalizeWord = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

const letterCapitalize = letter => letter.split(' ').map(capitalizeWord).join(' ')

console.log(letterCapitalize('thIs will be capiTalized for each word'))