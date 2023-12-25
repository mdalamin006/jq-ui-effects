// JavaScript code 




// jQurey Code
$(document).ready(function () {
    // Add Class
    $( "#button" ).on( "click", function() {
        $( "#effect" ).toggleClass( "newClass", 1000 );
      });
   
     
    //   Animate demo
    var state = true;
    $( "#buttonAnim" ).on( "click", function() {
      if ( state ) {
        $( "#effectAnim" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500,

          height:170
        }, 1000 );
      } else {
        $( "#effectAnim" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          marginBottom: 10,
          width: 240,
          height: 200,
    backgroundColor: "#e7a1a1"
       
        }, 1000 );
      }
    //   state = !state;
    //     $("#effectAnim").slideToggle(1000);
});


// Toggle Effect
// run the currently selected effect
function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effectToggle" ).toggle( selectedEffect, options, 500 );
  };

  // Set effect from select menu value
  $( "#buttonToggle" ).on( "click", function() {
    runEffect();
  });
//   Effects Demo
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $( "#effectTypesDemo" ).val();
   
        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
          options = { percent: 50 };
        } else if ( selectedEffect === "transfer" ) {
          options = { to: "#buttonDemo", className: "ui-effects-transfer" };
        } else if ( selectedEffect === "size" ) {
          options = { to: { width: 200, height: 60 } };
        }
   
        // Run the effect
        $( "#effectDemo" ).effect( selectedEffect, options, 500, callback );
      };
   
      // Callback function to bring a hidden box back
      function callback() {
        setTimeout(function() {
          $( "#effectDemo" ).removeAttr( "style" ).hide().fadeIn();
        }, 1000 );
      };
   
      // Set effect from select menu value
      $( "#buttonDemo" ).on( "click", function() {
        runEffect();
        return false;
      });




 
});