import { ImageStore, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'

// export function EventCard({ location, event_date, event_time, title, short_description }) {
//   return (
//     <View style={styles.container}>
//       {!!location && <Text>City: {location}</Text>}
//       {!!event_date && <Text>Date: {event_date}</Text>}
//       {!!event_time && <Text>Time: {event_time}</Text>}
//       {!!title && <Text>Title: {title}</Text>}
//       {!!short_description && <Text>Summary: {short_description}</Text>}

//       {/* ToDo: event_url, link the URL to summary or event card */}
//       {/* ToDo: event_ticket */}
//     </View>
//   )
// }

//SEARCH BAR & FLAT LIST
export const ItemView = ({ item }) => {
  const getEvent = (item) => {
    alert(
      'Title: ' +
        item.name +
        '\n' +
        ' Timezone: ' +
        item.timezone +
        '\n' +
        ' Date: ' +
        item.start_date +
        '\n' +
        ' Time: ' +
        item.start_time
    )
  }

  return (
    <Card style={styles.menuContainer}>
      <Card.Title titleVariant="titleLarge" title={item.name} />
      <Card.Content style={styles.menuItemBody}>
        <Paragraph style={styles.paragraph}>{item.summary}</Paragraph>
        <Paragraph>
          <TouchableOpacity>
            <View style={styles.action_buttons}>
              <Text onPress={() => getEvent(item)} style={styles.action_buttons_text}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    backgroundColor: '#eca824',
    // borderRadius: 10,
    margin: 10,
    marginTop: 2,
  },
  paragraph: {
    fontSize: 20,
  },
  menuItemBody: {
    // marginTop: 5,
    // fontSize: 30,
  },
  action_buttons: {
    width: 50,
    elevation: 8,
    backgroundColor: '#27ae61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  action_buttons_text: {
    // color: '#fff',
    fontSize: 18,
  },
})
