import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Header } from '../../components/header';
import { GameCard, GameCardProps } from '../../components/gameCard';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/background';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  useEffect(() => {
    fetch('http://192.168.0.38:3333/games').then((response) => response.json().then((data) => setGames(data)));
  }, []);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerURL }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerURL });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />
        <Header
          title={'Find your team!'}
          subtitle={'Select the game you wish to play'}
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
