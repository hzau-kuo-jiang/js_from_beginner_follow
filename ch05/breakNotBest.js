nums1 = [23, 22, 34, 42, 34];

// break -> bad practice
while (true) {
	if (nums1[0] !== 42 && nums1.length > 0) {
		console.log(nums1.shift());
	} else {
		console.log('Found 42');
		break;
	}
}

nums2 = [23, 22, 34, 42, 34];

// flag -> better practice
let notFound = true;
while (notFound && nums2.length > 0) {
	if (nums2[0] !== 42) {
		console.log(nums2.shift());
	} else {
		console.log('Found 42');
		notFound = false;
	}
}