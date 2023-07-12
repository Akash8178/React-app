function GetName(prop)
{
    const name = "Akash";
    const Class = "12th";
    const amoumt = 243;
    return (
        <div>
            <p>Roll is {prop.Roll}</p>
            <p>Name is {prop.Name}</p>
            <p>Class is {prop.Class}</p>
        </div>
    );
}

export default GetName;