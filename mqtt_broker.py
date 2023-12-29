import paho.mqtt.client as mqtt
import time

def invia_messaggio(broker, messaggio):
    broker.publish("/home/temp", messaggio)

def on_connect(broker, userdata, flags, rc):
    print(f"Connesso con risultato {rc}")

broker = mqtt.Client()
broker.on_connect = on_connect

broker_ip = "indirizzo_ip_broker"

broker.connect(broker_ip, 1883, 60)

messaggio_predefinito = "Z3N123745P51T04N068456P26T10N239876P12T15E"

while True:
    invia_messaggio(broker, messaggio_predefinito)
    time.sleep(10)
