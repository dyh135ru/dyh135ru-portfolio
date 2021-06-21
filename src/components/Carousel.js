
import React from 'react';

import Card from './Card';

import { Container, Row } from 'react-bootstrap';

import pacman from '../assets/images/pacman.PNG';
import mazatlan from '../assets/images/mazatlan.PNG';
import eyes from '../assets/images/eyes.PNG';

class Carousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Pacman Exercise',
                    subTitle: 'Web page',
                    imgSrc: pacman,
                    link: 'https://dyh135ru.github.io/pacmanExercise/',
                    selected: false
                    
                },
                {
                    id: 1,
                    title: 'Eye Exercise',
                    subTitle: 'Web page',
                    imgSrc: eyes,
                    link: 'https://dyh135ru.github.io/bigEyes/',
                    selected: false
                    
                },
                {
                    id: 2,
                    title: 'Real Time Bus Tracking',
                    subTitle: 'Web page',
                    imgSrc: mazatlan,
                    link: 'https://dyh135ru.github.io/MapAnimations/',
                    selected: false
                    
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return( 
            <Container fluid = {true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
           
    
    }
}

export default Carousel;