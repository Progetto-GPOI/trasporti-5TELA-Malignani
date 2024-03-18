import tkinter as tk
from tkinter import ttk
from datetime import datetime
import paho.mqtt.client as mqtt

class MqttClient:
    def __init__(self, broker_address, topic):
        self.client = mqtt.Client()
        self.client.on_message = self.on_message
        self.client.connect(broker_address, 1883, 60)
        self.client.subscribe(topic)
        self.root = tk.Tk()
        self.root.title("MQTT Client")
        self.create_gui()

    def create_gui(self):
        self.date_label = tk.Label(self.root, text="")
        self.date_label.pack()
        self.date_label.config(font=("Helvetica", 40))  

        self.tree = ttk.Treeview(self.root, columns=("LINEA", "POSTI LIBERI", "TEMPO STIMATO"), show="headings")
        self.tree.heading("LINEA", text="LINEA", anchor=tk.CENTER)
        self.tree.heading("POSTI LIBERI", text="POSTI LIBERI", anchor=tk.CENTER)
        self.tree.heading("TEMPO STIMATO", text="TEMPO STIMATO", anchor=tk.CENTER)
        self.tree.column("#0", width=0, stretch=tk.NO)

        for col in self.tree["columns"]:
            self.tree.column(col, anchor=tk.CENTER)
            self.tree.column(col, width=400)  
            self.tree.column(col, minwidth=50)  
            self.tree.heading(col, anchor=tk.CENTER)

        style_heading = ttk.Style()
        style_heading.configure("Treeview.Heading", font=("Helvetica", 40))
        style_heading.configure("Treeview.Heading", rowheight=60)

        style_body = ttk.Style()
        style_body.configure("Treeview", font=("Helvetica", 50))

        style_body.configure("Treeview", rowheight=90)

        self.tree.tag_configure("oddrow", background="#f0f0f0")  # Grigio chiaro
        self.tree.tag_configure("evenrow", background="#d0d0d0")  # Grigio
        self.tree.tag_configure("darkrow", background="#a0a0a0")  # Grigio scuro

        self.tree.pack(expand=tk.YES, fill=tk.BOTH)

        self.update_time()

    def update_time(self):
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.date_label.config(text=f"{current_time}")
        self.root.after(1000, self.update_time)  

    def on_message(self, client, userdata, msg):
        message = msg.payload.decode("utf-8")
        print(f"Received message: {message}")
        self.process_message(message)

    def process_message(self, message):
        message = message[1:-1]
        parts = message.split("N")[1:]
        rows = []

        for part in parts:
            n_linea = part[:2]
            posti_liberi = part[7:9]
            tempo_stimato = part[10:]
            rows.append((n_linea, posti_liberi, tempo_stimato))

        print(f"Processed rows: {rows}")
        self.update_gui(rows)

    def update_gui(self, rows):
        current_rows = self.tree.get_children()
        max_rows = 10
        excess_rows = len(current_rows) + len(rows) - max_rows

        if excess_rows > 0:
            self.tree.delete(*current_rows[:excess_rows])

        for i, row in enumerate(rows):
            tags = ("oddrow", "evenrow", "darkrow")[i % 3]
            self.tree.insert("", "end", values=row, tags=tags)

    def run(self):
        self.client.loop_start()
        self.root.geometry("1200x400")  
        self.root.mainloop()

if __name__ == "__main__":
    broker_address = "ip_broker"
    topic = "topic_broker"

    mqtt_client = MqttClient(broker_address, topic)
    mqtt_client.run()

