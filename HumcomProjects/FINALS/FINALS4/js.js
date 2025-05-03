function javascript() {
    var numRows = parseFloat(prompt("Enter Numbers of Rows: "));
    var numColumns = parseFloat(prompt("Enter Numbers of Columns: "));
    document.write("<table border=1 style='margin: auto; margin-top: 10px;'>")
    for (var i = 1 ; i <= numRows ; i++){
        document.write("<tr>");
        for (var j =  1 ; j <= numColumns ; j++){
            document.write("<td style='padding: 20px; text-align: center; font-size: 30px;'>" + i * j +"</td>");
        }
        document.write("</tr><br>");
    }

    document.write("</table>")
}
