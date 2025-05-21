import pyttsx3
import speech_recognition as sr
import eel
import time

def speak(text):
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices') 
    # print(voices)
    engine.setProperty('voice', voices[1].id)
    engine.setProperty('rate', 174)
    eel.DisplayMessage(text)
    engine.say(text)
    engine.runAndWait()


def takecommand():

    r = sr.Recognizer()

    with sr.Microphone() as source:
        print('listening....')
        eel.DisplayMessage('listening....')
        eel.CustomMessage (1)
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source)
        
        audio = r.listen(source, 10)

    try:
        print('recognizing')
        eel.DisplayMessage('recognizing....')
        eel.CustomMessage (2)
        query = r.recognize_google(audio, language='en-in')
        # eel.CustomMessage (3)
        # print(f"user said: {query}")
        eel.DisplayMessage(query)
        time.sleep(2)
        # speak(query)
        
        
    except Exception as e:
        return ""
    
    return query.lower()

# tex t = takecommand()
# speak(text)

@eel.expose
def allCommands():
    query = takecommand()
    print(query)

    if "open" in query:
        from engine.features import openCommand
        eel.CustomMessage (3)
        openCommand(query)
    elif "on youtube" in query:
        from engine.features import PlayYoutube
        eel.CustomMessage (3)
        PlayYoutube(query)
    else:
        eel.CustomMessage (4)
        print("Not run")
        eel.ShowHood()

    time.sleep(2)
    eel.ShowHood()