 
// from: https://wiki.base22.com/pages/viewpage.action?pageId=72942000
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }"
    function postContactToGoogle(){
        var name = $j('#name').val();
        var email = $j('#email').val();
        var feed = $j('#feed').val();
        if ((name !== "") && (email !== "") && ((feed !== "") && (validateEmail(email)))) {
            $j.ajax({
                url: "https://docs.google.com/yourFormURL/formResponse",
                data: {"entry.1" : name, "entry.3" : email, "entry.4": feed},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
 
                        $j('#name').val("");
                        $j('#email').val("");
                        $j('#feed').val("");
                        //Success message
                    },
                    200: function (){
                        $j('#name').val("");
                        $j('#email').val("");
                        $j('#feed').val("");
                        //Success Message
                    }
                }
            });
        }
        else {
            //Error message
        }
    }
