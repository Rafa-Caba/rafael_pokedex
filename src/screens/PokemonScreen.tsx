import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParams } from '../navigator/Tab1';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( { navigation, route }: Props ) => {

    const { pokemon: simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon( id );

    return (
        <View style={{ flex: 1 }}>
            {/* Header Cobtainer */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                {/* Back Button */}
                <TouchableOpacity
                    onPress={ () => navigation.pop() }
                    activeOpacity={0.6}
                    style={{
                        ...styles.backButton,
                        top: top + 5
                    }}
                >
                    <Icon 
                        name="arrow-back-outline"
                        color="white"
                        size={ 35 }
                    />
                </TouchableOpacity>

                {/* Nombre del Pokemon */}
                <Text 
                    style={{
                        ...styles.pokemonName,
                        top: top + 40,
                    }}
                >
                    { name + '\n' }#{ id }
                </Text>

                {/* Pokebola blanca */}
                <Image 
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokeball }
                />

                <FadeInImage
                    uri={ picture }
                    style={ styles.pokemonImage }
                />
            </View>

            {
                isLoading 
                ? (
                    /* Detalles y Loading */
                    <View style={ styles.loadingIdicator }>
                        <ActivityIndicator
                            color={ color }
                            size={ 50 }
                        />
                    </View>
                )
                : <PokemonDetails pokemon={ pokemon } />
            }


        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 15,
    },
    pokemonName: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'flex-start',
        left: 15
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -30,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIdicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});