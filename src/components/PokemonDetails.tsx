import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonIntefaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props ) => {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={ false }
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            {/* Types y Peso */}
            <View style={{ ...styles.container, marginTop: 370 }}>
                <Text style={ styles.title }>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map( ({ type }) => (
                            <Text
                                style={ styles.regularText }
                                key={ type.name }
                            > 
                                { type.name }
                            </Text>
                        ))
                    }
                </View>

                <Text style={ styles.title }>Peso</Text>
                <Text style={ styles.regularText }>{ pokemon.weight }lbs</Text>
            </View>

            {/* Sprites */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Sprites</Text>
            </View>

            <ScrollView
                // Style
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            >
                <FadeInImage 
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />
                <FadeInImage 
                    uri={ pokemon.sprites.back_default }
                    style={ styles.basicSprite }
                />
                <FadeInImage 
                    uri={ pokemon.sprites.front_shiny }
                    style={ styles.basicSprite }
                />
                <FadeInImage 
                    uri={ pokemon.sprites.back_shiny }
                    style={ styles.basicSprite }
                />

            </ScrollView>

             {/* Habilidades */}
             <View style={ styles.container }>
                <Text style={ styles.title }>Habilidades base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map( ({ ability }) => (
                            <Text
                                style={ styles.regularText }
                                key={ ability.name }
                            > 
                                { ability.name }
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Movimientos */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map( ({ move }) => (
                            <Text
                                style={ styles.regularText }
                                key={ move.name }
                            > 
                                { move.name },
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Stats</Text>
                <View>
                    {
                        pokemon.stats.map( ( stat, i ) => (
                            <View key={ stat.stat.name + i }
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{ ...styles.regularText, width: 150 }}
                                > 
                                    { stat.stat.name }
                                </Text>

                                <Text
                                    style={{ ...styles.regularText, fontWeight: 'bold' }}
                                > 
                                    { stat.base_stat }
                                </Text>
                            </View>
                        ))
                    }
                </View>

                {/* Sprites Final */}
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center',
                }}>
                    <FadeInImage 
                        uri={ pokemon.sprites.front_default }
                        style={ styles.basicSprite }
                    />
                </View>
            </View>

        </ScrollView>
    )   
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
        marginRight: 10
    },
    basicSprite: {
        width: 100,
        height: 100
    },
});