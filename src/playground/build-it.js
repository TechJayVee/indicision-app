class VisibilityToggle extends React.Component {
    constructor(props) {
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
        visibility: false
      };
    }
    handleToggleVisibility() {
      this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
          </button>
          {this.state.visibility && (
            <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
  

// let visibility = false;
// const showContent=()=>{
//     visibility =!visibility  
//     render();
// }
// const appRoot = document.getElementById('app');
// const render = () => {
// const temPlate= (
// <div>
//     <h1>Visible Toggle</h1>

//     <button onClick={showContent}>
//     {visibility ? "hide content" : "show content"}
//     </button>
//     {visibility &&(
//         <div>
//         <p>Hey, This is content</p>
//         </div>
//     )}
// </div>
  
// )
// ReactDOM.render(<VisibilityToggle />, appRoot);
// };
// render();



