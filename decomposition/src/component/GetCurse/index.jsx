/**
 * Компонент возвращает курс в рублях и прирост переданного обьекта
 */

export function GetCurse({obj, market}) {
    function getWorth(obj) {
        if (obj === 'USD') return '63,52 + 0,09';
        if (obj === 'EUR') return '70,86 + 0,14';
        return '64,90 + 1,63%'
    }
    return <span style={{marginRight: '20px'}}>{obj} {'' || market} {getWorth(obj)}</span>
}