ar Calculator = function (el) {
    var input, buttons, input1, input2, operator;
    function init(el) { 
        if (el) {   
           el = $( el );
        } else 
            el = $('#calculator');
            if ( el.length < 1 ) {
               return null;
            }
        }
        input = el.find( '.calculator-input' );
        buttons = el.find( 'a.btn' );
        events();
    }
      function events() {
        
        input.on('keydown', function (e) {
          
           e.preventDefault();   
        });
        
        buttons.on('click', function(e) {
           var target = $( this );
           var val = target.text();
            
           delegate( target, val );
           e.preventDefault();
        });
    }
    
    function delegate ( target, val ) {
        if ( target.hasClass( 'operator' ) ) {
            
        
            if ( !input1 ) {
                input1 = input.val();
            }
           
            if ( operator ) {
                
                
                input2 = input.val().split(operator)[1];
                calculate();
            }
            operator = val;
            updateDisplay(val);
        } else if (target.hasClass( 'calculate' ) ) {
            if ( input1 && input2 ) {
                
                calculate();
 
            } else if (input1 && operator) {

                input2 = input.val().split(operator)[1];
                calculate();
            }
        } else {

            updateDisplay(val);
        } 
    }
    
    function clearDisplay () {
        
        // clear the display 
        input.val('');   
    }
      function updateDisplay (newValue) {
      input.val( input.val() +  newValue );
    }
    function calculate () {
        var val = eval( input1 + operator + input2 );
        input1 = val;
        clearDisplay();
        updateDisplay(val);
        
        input2 = null;
        operator = null;
    }
    
    init(el);
};

var calculator = new Calculator('.calculator');



