import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GameParams } from '../../@types/@navigation';
import { Background } from '../../components/background';
import { THEME } from '../../theme';
import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/header';
import { DuoCard, DuoCardProps } from '../../components/duoCard';
import { useEffect, useState } from 'react';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  useEffect(() => {
    fetch(`http://192.168.0.38:3333/games/${game.id}/ads`).then((response) =>
      response.json().then((data) => setDuos(data))
    );
  }, []);

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleBackButtonPress() {
    navigation.goBack();
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackButtonPress}>
            <Entypo
              name={'chevron-thin-left'}
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerURL }}
          style={styles.cover}
          resizeMode='cover'
        />
        <Header
          title={game.title}
          subtitle={'Find your team!'}
        />
        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onCall={() => {}}
            />
          )}
          horizontal
          contentContainerStyle={
            duos.length > 0
              ? duos.length > 1
                ? styles.contentListMultipleCards
                : styles.contentListSingleCard
              : styles.contentNoCards
          }
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text
              // lineBreakMode='middle'
              // numberOfLines={2}

              style={styles.emptyListText}
            >
              There are no team requests for this game
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
