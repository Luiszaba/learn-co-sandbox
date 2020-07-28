function firstNamePrinter(collection) {
  for (const user of collection) {
    console.log(user.firstNAme);
  }
}

firstNamePrinter(users);

// if we want to get the users who only have a favorite color of blue we can do this

function bluefilter(collection) {
  for (cont user of collection) {
    if (user.favoriteColor === 'Blue') {
      console.log(user.firstName);
    }
  }
}

// if we wanted to do the same for the color red we can do that, but it would be wasteful and time consuming.  So we can just pass in the color that we want to filter

function colorFilter (collection, color) {
  for (const user of collection) {
    if (user.favoriteColor === color) {
      console.log(user.firstName);
    }
  }
}

colorFilter(users, 'Red');
//













