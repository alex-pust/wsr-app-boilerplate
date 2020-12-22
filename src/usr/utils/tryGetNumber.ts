export default function(value: any): number | string {
    if (isNaN(value)) {
        return value;
    } else {
        return parseFloat(value);
    }
}