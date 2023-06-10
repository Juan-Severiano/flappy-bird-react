import { ImageBackground, Text } from 'react-native'

import backgrond from '../../assets/images/background.png'
import { styles } from './style'
import { Game } from "./Game";


const Home = () => {
    return (
        <ImageBackground source={backgrond} style={styles.container}>
            <Game />
        </ImageBackground>
    )
}

export {Home}