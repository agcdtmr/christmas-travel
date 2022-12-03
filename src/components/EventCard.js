import { ImageStore, StyleSheet, Text, View } from 'react-native'

export function EventCard({ location, event_date, event_time, title, short_description }) {
  return (
    <View style={styles.container}>
      {!!location && <Text>City: {location}</Text>}
      {!!event_date && <Text>Date: {event_date}</Text>}
      {!!event_time && <Text>Time: {event_time}</Text>}
      {!!title && <Text>Title: {title}</Text>}
      {!!short_description && <Text>Summary: {short_description}</Text>}

      {/* ToDo: event_url, link the URL to summary or event card */}
      {/* ToDo: event_ticket */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
  },
})
