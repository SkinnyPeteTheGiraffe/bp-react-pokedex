import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { fetchPokedexData } from '../../services';
import PokedexPokemon from '../../objects/PokedexPokemon';
import LoadingAlert from '../LoadingIndicator';
import { Col, Container, Row, Card, Form, FormControl, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PokemonList = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const [data, setData] = useState([] as PokedexPokemon[]);
    const [display, setDisplay] = useState([] as PokedexPokemon[]);
    useEffect(() => {
        fetchPokedexData((input) => {
            if (input && input.pokemon) {
                const pokemon: PokedexPokemon[] = [];
                input.pokemon.forEach((p) => {
                    pokemon.push(new PokedexPokemon(p));
                });
                setData(pokemon);
                setDisplay(data);
            }
        });
    }, [data]);
    return display.length > 0 ? (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h2>Pokédex</h2>
                </Col>
                <Form inline className="ml-auto" onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const value = searchInput?.current?.value;
                    if (!value || value.length <= 0) {
                        setDisplay(data);
                    } else {
                        setDisplay(data.filter(r => {
                            console.log(r);
                            return r.name.search(value);
                        }));
                    }
                }}>
                    <FormControl ref={searchInput} type="text" name="search" placeholder="Search" className="mr-sm-2" />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
            </Row>
            <Row>
                {display.map((pokemon) => (
                    <Col
                        className="mt-2 px-1"
                        key={pokemon.id}
                        xs={12}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <Card className="w-100 h-100 position-relative">
                            <div
                                className="position-absolute"
                                style={{ right: 0, top: 0 }}
                            >
                                {('' + pokemon.num).padStart(3, '0')}
                            </div>
                            <div className="card-img">
                                <LazyLoadImage
                                    alt={pokemon.name}
                                    height="100%"
                                    src={pokemon.img} // use normal <img> attributes as props
                                    width="100%"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{pokemon.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    ) : (
        <LoadingAlert segmentWidth={50} />
    );
};

export default PokemonList;
