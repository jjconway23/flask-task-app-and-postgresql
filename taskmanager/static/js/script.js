
    let sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
  
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: 'dd, mmm, yyyy',
      i18n: {done:"Select"}
    });
  
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);