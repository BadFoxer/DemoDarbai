<div class="main-container">
    <div class="form-container">
    <form  method="post">
  <label class="myLabel" for="my_month">Mėnesiai</label>
   <select class="mySelect" name="my_month" id="my_month">
    <option value="Sausis">Sausis</option>
    <option value="Vasaris">Vasaris</option>
    <option value="Kovas">Kovas</option>
    <option value="Balandis">Balandis</option>
    <option value="Gegužė">Gegužė</option>
    <option value="Birželis">Birželis</option>
    <option value="Liepa">Liepa</option>
    <option value="Rugpjūtis">Rugpjūtis</option>
    <option value="Rugsėjis">Rugsėjis</option>
    <option value="Spalis">Spalis</option>
    <option value="Lapkritis">Lapkritis</option>
    <option value="Gruodis">Gruodis</option>
  </select>
       <label class="myLabel" for="my_income">Pajamos</label>
        <input class="my_i" type="number" name="my_income" id="my_income" min="0" placeholder="0" step="any">
        <label class="myLabel" for="my_costs">išlaidos</label>
        <input class="my_i" type="number" name="my_costs" id="my_costs" min="0" placeholder="0" step="any">
        <input  class="my_s" type="submit" name="send" value="Įrašyti">
      </form> 
    
    </div>




<?php
 global $wpdb;

 if(isset($_POST ['send'])){
    $table_name = $wpdb->prefix . "balansas";
    $getM = $_POST['my_month'];
    $getId = $wpdb->get_var("SELECT id FROM $table_name where my_month = '$getM'");
  $data = array(
     'my_month' =>  $_POST['my_month'],
     'my_income' => $_POST['my_income'],
     'my_costs' =>  $_POST['my_costs'],
  );
  $conditions = array(
    'id' => $getId,
  );

 if($getId){
  $updateExisting = $wpdb->update($table_name,$data,$conditions);
  echo "<script>alert('Atnaujinta')</script>";
  }
  else{
  $insertNew = $wpdb->insert($table_name,$data,$format=NULL);
  echo "<script>alert('Įrašyta')</script>";
  }

}
  
 ?>