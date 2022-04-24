
$(document).ready(function(){
    let tbody = $("tbody");
    let $input = $("input");
  
    $.get( 'https://60eedf19eb4c0a0017bf468a.mockapi.io/data', function(getdata){
        
        getdata.map(dataG => make(dataG)); //looping and assign value to function argu
  
  
        $("tr").click(function(){ 
  
            $("tr").removeClass("active");  
  
            this.classList.add("active"); 
        })
        
        $input.on({
            "input": function(e){
               
  
                e.preventDefault();  //stoping default behavier
                // searching function assign value 
                let ned = getdata.filter(dataG => dataG.firstName.toLowerCase().includes(this.value) === true || 
                dataG.lastName.toLowerCase().includes(this.value) === true ||  
                dataG.email.toLowerCase().includes(this.value) === true);
               
  
                $(".data-row").css("display", "none"); 
                ned.map(dataG => make(dataG));
  
                $("tr").click(function(){
  
                    $("tr").removeClass("active");
        
                    this.classList.add("active"); 
                })
            }
        })
    })
  
  
    // creating function for table creation 
   
    function make(data) {
        let tr = $("<tr>").addClass("data-row");
        tr.click(function(){
            
            $("#info-content").css("display", "block");
            $("textarea").html(data.description);
            $("#fullname").html(data.firstName + " " + data.lastName);
            $("#street").html(data.address.streetAddress);
            $("#city").html(data.address.city);
            $("#state").html(data.address.state);
            $("#zip").html(data.address.zip);
        })
        
        let td1 = $("<td>").html(data.id).addClass("column1");
        let td2 = $("<td>").html(data.firstName).addClass("column2");
        let td3 = $("<td>").html(data.lastName).addClass("column3");
        let td4 = $("<td>").html(data.email).addClass("column4");
        let td5 = $("<td>").html(data.phone).addClass("column5");
        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
    }
  
  })
  