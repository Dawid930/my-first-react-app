import {Component} from "react" //destructuringgal kiszedjük a react libraryból

class Header extends Component{ // a header megörököl egy csomó dolgot a Component-ből és azokat tudjuk használni
    render() {
        return(
            <header>{this.props.title}</header>
        )
    }
}

export default Header