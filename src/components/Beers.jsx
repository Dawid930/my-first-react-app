import Beer from './Beer.jsx'

const Beers = ({list}) => {
    const a = 10
    //console.log(list);

    console.log(<Beer info={list[0]} randomNum={a} key={100}/>);
    return (
        <div className='beers'>
            {list.map((item, index) => <Beer info={item} randomNum={a} key={index}/>)}
        </div>
    )
}

export default Beers