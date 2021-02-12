
                var rows = 10;
                var cols = 10;
                if(rows == "" || rows == null)
                        rows = 10;
                if(cols== "" || cols== null)
                        cols = 10;
                createTable(rows, cols);
                function createTable(rows, cols)
                {
                  var j=1;
                  var output = "<table border='1' width='100%' cellspacing='0'cellpadding='5'>";
                  for(i=1;i<=rows;i++)
                  {
                    output = output + "<tr>";
                    while(j<=cols)
                    {
                        output = output + "<td>" + i*j + "</td>";
                         j = j+1;
                       }
                        output = output + "</tr>";
                        j = 1;
                }
                output = output + "</table>";
                document.getElementById('table-10').innerHTML= output;
                }


               
                var rowss = 10;
                var colss = 7;
                if(rowss == "" || rowss == null)
                        rowss = 10;
                if(colss== "" || colss== null)
                        colss = 10;
                createTablee(rowss, colss);
                function createTablee(rowss, colss)
                {
                  var j=1;
                  var outputt = "<table border='1' width='100%' cellspacing='0'cellpadding='5'>";
                  for(i=1;i<=rowss;i++)
                  {
                    outputt = outputt + "<tr>";
                    while(j<=colss)
                    {
                        outputt = outputt + "<td>" + i*j + "</td>";
                         j = j+1;
                       }
                        outputt = outputt + "</tr>";
                        j = 1;
                }
                outputt = outputt + "</table>";
                document.getElementById('table-7').innerHTML= outputt;
                }
             
            