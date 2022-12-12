import { ImageStore, StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { EventCard } from '../components/EventCard';
import { API_BASE_URL } from '@env'


//mocked data
const mockEvents =
{
  "event_list": [{
    "_type": "destination_event",
    "checkout_flow": "widget",
    "eid": "474877359967",
    "end_date": "2022-12-18",
    "end_time": "18:00",
    "eventbrite_event_id": "474877359967",
    "full_description": null,
    "hide_end_date": false,
    "hide_start_date": false,
    "id": "474877359967",
    "image_id": "399562189",
    "is_cancelled": null,
    "is_online_event": false,
    "is_protected_event": false,
    "language": "en-au",
    "name": "ChristmasVille ",
    "num_children": null,
    "parent_url": null,
    "primary_organizer_id": "54467007723",
    "primary_venue_id": "126582049",
    "published": "2022-11-25T00:27:17Z",
    "series_id": null,
    "start_date": "2022-12-18",
    "start_time": "14:00",
    "summary": "A fun-filled kids Christmas event!",
    "tickets_by": "Eventbrite",
    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=474877359967",
    "timezone": "Australia/Sydney",
    "url": "https://www.eventbrite.com.au/e/christmasville-tickets-474877359967"
  }, {
    "_type": "destination_event",
    "checkout_flow": "widget",
    "eid": "466593332217",
    "end_date": "2022-12-17",
    "end_time": "22:00",
    "eventbrite_event_id": "466593332217",
    "full_description": null,
    "hide_end_date": false,
    "hide_start_date": false,
    "id": "466593332217",
    "image_id": "391959959",
    "is_cancelled": null,
    "is_online_event": false,
    "is_protected_event": false,
    "language": "en-us",
    "name": "CHRISTMAS EXTRAVAGANZA, A CHRISTMAS CELEBRATION WITH CHRISTMAS SONGS",
    "num_children": null,
    "parent_url": null,
    "primary_organizer_id": "24567273486",
    "primary_venue_id": "124313059",
    "published": "2022-11-11T22:00:46Z",
    "series_id": null,
    "start_date": "2022-12-17",
    "start_time": "18:00",
    "summary": "A special night of food and music with your favorite Christmas songs, Mr. Charles Lynwood Jones/ Mr. Randolph Lindsey,Mrs. Yolanda McClendon",
    "tickets_by": "Eventbrite",
    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=466593332217",
    "timezone": "America/New_York",
    "url": "https://www.eventbrite.com/e/christmas-extravaganza-a-christmas-celebration-with-christmas-songs-tickets-466593332217"
  }, {
    "_type": "destination_event",
    "checkout_flow": "widget",
    "eid": "449916541487",
    "end_date": "2022-12-16",
    "end_time": "20:30",
    "eventbrite_event_id": "449916541487",
    "full_description": null,
    "hide_end_date": false,
    "hide_start_date": false,
    "id": "449916541487",
    "image_id": "379884149",
    "is_cancelled": null,
    "is_online_event": false,
    "is_protected_event": false,
    "language": "en-us",
    "name": "A Luminous Christmas: Christmas Classics",
    "num_children": null,
    "parent_url": "https://www.eventbrite.com.au/e/a-luminous-christmas-christmas-classics-tickets-449916481307",
    "primary_organizer_id": "11934490710",
    "primary_venue_id": "120740239",
    "published": "2022-10-27T04:36:38Z",
    "series_id": "449916481307",
    "start_date": "2022-12-16",
    "start_time": "19:00",
    "summary": "The most beautiful carols from around the world bundled into one heavenly hour.",
    "tickets_by": "Eventbrite",
    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=449916541487",
    "timezone": "Australia/Sydney",
    "url": "https://www.eventbrite.com.au/e/a-luminous-christmas-christmas-classics-tickets-449916541487"
  }, {
    "_type": "destination_event",
    "checkout_flow": "widget",
    "eid": "469669071837",
    "end_date": "2022-12-21",
    "end_time": "12:00",
    "eventbrite_event_id": "469669071837",
    "full_description": null,
    "hide_end_date": false,
    "hide_start_date": false,
    "id": "469669071837",
    "image_id": "395083279",
    "is_cancelled": null,
    "is_online_event": false,
    "is_protected_event": false,
    "language": "en-au",
    "name": "Christmas Workshop: Christmas Village",
    "num_children": null,
    "parent_url": null,
    "primary_organizer_id": "38105070323",
    "primary_venue_id": "125278339",
    "published": "2022-11-18T03:30:11Z",
    "series_id": null,
    "start_date": "2022-12-21",
    "start_time": "10:00",
    "summary": "Suitable age 6+  Children will make a Christmas themed town. Morning Tea provided. Drop and go",
    "tickets_by": "Eventbrite",
    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=469669071837",
    "timezone": "Australia/Brisbane",
    "url": "https://www.eventbrite.com.au/e/christmas-workshop-christmas-village-tickets-469669071837"
  }, {
    "_type": "destination_event",
    "checkout_flow": "widget",
    "eid": "482351395007",
    "end_date": "2022-12-18",
    "end_time": "19:00",
    "eventbrite_event_id": "482351395007",
    "full_description": null,
    "hide_end_date": false,
    "hide_start_date": false,
    "id": "482351395007",
    "image_id": "405504639",
    "is_cancelled": null,
    "is_online_event": false,
    "is_protected_event": false,
    "language": "en-us",
    "name": "Christmas_Market_Leipzig",
    "num_children": null,
    "parent_url": null,
    "primary_organizer_id": "57993280043",
    "primary_venue_id": null,
    "published": "2022-12-06T12:54:49Z",
    "series_id": null,
    "start_date": "2022-12-18",
    "start_time": "12:00",
    "summary": "Hey International Students Halle, DEGIS City Chapter is Hosting their first event-Register-Limited slots only",
    "tickets_by": "Eventbrite",
    "tickets_url": "https://www.eventbrite.com/checkout-external?eid=482351395007",
    "timezone": "Europe/Berlin",
    "url": "https://www.eventbrite.com/e/christmas-market-leipzig-tickets-482351395007"
  }],
  "query": ["christmas event", "christmas concert", "volunteer christmas", "christmas party", "christmas lights"]
}

export function EventsView() {

  const [events, setEvents] = useState([])


 useEffect(()=> {
  console.log("setting event")
  setEvents(mockEvents.event_list)
 }, [] )

   ////////////////////// uing mocked data due to api endpoint issue so skipping this stage
 
  // useEffect(()=> {
  //   axios({
  //     method: 'get',
  //     url: `${API_BASE_URL}?place_id=85633337&q=christmas&completion_types=event%2Cquery&expand.destination_event=primary_venue%2Cimage`
  //   }).then((response) => {
  //     console.log (response.data)
  //     setEvents(response.data.event)
  //   })
  //   .catch(error => console.log('error', error))
  // }, [])

  ////////////////////

  

  return (
  
    <ScrollView>
    <View style={styles.container}>
     <Text> Events Screen</Text>
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
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
  container:{
      padding: 20,
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

