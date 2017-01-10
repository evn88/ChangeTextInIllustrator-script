﻿var docRef = app.activeDocument;
/*
    Ниже массив с ФИО и должностями.
    Пример: ['Вершков Егор Николаевич Инженер программист', 'Светашов Павел Владимирович Ведущий инженер программист']
    */
var peoples = ['Белик Александр Владимирович машинист автогидроподъёмника Камышинского участка филиала Камышинские межрайонные электрические сети',
'Губар Алексей Владимирович электромонтер по эксплуатации распределительных сетей Красноярского участка филиала Жирновские межрайонные электрические сети',
'Ков Александр Фёдорович электромонтер по эксплуатации распределительных сетей Еланского участка филиала Жирновские межрайонные электрические сети',
'Фис Сергей Фёдорович инженер-программист филиала Жирновские межрайонные электрические сети',
'Баск Владимир Владимирович водитель автомобиля оперативно-выездной бригады Жирновского участка филиала Жирновские межрайонные электрические сети',
'Маликова Галина Викторовна инженер сектора мониторинга и анализа потерь отдела реализации услуг и анализа потерь электроэнергии управления учета электроэнергии и реализации услуг',
]
var totalPeoples = peoples.length; //кол-во элементов массива peoples
var f, io = null; // f - фамилия; io - Имя Отчество
var dolznost = null;  // должность
$.writeln (totalPeoples); //выведет в консоль сколько будет создано файлов

/* Функция Экспорта в JPG*/
saveJpg = function ( doc, filePath) {
    var options = new ExportOptionsJPEG();
    var destFile = new File( filePath + '.jpg' );
    options.antiAliasing = true;    //Сглаживание острых углов
    options.artBoardClipping = true; //хз
    options.verticalScale = "770.0"; //Заданно максимальное значение. (Это не пиксели!!!)
    options.horizontalScale = "770.0"; 
    options.qualitySetting = 100;   //Качество картинки 100%
    
	doc.exportFile(destFile, ExportType.JPEG , options);
}


for (var i=0; i < totalPeoples; i++){
    f = peoples[i].split (' ', 1); //Преобразуем строку в массив и оставляем первый элемент, т.е. Фамилию
    io = peoples[i].split (' ').splice(1, 2).join(" "); //Преобразуем в массив пропускаем 1 элемент и оставляем 2 элемента, затем  преобразуем обратно в строку.
    dolznost = peoples[i].split (' ').splice(3).join (" "); //Преобразуем в массив, удаляем первые 3 элемента и обратно преобразуем в строку
    
    $.writeln (docRef.textFrames["fio"].textRange.contents = f + "" + io); //Меняем значение текста в документе на слое fio и выводим в консоль
    docRef.textFrames["dolznost"].textRange.contents = dolznost; //Меняем значение текста в документе на слое dolznost
    saveJpg (docRef, "D:/Design/Грамота/out/"+ f + "-"+io); //Сохраняем в jpg  с именем файла [ф-и-о].jpg
 }
