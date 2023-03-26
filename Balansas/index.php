<?php get_header() ?>
<?php wp_body_open();?>

<div class="center">
<div class="grid-container">
  <div class="navbar">Nav juosta*</div>
  <div class="main">

<table>
    <thead>
  <tr>
    <th>Mėnesiai</th>
    <th>Pajamos</th>
    <th>Išlaidos</th>
    <th>Balansas</th>
  </tr>
</thead>
<tbody id="myTableData">

</tbody>
  
</table>

</div>

  <div id="min_i" class="side1"><p class="zp_max_i">Metų suvestinė: <span class="w_break">mažiausiai uždirbta</span></p></div>  
  <div id="max_i" class="side2"><p class="zp_max_i">Metų suvestinė: <span class="w_break">daugiausiai uždirbta</span></p></div>
  <div id="min_c" class="side3"><p class="zp_max_i">Metų suvestinė: <span class="w_break">mažiausiai išlaidų</span></p></div> 
  <div id="max_c" class="side4"><p class="zp_max_i">Metų suvestinė: <span class="w_break">daugiausiai išlaidų</span></p></div> 
  <div class="foot1"><div class="zp_year_i"><p>Visų metų pajamos<span id="year_i" class="w_break"></span></p></div></div> 
  <div class="foot2"><div class="zp_year_i"><p>Visų metų išlaidos<span id="year_c" class="w_break"></span></p></div></div> 
  <div class="foot3"><div class="zp_year_i"><p>Visų metų balansas<span id="year_b" class="w_break"></span></p></div></div> 

</div>
</div>

<?php get_footer() ?>
