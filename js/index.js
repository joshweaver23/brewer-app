jQuery(document).ready(function($) {
  
  //Calculate ABV Function
 
  var abvCalcPlato = function() {
    var orig_plato = parseFloat($('#orig-plato').val(), 10);
    var final_plato = parseFloat($('#final-plato').val(), 10);
    var og = orig_plato/(258.6-(orig_plato/258.2*227.1))+1;
    var fg = final_plato/(258.6-(final_plato/258.2*227.1))+1;
    var ABV = (og - fg)*131;
    $('#abv').html("<span>" + ABV.toFixed(2) + " %" + "</span>");
  };
    
  var abvCalcSG = function() {
    var og = parseFloat($('#orig-plato').val(), 10);
    var fg = parseFloat($('#final-plato').val(), 10);
    var ABV = (og - fg)*131;
    $('#abv').html("<span>" + ABV.toFixed(2) + " %" + "</span>");
  };
  
  //Check Gravity Measure Type
  $('#calc-abv').click(abvCalcPlato);
    
  $("input[name='sugar']").click(function() {
    if ($("input[value='SG']").prop("checked")) {
      $('#start-plato-name').html('Starting Gravity:');
      $('#final-plato-name').html('Final Gravity:');
      $('#calc-abv').click(abvCalcSG);
    } else {
      $('#start-plato-name').html('Starting Plato (&deg;P):');
      $('#final-plato-name').html('Final Plato (&deg;P):');
      $('#calc-abv').click(abvCalcPlato);
    }
    $('#orig-plato').val('');
    $('#final-plato').val('');
  });
  
  //Check Gravity Type
  var pitchFactor = 1;
  
  $("input[name='Gravity']").click(function() {
    if ($("input[value='High']").prop("checked")) {
      pitchFactor = 1.4;
      $("#pitch-rate").html('1.4 million cells ');
    } else {
      pitchFactor = 1;
      $("#pitch-rate").html('1.0 million cells ');
    }
  });
    
  //Calculate Yeast Pitch Function
  
  $('#calc-yeast').click(function() {
    var wort_vol = parseInt($('#volume').val(), 10);
    var start_plato = parseInt($('#plato').val(), 10);
    var cell_count = parseInt($('#cell-count').val(), 10);
    var viability = parseInt($('#viability').val(), 10)/100;
    var yeast = (wort_vol*31.5)*(start_plato)*(pitchFactor)/(cell_count*viability);
    $('#yeast-quantity').html("<span>" + yeast.toFixed(1) + " Gal" + "</span>");
  })
    
  
});