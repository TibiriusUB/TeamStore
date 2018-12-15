
    // Initialize Firebase
    // This is the code we copied and pasted from our app page
    var config = {
      apiKey: "AIzaSyClp6McobruFEhwX8fwit2nqM_3DcbeBxQ",
      authDomain: "jpddec122018.firebaseapp.com",
      databaseURL: "https://jpddec122018.firebaseio.com",
      projectId: "jpddec122018",
      storageBucket: "jpddec122018.appspot.com",
      messagingSenderId: "405351101193"
    };
    
    firebase.initializeApp(config);

    database = firebase.database();
 
    // VARIABLES
    var employee = {
      employeeName:"",
      role:"",
      startDate:"",
      monthlyRate:0
    }


    $("#addButton").on("click", function(){
      employee.employeeName = $("#EmployeeName").val().trim();
      employee.role = $("#Role").val().trim();
      employee.startDate = $("#StartDate").val().trim();
      employee.monthlyRate = $("#MonthlyRate").val().trim();   
      
      database.ref("data/employee").push(employee);
    })

    function createEmployeeRecord(){
      
    }


    // --------------------------------------------------------------------------------
/*
    // Get a reference to the database service
    var database = firebase.database();

    // Setting initial value of our click counter variable to 0
    var clickCounter = 0;

    // FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------

    // On Click of Button
    $("#click-button").on("click", function() {

      // Add to clickCounter
      clickCounter++;

      //  Store Click Data to Firebase in a JSON property called clickCount
      // Note how we are using the Firebase .set() method
      database.ref().set({
        clickCount: clickCounter
      });
    });

    // MAIN PROCESS + INITIAL CODE
    // --------------------------------------------------------------------------------

    // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref().on("value", function(snapshot) {

      // Then we console.log the value of snapshot
      console.log(snapshot.val());

      // Update the clickCounter variable with data from the database.
      clickCounter = snapshot.val().clickCount;

      // Then we change the html associated with the number.
      $("#click-value").text(snapshot.val().clickCount);

      // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
      // Again we could have named errorObject anything we wanted.
    }, function(errorObject) {

      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
    });*/
