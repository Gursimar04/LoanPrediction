function startServer(){
    // $.get("https://loan-prediction-gursimar.herokuapp.com/", function (data) {
    // });
}

function onBtnClick(){
    $('#approval').text("...")
    var url = "https://loan-prediction-gursimar.herokuapp.com/application_predict"
    var credit_history = $('#credit-history').find(":selected").text();
    var dependant = $('#dependants').val()
    var Education = $('#Education').find(":selected").text();
    var term_mon = $('#term').val()
    var Married = $('#Married').find(":selected").text();
    var Property = $('#Property').find(":selected").text();
    var gen = $('#gender').find(":selected").text();
    var emp = $('#employ').find(":selected").text();
    var inc = $('#income').val()
    var coapp = $('#coapplicantincome').val()
    var amo = $('#amount').val()

    $('#approval').css({ color:"#fc3859"});

    if (credit_history===""){
        $('#approval').text("Invalid Selection for credit history")
        return
    }

    if (dependant === ""|| parseInt(dependant)<0) {
        $('#approval').text("Invalid Value for dependent")
        return
    }

    if (Education === "") {
        $('#approval').text("Invalid Selection for Education")
        return
    }

    if ( term_mon === "" || parseInt(term_mon) < 10 || parseInt(term_mon) > 500 ) {
        $('#approval').text("Invalid Value for term")
        return
    }

    if (Married === "") {
        $('#approval').text("Invalid Selection for marital status")
        return
    }

    if (Property === "") {
        $('#approval').text("Invalid Selection for Property Area")
        return
    }

    if (gen === "") {
        $('#approval').text("Invalid Selection for Gender")
        return
    }

    if (emp === "") {
        $('#approval').text("Invalid Selection for Self-Employment")
        return
    }

    if (inc === "" ||parseInt(inc) < 0) {
        $('#approval').text("Invalid value for income")
        return
    }

    if (coapp === "" || parseInt(coapp) < 0) {
        $('#approval').text("Invalid value for Co-Applicant Income")
        return
    }

    if (amo === "" || parseInt(amo) < 0) {
        $('#approval').text("Invalid value for Amount")
        return
    }

    $.post(url,{
        gender: gen,
        employment: emp,
        income: parseInt(inc),
        coapplicantincome: parseInt(coapp),
        amount: parseInt(amo),
        cred_hist: credit_history,
        dependants: parseInt(dependant),
        educated: Education,
        term: parseInt(term_mon),
        married: Married,
        property_area: Property
    },function(data,status){
            console.log(data.Apporval_Prediction)
            $('#approval').css({ color: "#6a9155" });
            $('#approval').text(data.Apporval_Prediction)
    })
}

function changecred(){
    var val = $('#credit-history').find(":selected").text();
    if(val !==""){
        $('#credit-history +.dependants-name .content-dependants').addClass('optionclass')
    }
    else{
        $('#credit-history +.dependants-name .content-dependants').removeClass('optionclass')
    }
}

function changeed() {
    var val = $('#Education').find(":selected").text();
    if (val !== "") {
        $('#Education +.dependants-name .content-dependants').addClass('optionclass')
    }
    else {
        $('#Education +.dependants-name .content-dependants').removeClass('optionclass')
    }
}


function changemarr() {
    var val = $('#Married').find(":selected").text();
    if (val !== "") {
        $('#Married +.dependants-name .content-dependants').addClass('optionclass')
    }
    else {
        $('#Married +.dependants-name .content-dependants').removeClass('optionclass')
    }
}


function changeprop() {
    var val = $('#Property').find(":selected").text();
    if (val !== "") {
        $('#Property +.dependants-name .content-dependants').addClass('optionclass')
    }
    else {
        $('#Property +.dependants-name .content-dependants').removeClass('optionclass')
    }
}


function changegender() {
    var val = $('#gender').find(":selected").text();
    if (val !== "") {
        $('#gender +.dependants-name .content-dependants').addClass('optionclass')
    }
    else {
        $('#gender +.dependants-name .content-dependants').removeClass('optionclass')
    }
}

function changeemploy() {
    var val = $('#employ').find(":selected").text();
    if (val !== "") {
        $('#employ +.dependants-name .content-dependants').addClass('optionclass')
    }
    else {
        $('#employ +.dependants-name .content-dependants').removeClass('optionclass')
    }
}