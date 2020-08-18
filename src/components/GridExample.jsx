import React from 'react';
import '../style/styles.scss';

const GridExample = () => {
  return(
    <section>
      <div className="wrapper">
        
        <div className="row">
          <div className="column-6">
            <p>Column 6</p>
          </div>
          <div className="column-6">
            <p>Column 6</p>
          </div>
        </div>
        
        <div className="row">
          <div className="column-4">
            <p>Column 4</p>
          </div>
          <div className="column-4">
            <p>Column 4</p>
          </div>
          <div className="column-4">
            <p>Column 4</p>
          </div>
        </div>

        <div className="row">
          <div className="column-1">
            <p>Column 1</p>
          </div>
          <div className="column-2">
            <p>Column 2</p>
          </div>
          <div className="column-3">
            <p>Column 3</p>
          </div>
          <div className="column-4">
            <p>Column 4</p>
          </div>
          <div className="column-2">
            <p>Column 2</p>
          </div>
        </div>

        <div className="row">
          <div className="column-12">
            <small>Hola mundo</small>
            <p>Hola mundo</p>
            <h3>Hola mundo c:</h3>
            <h2>Hola mundo c:</h2>
            <h1>Hola mundo c:</h1>
            <input type="text"/>
          </div>
        </div>
      </div>

    </section>
  );
}

export default GridExample