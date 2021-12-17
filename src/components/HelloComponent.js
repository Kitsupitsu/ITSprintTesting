const Hello = (props) => {
  const today = new Date();
  const bd = new Date(props.birthday);

  const ageFromBirthday = () => {
    const age = new Date(today - bd).getFullYear() - 1970;
    return age;
  }
  
  const daysLeftToBirthday = () => {
    const month = bd.getMonth();
    const date = bd.getDate();
    const nextbd = new Date(today.getFullYear()+1, month, date);
    if( today.getTime() > nextbd.getTime()) {
      nextbd.setFullYear(nextbd.getFullYear()+1);
    }
    const diff = nextbd.getTime()-today.getTime();
    const days = Math.floor(diff/(1000*60*60*24));
    return days;
  }
  return <p>Hello, {props.name}. You are {ageFromBirthday(props.birthday)} years old. There are {daysLeftToBirthday(props.birthday)} days left to your birthday.</p>
}

export default Hello;