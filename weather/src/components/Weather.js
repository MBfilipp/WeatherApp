import React from 'react';

export default class Weather extends React.Component {
    render() {
        return (
          <div>
            {this.props.temp && 
                <div>
                    <p>Город - {this.props.name}</p>
                    <p>Температура - {this.props.temp}</p>  
                    <p>{this.props.error}</p>
                </div>
            }
          </div>
        );
      }

}