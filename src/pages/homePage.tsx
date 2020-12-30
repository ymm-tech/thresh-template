import Thresh, {
  basicWidgets,
  ui,
} from 'thresh-lib'

const {
  Page,
  AppBar,
  Container,
  Text,
} = basicWidgets

export default class HomePage extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        appBar={<AppBar title="Thresh App" />}
      >
        <Container width={ui.screenWidth} flex={1} justifyContent="center" alignItems="center">
          <Text size={ui.rpx(48)} weight="bolder">Hello World !</Text>
          <Text size={ui.rpx(48)} weight="bolder" margin={{ top: 30 }}>Welcome to Thresh !</Text>
        </Container>
      </Page>
    )
  }
}


