import React from 'react';
import dataBlogCard from '../../data/blog/blog';
import servicio from '../../assets/img/servicio1.png'

const Blog = () => {
    return (
        <section id="blog" className="block spacer p-top-xl">
            <div className="wrapper">
                <h3 className="text-right">
                    <a title="Blogging" className="transform-scale-h" href={ process.env.PUBLIC_URL + "/journal" }>
                        <span className="line">Mis servicios</span>
                    </a>
                </h3>
            </div>

            <div className="bg-gray-light ptb-blog">
                <div className="wrapper">
                    <div className="row gutter-width-lg">
                        { dataBlogCard && dataBlogCard.map( ( item, key ) => {
                            return (
                                <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="card card-post">
                                        <div className="card-top position-relative">
                                            <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                                <div className="img object-fit overflow-hidden">
                                                    <div className="object-fit-cover transform-scale-h">
                                                        <img className="card-top-img" src={ servicio } alt={ item.imgAlt } />
                                                    </div>
                                                </div>
                                            </a>

                                            <div className="card-category">
                                                <a title={ item.categoryTitle } className="btn btn-sm btn-light transform-scale-h border-0" href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.categoryTitle }</a>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
