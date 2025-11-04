import { TextInput, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#FFF' }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TextInput
          value={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit morbi nisi aptent condimentum nisi fringilla rutrum sociis senectus ac. Torquent mauris risus ultricies aenean vitae erat mollis congue dui mus'
          }
          placeholder='Enter your text here'
          numberOfLines={1}
          multiline={false}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            alignSelf: 'stretch',
            writingDirection: 'rtl',
            paddingHorizontal: 2,
            height: 40
          }}
        />
      </View>
    </View>
  )
}
