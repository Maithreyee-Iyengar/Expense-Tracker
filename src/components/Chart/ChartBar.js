import './ChartBar.css';
// Adding dynamic Styles
const  ChartBar = (props) =>{

    let barFillHeight = '0%';
    if (props.maxValue >0 ) {
        barFillHeight = Math.round((props.value/props.maxValue)*100 )+ '%';
    }

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:barFillHeight}}>
                {/*  style takes dynamic value as an JS object */}
            </div>
            
        </div>
        <div className='chart-bar__label'>
                    {props.label}
        </div>
    </div>
};
export default ChartBar;