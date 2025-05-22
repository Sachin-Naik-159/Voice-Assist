$(document).ready(function () {

    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },
    });

    //Siri config
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
    });

    // Siri message animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",

        },
        out: {
            effect: "fadeOutUp",

        },
    });


    function basicAnim() {
        eel.playAssistantSound()
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
    }
    //Mic button click event
    $("#MicBtn").click(function () {
        basicAnim()
        eel.allCommands()()
    });

    //Chat button click
    $("#ChatBtn").click(function () {
        basicAnim()
        const chatbox = document.getElementById('chatbox')
        eel.chatMessage(chatbox)()
    });

    //Listen to Enter key
    $().keypress(function (e) {
        if (e.keyCode == 13) {
            print("working")
            basicAnim()
            eel.allCommands()()
        }
    })
});





// const chatbox = document.getElementById('chatbox');
//         chatbox.addEventListener('keydown', function (event) {
//             if (event.key === 'Enter') {
//                 event.preventDefault(); // Prevent the default action (form submission)
//                 const inputValue = chatbox.value.trim(); // Get the value and trim whitespace
//                 if (inputValue.length > 0) {
//                     console.log('Entered chatbox value:', inputValue); // Log the value to the console
//                     eel.chatMessage(inputValue)()
//                 }
//             }
//         });