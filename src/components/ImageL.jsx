import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 700, height: 650 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeNzg-kMHhUBP4AmHnLsrPYzxKHVceLnkwtLhxZlDssj7KjhStloJR6px7EbquZ83uDcygnWkekxysvuNYVzLQ3GyBMRl2PpU7pO.jpg?r=db8',
    title: 'Pikachu',
  },
  {
    img: 'https://easycdn.es/1/imagenes/animanga-5_326626.jpg',
    title: 'Zard',
  },
  {
    img: 'https://i.pinimg.com/736x/0b/7b/2c/0b7b2c4142440c94b87325ef2ad7d72d.jpg',
    title: 'Mew',
  },
  {
    img: 'https://i.pinimg.com/474x/dd/c0/15/ddc0158e29accd31fa32075cb35adcc0.jpg',
    title: 'Shinx',
  },
  {
    img: 'https://i.pinimg.com/736x/75/d9/4f/75d94f76687d45e76afd113d5bd95b05.jpg',
    title: 'Garchomp',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkHsFEbr8BJbHZkH0SGY5Z_wMhwORfVwd4w&s',
    title: 'Honey',
  },


];
