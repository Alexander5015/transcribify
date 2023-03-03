import sys
import speech_recognition as sr

r = sr.Recognizer()

with sr.AudioFile(sys.argv[1]) as source:
  audio = r.record(source)

transcription = r.recognize_google(audio)

print(transcription)
