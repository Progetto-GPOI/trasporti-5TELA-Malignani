from geopy.geocoders import Nominatim

def ottieni_coordinate(citta):
    geolocatore = Nominatim(user_agent="coordinates_city") 
    posizione = geolocatore.geocode(citta)
    
    if posizione:
        latitudine = posizione.latitude
        longitudine = posizione.longitude
        return latitudine, longitudine
    else:
        print("Coordinate non trovate per "+citta)
        return None

citta = "Ospedaletto di Gemona del Friuli"
coordinate = ottieni_coordinate(citta)

if coordinate:
    print(f"Coordinate: " + str(coordinate))
