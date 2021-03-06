/**
 * DropDownButton Default Sample
 */
import { DropDownButton, DropDownButtonModel } from '../../../src/drop-down-button/index';
import { ItemModel } from '../../../src/common/index';
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { createTable } from '../../common/common';

createTable();
enableRipple(true);

let items: ItemModel[] = [
    {
        text: 'Unread',
        iconCss: 'ddb-icons e-unread',
    },
    {
        text: 'Has Attachments',
        iconCss: 'ddb-icons e-attachments',
        url: 'http://www.google.com'
    },
    {
        text: 'Categorized',
        iconCss: 'e-icons e-categorized'
    },
    {
        separator: true
    },
    {
        text: 'Important',
        iconCss: 'ddb-icons e-important'
    },
    {
        text: 'More Filters',
        iconCss: 'e-icons e-more',
    }];

let menuOptions: DropDownButtonModel = {
    items: items,
    iconCss: 'e-icons e-filter',
    iconPosition: 'Left'
};

let btnObj: DropDownButton = new DropDownButton(menuOptions);
btnObj.appendTo('#normal');

menuOptions.cssClass = 'e-small';

let btnObj1: DropDownButton = new DropDownButton(menuOptions);
btnObj1.appendTo('#small');

menuOptions.cssClass = 'e-bigger';

let btnObj2: DropDownButton = new DropDownButton(menuOptions);
btnObj2.appendTo('#bigger');

menuOptions.cssClass = 'e-bigger e-small';

let btnObj3: DropDownButton = new DropDownButton(menuOptions);
btnObj3.appendTo('#bigger-small');

document.getElementById('material').onclick = (e : Event) => {
    document.body.classList.remove("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/material.css');
};
document.getElementById('fabric').onclick = (e : Event) => {
    document.body.classList.remove("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/fabric.css');
};
document.getElementById('bootstrap').onclick = (e : Event) => {
    document.body.classList.remove("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap.css');
};
document.getElementById('highcontrast').onclick = (e : Event) => {
    document.body.classList.add("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/highcontrast.css');
};
document.getElementById('material-dark').onclick = (e : Event) => {
    document.body.classList.add("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/material-dark.css');
};
document.getElementById('fabric-dark').onclick = (e : Event) => {
    document.body.classList.add("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/fabric-dark.css');
};
document.getElementById('bootstrap-dark').onclick = (e : Event) => {
    document.body.classList.add("darkBG");
    document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap-dark.css');
};