import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../duoInfo';
import { GameController } from 'phosphor-react-native';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hoursStart: string;
  hourEnd: string;
  usesVoiceChannel: boolean;
  createdAt: string;
}

interface Props {
  data: DuoCardProps;
  onCall: () => void;
}

export function DuoCard({ data, onCall }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Name'
        value={data.name}
      />
      <DuoInfo
        label='Time played'
        value={`${data.yearsPlaying} years`}
      />
      <DuoInfo
        label='Availability'
        value={`${data.weekDays.length} days \u2022 ${data.hoursStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label='Uses voice chat:'
        value={data.usesVoiceChannel ? 'Yes' : 'No'}
        colorValue={data.usesVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onCall}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonText}>Call</Text>
      </TouchableOpacity>
    </View>
  );
}
