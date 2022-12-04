import { ImageStore, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { EventCard } from '../components/EventCard';
import { API_BASE_URL } from '@env'


export function EventsView() {

  const [events, setEvents] = useState([])
  useEffect(()=> {
    axios({
      method: 'get',
      url: `${API_BASE_URL}?place_id=85633337&q=christmas&completion_types=event%2Cquery&expand.destination_event=primary_venue%2Cimage`
    }).then((response) => {
      setEvents(response.data.event)
    })
    .catch(error => console.log('error', error))
  }, [])

  

  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Events length is:  {events.length}</Text>
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            location={event?.primary_venue?.address?.city}
            event_date={event?.start_date}
            event_time={event?.start_time}
            title={event?.name}
            short_description={event?.summary}
            // ToDo: url should link to eventbrite event, event_url={event.url}
            // ToDo: event_ticket={event.ticket}
          />
        ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#800B1A',
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  text:{
      color:"#F5D68F",
      fontWeight: "bold",
      fontSize:20
  }
})

