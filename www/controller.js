$(document).ready(function () {

    //Custom attribs as unable to display custom message on html
    eel.expose(CustomMessage)
    function CustomMessage(value) {
        function Listining() {
            $(".siri-message").attr("hidden", false);
            $(".siri-message2").attr("hidden", true);
            $(".siri-message3").attr("hidden", true);
        }
        function Recognizing() {
            $(".siri-message").attr("hidden", true);
            $(".siri-message2").attr("hidden", false);
            $(".siri-message3").attr("hidden", true);
        }
        function Speaking() {
            $(".siri-message").attr("hidden", true);
            $(".siri-message2").attr("hidden", true);
            $(".siri-message3").attr("hidden", false);
        }
        function Nothing() {
            $(".siri-message").attr("hidden", false);
            $(".siri-message2").attr("hidden", true);
            $(".siri-message3").attr("hidden", true);
        }

        switch (value) {
            case 1:
                Listining()
                break;
            case 2:
                Recognizing()
                break;
            case 3:
                Speaking()
                break;
            case 4:
                Nothing()
                break;
            default:
                Listining()
        }

    }


    //Display speak Message
    eel.expose(DisplayMessage)
    function DisplayMessage(message) {

        $(".siri-message li-first").text(message);
        $(".siri-message").textillate('start');

    }


    // Display hood
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }

});