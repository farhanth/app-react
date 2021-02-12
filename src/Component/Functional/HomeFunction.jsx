import React from 'react';
import Blog from './Blog';

const HomeFunction = () => {
    return (
        <div>
            <Blog
                tanggal="12 Februari 2020"
                judul="Teknologi Blockchain"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eleifend velit, quis dapibus eros. Aliquam vel hendrerit lacus, ac egestas nibh."
            />
            <Blog
                tanggal="11 Februari 2020"
                judul="Laravel Blade Tutorial"
                summary=" Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin hendrerit, velit in euismod mollis, nunc nisl fringilla felis."
            />
            <Blog
                tanggal="10 Februari 2020"
                judul="Create Standard Rest + Node JS Back End"
                summary=" sed interdum velit tellus at urna. Duis viverra enim eget diam placerat, non facilisis tellus faucibus. Pellentesque eget finibus sem."
            />
        </div>
    );
}

export default HomeFunction;