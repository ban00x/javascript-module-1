function isValidName(name, type) {
    if (type === "admin" || type == "manager") {
        return "Username valid";
    } else if (name.substring(0, 1).toUpperCase() === name.substring(0, 1) && name.length > 5 && name.length < 10) {
        return "Username valid";

    } else {
        return "Username invalid";
    }
}