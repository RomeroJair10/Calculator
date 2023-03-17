const Button = ({
    Classes, 
    handlelick,
    rows, 
    style,
    value}) => {
   return(
   <td rowSpan={rows}>
     <button 
       tipe='button' 
       className={Classes}
       style={style}
       value={value}
       onClick={(e) => handlelick(e)}
     >{value}</button>
   </td>
   )
}

export default Button