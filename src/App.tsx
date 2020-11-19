import React from 'react';

import { imageLinks } from './constant';

type TState = {
    images: string[],
    indexImage: number,
    imageLink: string,
};

class App extends React.Component<{}, TState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            images: [],
            indexImage: 0,
            imageLink: '',
        };
    }

    componentDidMount() {
        this.setState({
            images: imageLinks
        })
    }
    addImage = () => {
        const { state } = this;
        this.setState({
        images: state.images.concat([state.imageLink])
        });
    }
    onChangeImageLink = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            imageLink: evt.target.value
        });
    }
    nextImage = () => {
        const { indexImage, images } = this.state;
        const { length } = images
        if(indexImage === length - 1) {
            this.setState({
                indexImage: 0,
            })
        } else {
            this.setState({
                indexImage: indexImage + 1
            })
        }
    }
    preImage = () => {
        const { indexImage, images } = this.state;
        const { length } = images;
        if(indexImage === 0) {
            this.setState({
                indexImage: length - 1
            })
        } else {
            this.setState({
                indexImage: indexImage - 1
            })
        }
    }
    handleChangeToFirstImage = () => {
        this.setState({
            indexImage: 0
        })
    }
    handleChangeLastImage = () => {
        const { images } = this.state;
        this.setState({
            indexImage: images.length - 1
        })
    }
    onChangeImage = (idx: number) => {
        this.setState({
            indexImage: idx
        })
    }

    render() {
        const { images, indexImage, imageLink } = this.state;
        const {
            preImage,
            nextImage,
            handleChangeToFirstImage,
            handleChangeLastImage,
            onChangeImageLink,
            addImage,
            onChangeImage,
        } = this;
        return(
            <div>
                <img 
                    style={{ width: '300px', height: '500px'}}
                    src={images[indexImage]}
                    alt="TMT"
                />
                <br />
                {images.map((item,index) => {
                    return(
                        <img 
                            style={{width: '50px', height: '50px'}}
                            alt="TMT"
                            src={item}
                            onClick={() => onChangeImage(index)}
                        />
                    );
                })}
                <br />
                <button onClick={preImage}>
                    Pre
                </button>
                <button onClick={nextImage}>
                    Next
                </button>
                <br />
                <button onClick={handleChangeToFirstImage}>
                    {'<'}
                </button>
                <button onClick={handleChangeLastImage}>
                    {'>'}
                </button>
                <br />
                <input 
                    type="text"
                    value={imageLink}
                    onChange={onChangeImageLink}
                />
                <button onClick={addImage}>
                    Thêm ảnh
                </button>
            </div>
        );
    }
}

export default App;