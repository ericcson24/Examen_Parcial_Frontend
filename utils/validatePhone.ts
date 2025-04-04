export function validatephone(phone:string):boolean
{
    return phone.startsWith("+") && phone.length > 6;
}