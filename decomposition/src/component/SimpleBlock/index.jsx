

/**
 * Возвращает блок определенной ширины с переданным заголовком и дочерними элементами
 */

export function SimpleBlock({title, children}) {
    return (
        <div style={{width: '200px'}}>
            <h5>{title}</h5>
            {children}
        </div>
    )
}